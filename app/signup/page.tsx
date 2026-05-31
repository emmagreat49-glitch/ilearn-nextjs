'use client'
import { useState } from 'react'
import { useRouter } from 'next/navigation'

export default function SignupPage() {
  const [fullName, setFullName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')
  const [error, setError] = useState('')
  const [loading, setLoading] = useState(false)
  const router = useRouter()

  const handleSignup = async (e: React.FormEvent) => {
    e.preventDefault()
    setError('')

    if (!fullName || !email || !password || !confirmPassword) {
      setError('All fields are required')
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
      router.push('/login?signup=success')
    }, 800)
  }

  return (
    <div style={{ background: '#0a0e27', color: '#fff', minHeight: '100vh', fontFamily: 'Inter, sans-serif', display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '20px' }}>
      <div style={{
        position: 'fixed', top: 0, left: 0, width: '100%', height: '100%',
        background: 'radial-gradient(circle at 20% 50%, rgba(139, 92, 246, 0.15) 0%, transparent 50%), radial-gradient(circle at 80% 80%, rgba(59, 130, 246, 0.1) 0%, transparent 50%)',
        zIndex: 0, pointerEvents: 'none',
      }} />

      <div style={{ position: 'relative', zIndex: 2, width: '100%', maxWidth: '420px' }}>
        <div style={{ textAlign: 'center', marginBottom: '60px' }}>
          <div style={{ marginBottom: '32px', display: 'flex', justifyContent: 'center' }}>
            <svg width="56" height="56" viewBox="0 0 100 140" xmlns="http://www.w3.org/2000/svg" style={{ borderRadius: '14px', padding: '8px', background: 'linear-gradient(135deg, #8b5cf6 0%, #3b82f6 100%)', boxShadow: '0 8px 32px rgba(139, 92, 246, 0.4)' }}>
              <defs>
                <linearGradient id="signupLogo" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" style={{ stopColor: '#ffffff', stopOpacity: 1 }} />
                  <stop offset="100%" style={{ stopColor: '#ffffff', stopOpacity: 1 }} />
                </linearGradient>
              </defs>
              <circle cx="35" cy="30" r="12" fill="url(#signupLogo)" />
              <path d="M 20 55 Q 15 55 15 65 L 15 115 Q 15 125 20 125 L 30 130 Q 28 130 25 130 L 25 65 Q 25 55 30 55 Z" fill="url(#signupLogo)" opacity="0.4"/>
              <path d="M 30 55 Q 25 55 25 65 L 25 115 Q 25 125 30 125 L 50 125 Q 55 125 55 115 L 55 65 Q 55 55 50 55 Z" fill="url(#signupLogo)"/>
              <ellipse cx="40" cy="55" rx="15" ry="4" fill="url(#signupLogo)" opacity="0.6"/>
            </svg>
          </div>

          <h1 style={{ fontSize: '32px', fontWeight: '800', marginBottom: '12px', letterSpacing: '-0.5px' }}>Create account</h1>
          <p style={{ fontSize: '15px', color: '#cbd5e1', fontWeight: '500' }}>Join thousands learning smarter with Sage</p>
        </div>

        <form onSubmit={handleSignup} style={{
          background: 'linear-gradient(135deg, rgba(139, 92, 246, 0.12) 0%, rgba(59, 130, 246, 0.08) 100%)',
          border: '1.5px solid rgba(139, 92, 246, 0.25)',
          borderRadius: '20px',
          padding: '40px',
          backdropFilter: 'blur(40px)',
          boxShadow: '0 20px 60px rgba(0, 0, 0, 0.3)',
        }}>
          <div style={{ marginBottom: '20px' }}>
            <label style={{ display: 'block', fontSize: '14px', fontWeight: '600', marginBottom: '10px', color: '#e0e7ff', letterSpacing: '-0.2px' }}>Full Name</label>
            <input
              type="text"
              value={fullName}
              onChange={(e) => setFullName(e.target.value)}
              placeholder="John Doe"
              style={{
                width: '100%',
                padding: '12px 16px',
                background: 'rgba(255, 255, 255, 0.05)',
                border: '1.5px solid rgba(139, 92, 246, 0.25)',
                borderRadius: '12px',
                color: '#fff',
                fontSize: '15px',
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

          <div style={{ marginBottom: '20px' }}>
            <label style={{ display: 'block', fontSize: '14px', fontWeight: '600', marginBottom: '10px', color: '#e0e7ff', letterSpacing: '-0.2px' }}>Email</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="you@example.com"
              style={{
                width: '100%',
                padding: '12px 16px',
                background: 'rgba(255, 255, 255, 0.05)',
                border: '1.5px solid rgba(139, 92, 246, 0.25)',
                borderRadius: '12px',
                color: '#fff',
                fontSize: '15px',
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

          <div style={{ marginBottom: '20px' }}>
            <label style={{ display: 'block', fontSize: '14px', fontWeight: '600', marginBottom: '10px', color: '#e0e7ff', letterSpacing: '-0.2px' }}>Password</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="••••••••"
              style={{
                width: '100%',
                padding: '12px 16px',
                background: 'rgba(255, 255, 255, 0.05)',
                border: '1.5px solid rgba(139, 92, 246, 0.25)',
                borderRadius: '12px',
                color: '#fff',
                fontSize: '15px',
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

          <div style={{ marginBottom: '24px' }}>
            <label style={{ display: 'block', fontSize: '14px', fontWeight: '600', marginBottom: '10px', color: '#e0e7ff', letterSpacing: '-0.2px' }}>Confirm Password</label>
            <input
              type="password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              placeholder="••••••••"
              style={{
                width: '100%',
                padding: '12px 16px',
                background: 'rgba(255, 255, 255, 0.05)',
                border: '1.5px solid rgba(139, 92, 246, 0.25)',
                borderRadius: '12px',
                color: '#fff',
                fontSize: '15px',
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
            <div style={{ background: 'rgba(239, 68, 68, 0.1)', border: '1px solid rgba(239, 68, 68, 0.3)', borderRadius: '10px', padding: '12px 14px', marginBottom: '20px', fontSize: '14px', color: '#fca5a5', fontWeight: '500' }}>
              {error}
            </div>
          )}

          <button
            type="submit"
            disabled={loading}
            style={{
              width: '100%',
              padding: '12px 24px',
              background: loading ? 'rgba(139, 92, 246, 0.5)' : 'linear-gradient(135deg, #8b5cf6 0%, #3b82f6 100%)',
              border: 'none',
              borderRadius: '12px',
              color: '#fff',
              fontWeight: '700',
              fontSize: '15px',
              cursor: loading ? 'default' : 'pointer',
              transition: 'all 0.3s ease',
              boxShadow: loading ? 'none' : '0 12px 32px rgba(139, 92, 246, 0.3)',
              letterSpacing: '-0.3px',
            }}
            onMouseEnter={(e) => {
              if (!loading) {
                e.currentTarget.style.transform = 'translateY(-2px)'
                e.currentTarget.style.boxShadow = '0 16px 48px rgba(139, 92, 246, 0.4)'
              }
            }}
            onMouseLeave={(e) => {
              if (!loading) {
                e.currentTarget.style.transform = 'translateY(0)'
                e.currentTarget.style.boxShadow = '0 12px 32px rgba(139, 92, 246, 0.3)'
              }
            }}
          >
            {loading ? 'Creating account...' : 'Create Account'}
          </button>
        </form>

        <div style={{ textAlign: 'center', marginTop: '32px' }}>
          <p style={{ fontSize: '14px', color: '#cbd5e1', fontWeight: '500', margin: '0' }}>
            Already have an account?{' '}
            <a href="/login" style={{ color: '#a78bfa', textDecoration: 'none', fontWeight: '700', transition: 'color 0.2s' }} onMouseEnter={(e) => e.currentTarget.style.color = '#c4b5fd'} onMouseLeave={(e) => e.currentTarget.style.color = '#a78bfa'}>
              Sign in
            </a>
          </p>
        </div>

        <div style={{ marginTop: '40px', paddingTop: '24px', borderTop: '1px solid rgba(139, 92, 246, 0.15)', textAlign: 'center', fontSize: '12px', color: '#64748b' }}>
          Powered by Sage • Premium learning redefined
        </div>
      </div>
    </div>
  )
}