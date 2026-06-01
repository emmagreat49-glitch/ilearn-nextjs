'use client'
import { useState, useEffect } from 'react'
import { useRouter, useSearchParams } from 'next/navigation'

export default function ForgotPasswordPage() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')
  const [showPassword, setShowPassword] = useState(false)
  const [showConfirm, setShowConfirm] = useState(false)
  const [submitted, setSubmitted] = useState(false)
  const [resetting, setResetting] = useState(false)
  const [error, setError] = useState('')
  const [loading, setLoading] = useState(false)
  const router = useRouter()
  const searchParams = useSearchParams()
  const resetToken = searchParams.get('token')

  useEffect(() => {
    if (resetToken) {
      setResetting(true)
    }
  }, [resetToken])

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setError('')

    if (!email) {
      setError('Please enter your email')
      return
    }

    setLoading(true)

    try {
      const usersData = localStorage.getItem('ilearn_users')
      const users = usersData ? JSON.parse(usersData) : []
      const user = users.find((u: any) => u.email === email)

      if (!user) {
        setSubmitted(true)
        setLoading(false)
        return
      }

      const token = Math.random().toString(36).substring(7) + Date.now().toString(36)
      const resetTokens = JSON.parse(localStorage.getItem('ilearn_reset_tokens') || '{}')
      resetTokens[token] = { email, expiresAt: Date.now() + 3600000 }
      localStorage.setItem('ilearn_reset_tokens', JSON.stringify(resetTokens))

      const resetLink = `${window.location.origin}/forgot-password?token=${token}`
      console.log('Password reset link (in production, this would be emailed):', resetLink)

      setTimeout(() => {
        setSubmitted(true)
        setLoading(false)
      }, 800)
    } catch (err) {
      setError('An error occurred. Please try again.')
      setLoading(false)
    }
  }

  const handleResetPassword = async (e: React.FormEvent) => {
    e.preventDefault()
    setError('')

    if (!password || !confirmPassword) {
      setError('Please fill in all fields')
      return
    }

    if (password !== confirmPassword) {
      setError('Passwords do not match')
      return
    }

    if (password.length < 8) {
      setError('Password must be at least 8 characters')
      return
    }

    setLoading(true)

    try {
      const resetTokens = JSON.parse(localStorage.getItem('ilearn_reset_tokens') || '{}')
      const tokenData = resetTokens[resetToken]

      if (!tokenData || tokenData.expiresAt < Date.now()) {
        setError('Reset link has expired. Please request a new one.')
        setLoading(false)
        return
      }

      const usersData = localStorage.getItem('ilearn_users')
      const users = usersData ? JSON.parse(usersData) : []
      const userIndex = users.findIndex((u: any) => u.email === tokenData.email)

      if (userIndex !== -1) {
        users[userIndex].password = password
        localStorage.setItem('ilearn_users', JSON.stringify(users))
        delete resetTokens[resetToken]
        localStorage.setItem('ilearn_reset_tokens', JSON.stringify(resetTokens))

        setTimeout(() => {
          router.push('/login?reset=success')
        }, 800)
      }
    } catch (err) {
      setError('An error occurred. Please try again.')
      setLoading(false)
    }
  }

  if (resetting) {
    return (
      <div style={{ background: '#0a0e27', color: '#fff', minHeight: '100vh', fontFamily: 'Inter, sans-serif', display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '20px' }}>
        <div style={{
          position: 'fixed', top: 0, left: 0, width: '100%', height: '100%',
          background: 'radial-gradient(circle at 20% 50%, rgba(139, 92, 246, 0.15) 0%, transparent 50%), radial-gradient(circle at 80% 80%, rgba(59, 130, 246, 0.1) 0%, transparent 50%)',
          zIndex: 0, pointerEvents: 'none',
        }} />

        <div style={{ position: 'relative', zIndex: 2, width: '100%', maxWidth: '420px' }}>
          <div style={{ textAlign: 'center', marginBottom: '48px' }}>
            <div style={{ marginBottom: '28px', display: 'flex', justifyContent: 'center' }}>
              <svg width="52" height="52" viewBox="0 0 100 140" xmlns="http://www.w3.org/2000/svg" style={{ borderRadius: '12px', padding: '8px', background: 'linear-gradient(135deg, #8b5cf6 0%, #3b82f6 100%)', boxShadow: '0 8px 32px rgba(139, 92, 246, 0.4)' }}>
                <defs>
                  <linearGradient id="resetLogo" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" style={{ stopColor: '#ffffff', stopOpacity: 1 }} />
                    <stop offset="100%" style={{ stopColor: '#ffffff', stopOpacity: 1 }} />
                  </linearGradient>
                </defs>
                <circle cx="35" cy="30" r="12" fill="url(#resetLogo)" />
                <path d="M 20 55 Q 15 55 15 65 L 15 115 Q 15 125 20 125 L 30 130 Q 28 130 25 130 L 25 65 Q 25 55 30 55 Z" fill="url(#resetLogo)" opacity="0.4"/>
                <path d="M 30 55 Q 25 55 25 65 L 25 115 Q 25 125 30 125 L 50 125 Q 55 125 55 115 L 55 65 Q 55 55 50 55 Z" fill="url(#resetLogo)"/>
                <ellipse cx="40" cy="55" rx="15" ry="4" fill="url(#resetLogo)" opacity="0.6"/>
              </svg>
            </div>

            <h1 style={{ fontSize: '28px', fontWeight: '800', marginBottom: '8px', letterSpacing: '-0.3px' }}>Set new password</h1>
            <p style={{ fontSize: '14px', color: '#cbd5e1', fontWeight: '500', margin: 0 }}>Create a new password for your account</p>
          </div>

          <form onSubmit={handleResetPassword} style={{
            background: 'linear-gradient(135deg, rgba(139, 92, 246, 0.12) 0%, rgba(59, 130, 246, 0.08) 100%)',
            border: '1.5px solid rgba(139, 92, 246, 0.25)',
            borderRadius: '18px',
            padding: '24px 16px',
            backdropFilter: 'blur(40px)',
            boxShadow: '0 20px 60px rgba(0, 0, 0, 0.3)',
            boxSizing: 'border-box',
            width: '100%',
          }}>
            <div style={{ marginBottom: '18px' }}>
              <label style={{ display: 'block', fontSize: '13px', fontWeight: '600', marginBottom: '8px', color: '#e0e7ff', letterSpacing: '-0.2px', textTransform: 'uppercase' }}>New Password</label>
              <div style={{ position: 'relative', display: 'flex', alignItems: 'center' }}>
                <input
                  type={showPassword ? 'text' : 'password'}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="••••••••"
                  style={{
                    width: '100%',
                    padding: '11px 14px',
                    paddingRight: '42px',
                    background: 'rgba(255, 255, 255, 0.05)',
                    border: '1.5px solid rgba(139, 92, 246, 0.25)',
                    borderRadius: '10px',
                    color: '#fff',
                    fontSize: '14px',
                    fontWeight: '500',
                    outline: 'none',
                    transition: 'all 0.3s ease',
                    boxSizing: 'border-box',
                  }}
                  onFocus={(e) => {
                    e.currentTarget.style.borderColor = 'rgba(139, 92, 246, 0.6)'
                    e.currentTarget.style.background = 'rgba(255, 255, 255, 0.08)'
                  }}
                  onBlur={(e) => {
                    e.currentTarget.style.borderColor = 'rgba(139, 92, 246, 0.25)'
                    e.currentTarget.style.background = 'rgba(255, 255, 255, 0.05)'
                  }}
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  style={{
                    position: 'absolute',
                    right: '12px',
                    background: 'none',
                    border: 'none',
                    color: '#94a3b8',
                    cursor: 'pointer',
                    padding: '0',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    width: '24px',
                    height: '24px',
                    transition: 'color 0.2s',
                  }}
                  onMouseEnter={(e) => e.currentTarget.style.color = '#cbd5e1'}
                  onMouseLeave={(e) => e.currentTarget.style.color = '#94a3b8'}
                >
                  {showPassword ? (
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path>
                      <circle cx="12" cy="12" r="3"></circle>
                    </svg>
                  ) : (
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M17.94 17.94A10.07 10.07 0 0 1 12 20c-7 0-11-8-11-8a18.45 18.45 0 0 1 5.06-5.94M9.9 4.24A9.12 9.12 0 0 1 12 4c7 0 11 8 11 8a18.5 18.5 0 0 1-2.16 3.19m-6.72-1.07a3 3 0 1 1-4.24-4.24"></path>
                      <line x1="1" y1="1" x2="23" y2="23"></line>
                    </svg>
                  )}
                </button>
              </div>
            </div>

            <div style={{ marginBottom: '24px' }}>
              <label style={{ display: 'block', fontSize: '13px', fontWeight: '600', marginBottom: '8px', color: '#e0e7ff', letterSpacing: '-0.2px', textTransform: 'uppercase' }}>Confirm Password</label>
              <div style={{ position: 'relative', display: 'flex', alignItems: 'center' }}>
                <input
                  type={showConfirm ? 'text' : 'password'}
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                  placeholder="••••••••"
                  style={{
                    width: '100%',
                    padding: '11px 14px',
                    paddingRight: '42px',
                    background: 'rgba(255, 255, 255, 0.05)',
                    border: '1.5px solid rgba(139, 92, 246, 0.25)',
                    borderRadius: '10px',
                    color: '#fff',
                    fontSize: '14px',
                    fontWeight: '500',
                    outline: 'none',
                    transition: 'all 0.3s ease',
                    boxSizing: 'border-box',
                  }}
                  onFocus={(e) => {
                    e.currentTarget.style.borderColor = 'rgba(139, 92, 246, 0.6)'
                    e.currentTarget.style.background = 'rgba(255, 255, 255, 0.08)'
                  }}
                  onBlur={(e) => {
                    e.currentTarget.style.borderColor = 'rgba(139, 92, 246, 0.25)'
                    e.currentTarget.style.background = 'rgba(255, 255, 255, 0.05)'
                  }}
                />
                <button
                  type="button"
                  onClick={() => setShowConfirm(!showConfirm)}
                  style={{
                    position: 'absolute',
                    right: '12px',
                    background: 'none',
                    border: 'none',
                    color: '#94a3b8',
                    cursor: 'pointer',
                    padding: '0',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    width: '24px',
                    height: '24px',
                    transition: 'color 0.2s',
                  }}
                  onMouseEnter={(e) => e.currentTarget.style.color = '#cbd5e1'}
                  onMouseLeave={(e) => e.currentTarget.style.color = '#94a3b8'}
                >
                  {showConfirm ? (
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path>
                      <circle cx="12" cy="12" r="3"></circle>
                    </svg>
                  ) : (
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M17.94 17.94A10.07 10.07 0 0 1 12 20c-7 0-11-8-11-8a18.45 18.45 0 0 1 5.06-5.94M9.9 4.24A9.12 9.12 0 0 1 12 4c7 0 11 8 11 8a18.5 18.5 0 0 1-2.16 3.19m-6.72-1.07a3 3 0 1 1-4.24-4.24"></path>
                      <line x1="1" y1="1" x2="23" y2="23"></line>
                    </svg>
                  )}
                </button>
              </div>
            </div>

            {error && (
              <div style={{ background: 'rgba(239, 68, 68, 0.1)', border: '1px solid rgba(239, 68, 68, 0.3)', borderRadius: '10px', padding: '12px 14px', marginBottom: '20px', fontSize: '13px', color: '#fca5a5', fontWeight: '500' }}>
                {error}
              </div>
            )}

            <button
              type="submit"
              disabled={loading}
              style={{
                width: '100%',
                padding: '10px 16px',
                background: loading ? 'rgba(139, 92, 246, 0.5)' : 'linear-gradient(135deg, #8b5cf6 0%, #3b82f6 100%)',
                border: 'none',
                borderRadius: '10px',
                color: '#fff',
                fontWeight: '700',
                fontSize: '14px',
                cursor: loading ? 'default' : 'pointer',
                transition: 'all 0.3s ease',
                boxShadow: loading ? 'none' : '0 12px 32px rgba(139, 92, 246, 0.3)',
                letterSpacing: '-0.2px',
                boxSizing: 'border-box',
                display: 'block',
                margin: '0',
              }}
            >
              {loading ? 'Resetting...' : 'Reset Password'}
            </button>
          </form>

          <div style={{ marginTop: '40px', paddingTop: '20px', borderTop: '1px solid rgba(139, 92, 246, 0.15)', textAlign: 'center', fontSize: '11px', color: '#64748b' }}>
            Powered by Sage • Premium learning redefined
          </div>
        </div>
      </div>
    )
  }

  return (
    <div style={{ background: '#0a0e27', color: '#fff', minHeight: '100vh', fontFamily: 'Inter, sans-serif', display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '20px' }}>
      <div style={{
        position: 'fixed', top: 0, left: 0, width: '100%', height: '100%',
        background: 'radial-gradient(circle at 20% 50%, rgba(139, 92, 246, 0.15) 0%, transparent 50%), radial-gradient(circle at 80% 80%, rgba(59, 130, 246, 0.1) 0%, transparent 50%)',
        zIndex: 0, pointerEvents: 'none',
      }} />

      <div style={{ position: 'relative', zIndex: 2, width: '100%', maxWidth: '420px' }}>
        {submitted ? (
          <div style={{ textAlign: 'center' }}>
            <div style={{ width: '64px', height: '64px', background: 'linear-gradient(135deg, rgba(139, 92, 246, 0.2) 0%, rgba(59, 130, 246, 0.15) 100%)', border: '2px solid rgba(139, 92, 246, 0.4)', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 28px', fontSize: '32px' }}>
              ✓
            </div>

            <h1 style={{ fontSize: '28px', fontWeight: '800', marginBottom: '12px', letterSpacing: '-0.3px' }}>Check your email</h1>
            <p style={{ fontSize: '14px', color: '#cbd5e1', fontWeight: '500', marginBottom: '28px', lineHeight: '1.6' }}>
              Password reset instructions have been sent to <strong style={{ color: '#e0e7ff' }}>{email}</strong>
            </p>

            <button
              onClick={() => router.push('/login')}
              style={{
                padding: '10px 24px',
                background: 'linear-gradient(135deg, #8b5cf6 0%, #3b82f6 100%)',
                border: 'none',
                borderRadius: '10px',
                color: '#fff',
                fontWeight: '700',
                fontSize: '14px',
                cursor: 'pointer',
                transition: 'all 0.3s ease',
                boxShadow: '0 12px 32px rgba(139, 92, 246, 0.3)',
                letterSpacing: '-0.2px',
              }}
            >
              Back to Sign In
            </button>
          </div>
        ) : (
          <>
            <div style={{ textAlign: 'center', marginBottom: '48px' }}>
              <div style={{ marginBottom: '28px', display: 'flex', justifyContent: 'center' }}>
                <svg width="52" height="52" viewBox="0 0 100 140" xmlns="http://www.w3.org/2000/svg" style={{ borderRadius: '12px', padding: '8px', background: 'linear-gradient(135deg, #8b5cf6 0%, #3b82f6 100%)', boxShadow: '0 8px 32px rgba(139, 92, 246, 0.4)' }}>
                  <defs>
                    <linearGradient id="fpLogo" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" style={{ stopColor: '#ffffff', stopOpacity: 1 }} />
                      <stop offset="100%" style={{ stopColor: '#ffffff', stopOpacity: 1 }} />
                    </linearGradient>
                  </defs>
                  <circle cx="35" cy="30" r="12" fill="url(#fpLogo)" />
                  <path d="M 20 55 Q 15 55 15 65 L 15 115 Q 15 125 20 125 L 30 130 Q 28 130 25 130 L 25 65 Q 25 55 30 55 Z" fill="url(#fpLogo)" opacity="0.4"/>
                  <path d="M 30 55 Q 25 55 25 65 L 25 115 Q 25 125 30 125 L 50 125 Q 55 125 55 115 L 55 65 Q 55 55 50 55 Z" fill="url(#fpLogo)"/>
                  <ellipse cx="40" cy="55" rx="15" ry="4" fill="url(#fpLogo)" opacity="0.6"/>
                </svg>
              </div>

              <h1 style={{ fontSize: '28px', fontWeight: '800', marginBottom: '8px', letterSpacing: '-0.3px' }}>Reset password</h1>
              <p style={{ fontSize: '14px', color: '#cbd5e1', fontWeight: '500', margin: 0 }}>Enter your email to receive reset instructions</p>
            </div>

            <form onSubmit={handleSubmit} style={{
              background: 'linear-gradient(135deg, rgba(139, 92, 246, 0.12) 0%, rgba(59, 130, 246, 0.08) 100%)',
              border: '1.5px solid rgba(139, 92, 246, 0.25)',
              borderRadius: '18px',
              padding: '24px 16px',
              backdropFilter: 'blur(40px)',
              boxShadow: '0 20px 60px rgba(0, 0, 0, 0.3)',
              boxSizing: 'border-box',
              width: '100%',
            }}>
              <div style={{ marginBottom: '24px' }}>
                <label style={{ display: 'block', fontSize: '13px', fontWeight: '600', marginBottom: '8px', color: '#e0e7ff', letterSpacing: '-0.2px', textTransform: 'uppercase' }}>Email Address</label>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="you@example.com"
                  style={{
                    width: '100%',
                    padding: '11px 14px',
                    background: 'rgba(255, 255, 255, 0.05)',
                    border: '1.5px solid rgba(139, 92, 246, 0.25)',
                    borderRadius: '10px',
                    color: '#fff',
                    fontSize: '14px',
                    fontWeight: '500',
                    outline: 'none',
                    transition: 'all 0.3s ease',
                    boxSizing: 'border-box',
                  }}
                  onFocus={(e) => {
                    e.currentTarget.style.borderColor = 'rgba(139, 92, 246, 0.6)'
                    e.currentTarget.style.background = 'rgba(255, 255, 255, 0.08)'
                  }}
                  onBlur={(e) => {
                    e.currentTarget.style.borderColor = 'rgba(139, 92, 246, 0.25)'
                    e.currentTarget.style.background = 'rgba(255, 255, 255, 0.05)'
                  }}
                />
              </div>

              {error && (
                <div style={{ background: 'rgba(239, 68, 68, 0.1)', border: '1px solid rgba(239, 68, 68, 0.3)', borderRadius: '10px', padding: '12px 14px', marginBottom: '20px', fontSize: '13px', color: '#fca5a5', fontWeight: '500' }}>
                  {error}
                </div>
              )}

              <button
                type="submit"
                disabled={loading}
                style={{
                  width: '100%',
                  padding: '10px 16px',
                  background: loading ? 'rgba(139, 92, 246, 0.5)' : 'linear-gradient(135deg, #8b5cf6 0%, #3b82f6 100%)',
                  border: 'none',
                  borderRadius: '10px',
                  color: '#fff',
                  fontWeight: '700',
                  fontSize: '14px',
                  cursor: loading ? 'default' : 'pointer',
                  transition: 'all 0.3s ease',
                  boxShadow: loading ? 'none' : '0 12px 32px rgba(139, 92, 246, 0.3)',
                  letterSpacing: '-0.2px',
                  boxSizing: 'border-box',
                  display: 'block',
                  margin: '0',
                }}
              >
                {loading ? 'Sending...' : 'Send Reset Link'}
              </button>
            </form>

            <div style={{ textAlign: 'center', marginTop: '28px' }}>
              <p style={{ fontSize: '13px', color: '#cbd5e1', fontWeight: '500', margin: '0' }}>
                Remember your password?{' '}
                <a href="/login" style={{ color: '#a78bfa', textDecoration: 'none', fontWeight: '700', transition: 'color 0.2s' }} onMouseEnter={(e) => e.currentTarget.style.color = '#c4b5fd'} onMouseLeave={(e) => e.currentTarget.style.color = '#a78bfa'}>
                  Sign in
                </a>
              </p>
            </div>

            <div style={{ marginTop: '40px', paddingTop: '20px', borderTop: '1px solid rgba(139, 92, 246, 0.15)', textAlign: 'center', fontSize: '11px', color: '#64748b' }}>
              Powered by Sage • Premium learning redefined
            </div>
          </>
        )}
      </div>
    </div>
  )
}