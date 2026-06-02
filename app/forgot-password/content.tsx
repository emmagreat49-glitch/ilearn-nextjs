'use client'

import { useState, useEffect } from 'react'
import { useRouter, useSearchParams } from 'next/navigation'

export default function ForgotPasswordContent() {
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
    setTimeout(() => {
      setSubmitted(true)
      setLoading(false)
    }, 800)
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
    setTimeout(() => {
      router.push('/login?reset=success')
    }, 800)
  }

  if (resetting) {
    return (
      <div style={{ background: '#0a0e27', color: '#fff', minHeight: '100vh', fontFamily: 'Inter, sans-serif', display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '20px' }}>
        <div style={{ position: 'fixed', top: 0, left: 0, width: '100%', height: '100%', background: 'radial-gradient(circle at 20% 50%, rgba(139, 92, 246, 0.15) 0%, transparent 50%), radial-gradient(circle at 80% 80%, rgba(59, 130, 246, 0.1) 0%, transparent 50%)', zIndex: 0, pointerEvents: 'none' }} />
        <div style={{ position: 'relative', zIndex: 2, width: '100%', maxWidth: '420px', textAlign: 'center' }}>
          <div style={{ marginBottom: '28px', display: 'flex', justifyContent: 'center' }}>
            <svg width="52" height="52" viewBox="0 0 100 140" xmlns="http://www.w3.org/2000/svg" style={{ borderRadius: '12px', padding: '8px', background: 'linear-gradient(135deg, #8b5cf6 0%, #3b82f6 100%)', boxShadow: '0 8px 32px rgba(139, 92, 246, 0.4)' }}>
              <defs><linearGradient id="resetLogo" x1="0%" y1="0%" x2="100%" y2="100%"><stop offset="0%" style={{ stopColor: '#ffffff' }} /><stop offset="100%" style={{ stopColor: '#ffffff' }} /></linearGradient></defs>
              <circle cx="35" cy="30" r="12" fill="url(#resetLogo)" />
              <path d="M 30 55 Q 25 55 25 65 L 25 115 Q 25 125 30 125 L 50 125 Q 55 125 55 115 L 55 65 Q 55 55 50 55 Z" fill="url(#resetLogo)" />
            </svg>
          </div>
          <h1 style={{ fontSize: '28px', fontWeight: '800', marginBottom: '8px' }}>Set new password</h1>
          <p style={{ fontSize: '14px', color: '#cbd5e1', marginBottom: '40px' }}>Create a new password for your account</p>

          <form onSubmit={handleResetPassword} style={{ background: 'linear-gradient(135deg, rgba(139, 92, 246, 0.12) 0%, rgba(59, 130, 246, 0.08) 100%)', border: '1.5px solid rgba(139, 92, 246, 0.25)', borderRadius: '18px', padding: '24px 16px', boxSizing: 'border-box', width: '100%', marginBottom: '28px' }}>
            <div style={{ marginBottom: '18px' }}>
              <label style={{ display: 'block', fontSize: '13px', fontWeight: '600', marginBottom: '8px', color: '#e0e7ff' }}>New Password</label>
              <div style={{ position: 'relative' }}>
                <input type={showPassword ? 'text' : 'password'} value={password} onChange={(e) => setPassword(e.target.value)} placeholder="••••••••" style={{ width: '100%', padding: '11px 14px', paddingRight: '42px', background: 'rgba(255, 255, 255, 0.05)', border: '1.5px solid rgba(139, 92, 246, 0.25)', borderRadius: '10px', color: '#fff', fontSize: '14px', fontWeight: '500', outline: 'none', boxSizing: 'border-box' }} />
                <button type="button" onClick={() => setShowPassword(!showPassword)} style={{ position: 'absolute', right: '12px', top: '12px', background: 'none', border: 'none', color: '#94a3b8', cursor: 'pointer', padding: '0', width: '24px', height: '24px' }}>
                  {showPassword ? <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" /><circle cx="12" cy="12" r="3" /></svg> : <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M17.94 17.94A10.07 10.07 0 0 1 12 20c-7 0-11-8-11-8a18.45 18.45 0 0 1 5.06-5.94M9.9 4.24A9.12 9.12 0 0 1 12 4c7 0 11 8 11 8a18.5 18.5 0 0 1-2.16 3.19m-6.72-1.07a3 3 0 1 1-4.24-4.24" /><line x1="1" y1="1" x2="23" y2="23" /></svg>}
                </button>
              </div>
            </div>
            <div style={{ marginBottom: '24px' }}>
              <label style={{ display: 'block', fontSize: '13px', fontWeight: '600', marginBottom: '8px', color: '#e0e7ff' }}>Confirm Password</label>
              <div style={{ position: 'relative' }}>
                <input type={showConfirm ? 'text' : 'password'} value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} placeholder="••••••••" style={{ width: '100%', padding: '11px 14px', paddingRight: '42px', background: 'rgba(255, 255, 255, 0.05)', border: '1.5px solid rgba(139, 92, 246, 0.25)', borderRadius: '10px', color: '#fff', fontSize: '14px', fontWeight: '500', outline: 'none', boxSizing: 'border-box' }} />
                <button type="button" onClick={() => setShowConfirm(!showConfirm)} style={{ position: 'absolute', right: '12px', top: '12px', background: 'none', border: 'none', color: '#94a3b8', cursor: 'pointer', padding: '0', width: '24px', height: '24px' }}>
                  {showConfirm ? <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" /><circle cx="12" cy="12" r="3" /></svg> : <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M17.94 17.94A10.07 10.07 0 0 1 12 20c-7 0-11-8-11-8a18.45 18.45 0 0 1 5.06-5.94M9.9 4.24A9.12 9.12 0 0 1 12 4c7 0 11 8 11 8a18.5 18.5 0 0 1-2.16 3.19m-6.72-1.07a3 3 0 1 1-4.24-4.24" /><line x1="1" y1="1" x2="23" y2="23" /></svg>}
                </button>
              </div>
            </div>
            {error && <div style={{ background: 'rgba(239, 68, 68, 0.1)', border: '1px solid rgba(239, 68, 68, 0.3)', borderRadius: '10px', padding: '12px 14px', marginBottom: '20px', fontSize: '13px', color: '#fca5a5' }}>{error}</div>}
            <button type="submit" disabled={loading} style={{ width: '100%', padding: '10px 16px', background: loading ? 'rgba(139, 92, 246, 0.5)' : 'linear-gradient(135deg, #8b5cf6 0%, #3b82f6 100%)', border: 'none', borderRadius: '10px', color: '#fff', fontWeight: '700', fontSize: '14px', cursor: loading ? 'default' : 'pointer', boxSizing: 'border-box' }}>
              {loading ? 'Resetting...' : 'Reset Password'}
            </button>
          </form>
        </div>
      </div>
    )
  }

  return (
    <div style={{ background: '#0a0e27', color: '#fff', minHeight: '100vh', fontFamily: 'Inter, sans-serif', display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '20px' }}>
      <div style={{ position: 'fixed', top: 0, left: 0, width: '100%', height: '100%', background: 'radial-gradient(circle at 20% 50%, rgba(139, 92, 246, 0.15) 0%, transparent 50%), radial-gradient(circle at 80% 80%, rgba(59, 130, 246, 0.1) 0%, transparent 50%)', zIndex: 0, pointerEvents: 'none' }} />
      <div style={{ position: 'relative', zIndex: 2, width: '100%', maxWidth: '420px' }}>
        {submitted ? (
          <div style={{ textAlign: 'center' }}>
            <div style={{ width: '64px', height: '64px', background: 'linear-gradient(135deg, rgba(139, 92, 246, 0.2) 0%, rgba(59, 130, 246, 0.15) 100%)', border: '2px solid rgba(139, 92, 246, 0.4)', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 28px', fontSize: '32px' }}>✓</div>
            <h1 style={{ fontSize: '28px', fontWeight: '800', marginBottom: '12px' }}>Check your email</h1>
            <p style={{ fontSize: '14px', color: '#cbd5e1', marginBottom: '28px' }}>Password reset instructions sent to <strong>{email}</strong></p>
            <button onClick={() => router.push('/login')} style={{ padding: '10px 24px', background: 'linear-gradient(135deg, #8b5cf6 0%, #3b82f6 100%)', border: 'none', borderRadius: '10px', color: '#fff', fontWeight: '700', fontSize: '14px', cursor: 'pointer' }}>Back to Sign In</button>
          </div>
        ) : (
          <>
            <div style={{ textAlign: 'center', marginBottom: '48px' }}>
              <div style={{ marginBottom: '28px', display: 'flex', justifyContent: 'center' }}>
                <svg width="52" height="52" viewBox="0 0 100 140" xmlns="http://www.w3.org/2000/svg" style={{ borderRadius: '12px', padding: '8px', background: 'linear-gradient(135deg, #8b5cf6 0%, #3b82f6 100%)', boxShadow: '0 8px 32px rgba(139, 92, 246, 0.4)' }}>
                  <defs><linearGradient id="fpLogo" x1="0%" y1="0%" x2="100%" y2="100%"><stop offset="0%" style={{ stopColor: '#ffffff' }} /><stop offset="100%" style={{ stopColor: '#ffffff' }} /></linearGradient></defs>
                  <circle cx="35" cy="30" r="12" fill="url(#fpLogo)" />
                  <path d="M 30 55 Q 25 55 25 65 L 25 115 Q 25 125 30 125 L 50 125 Q 55 125 55 115 L 55 65 Q 55 55 50 55 Z" fill="url(#fpLogo)" />
                </svg>
              </div>
              <h1 style={{ fontSize: '28px', fontWeight: '800', marginBottom: '8px' }}>Reset password</h1>
              <p style={{ fontSize: '14px', color: '#cbd5e1' }}>Enter your email to receive reset instructions</p>
            </div>

            <form onSubmit={handleSubmit} style={{ background: 'linear-gradient(135deg, rgba(139, 92, 246, 0.12) 0%, rgba(59, 130, 246, 0.08) 100%)', border: '1.5px solid rgba(139, 92, 246, 0.25)', borderRadius: '18px', padding: '24px 16px', boxSizing: 'border-box', width: '100%', marginBottom: '28px' }}>
              <div style={{ marginBottom: '24px' }}>
                <label style={{ display: 'block', fontSize: '13px', fontWeight: '600', marginBottom: '8px', color: '#e0e7ff' }}>Email Address</label>
                <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="you@example.com" style={{ width: '100%', padding: '11px 14px', background: 'rgba(255, 255, 255, 0.05)', border: '1.5px solid rgba(139, 92, 246, 0.25)', borderRadius: '10px', color: '#fff', fontSize: '14px', fontWeight: '500', outline: 'none', boxSizing: 'border-box' }} />
              </div>
              {error && <div style={{ background: 'rgba(239, 68, 68, 0.1)', border: '1px solid rgba(239, 68, 68, 0.3)', borderRadius: '10px', padding: '12px 14px', marginBottom: '20px', fontSize: '13px', color: '#fca5a5' }}>{error}</div>}
              <button type="submit" disabled={loading} style={{ width: '100%', padding: '10px 16px', background: loading ? 'rgba(139, 92, 246, 0.5)' : 'linear-gradient(135deg, #8b5cf6 0%, #3b82f6 100%)', border: 'none', borderRadius: '10px', color: '#fff', fontWeight: '700', fontSize: '14px', cursor: loading ? 'default' : 'pointer', boxSizing: 'border-box' }}>
                {loading ? 'Sending...' : 'Send Reset Link'}
              </button>
            </form>

            <div style={{ textAlign: 'center' }}>
              <p style={{ fontSize: '13px', color: '#cbd5e1', margin: '0' }}>
                Remember your password? <a href="/login" style={{ color: '#a78bfa', textDecoration: 'none', fontWeight: '700' }}>Sign in</a>
              </p>
            </div>
          </>
        )}
      </div>
    </div>
  )
}