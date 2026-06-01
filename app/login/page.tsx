'use client'
import { useState } from 'react'
import { useRouter } from 'next/navigation'

export default function LoginPage() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')
  const router = useRouter()

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault()
    setError('')
    setLoading(true)

    try {
      const usersData = localStorage.getItem('ilearn_users')
      const users = usersData ? JSON.parse(usersData) : []
      
      const user = users.find((u: any) => u.email === email)
      
      if (!user) {
        setError('Invalid email or password')
        setLoading(false)
        return
      }
      
      if (user.password !== password) {
        setError('Invalid email or password')
        setLoading(false)
        return
      }
      
      localStorage.setItem('ilearn_user', JSON.stringify({ email: user.email, name: user.name }))
      localStorage.setItem('ilearn_session', JSON.stringify({ loggedIn: true, timestamp: Date.now() }))
      
      setTimeout(() => {
        router.push('/dashboard')
      }, 500)
    } catch (err) {
      setError('An error occurred. Please try again.')
      setLoading(false)
    }
  }

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
                <linearGradient id="loginLogo" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" style={{ stopColor: '#ffffff', stopOpacity: 1 }} />
                  <stop offset="100%" style={{ stopColor: '#ffffff', stopOpacity: 1 }} />
                </linearGradient>
              </defs>
              <circle cx="35" cy="30" r="12" fill="url(#loginLogo)" />
              <path d="M 20 55 Q 15 55 15 65 L 15 115 Q 15 125 20 125 L 30 130 Q 28 130 25 130 L 25 65 Q 25 55 30 55 Z" fill="url(#loginLogo)" opacity="0.4"/>
              <path d="M 30 55 Q 25 55 25 65 L 25 115 Q 25 125 30 125 L 50 125 Q 55 125 55 115 L 55 65 Q 55 55 50 55 Z" fill="url(#loginLogo)"/>
              <ellipse cx="40" cy="55" rx="15" ry="4" fill="url(#loginLogo)" opacity="0.6"/>
            </svg>
          </div>

          <h1 style={{ fontSize: '28px', fontWeight: '800', marginBottom: '8px', letterSpacing: '-0.3px' }}>Welcome back</h1>
          <p style={{ fontSize: '14px', color: '#cbd5e1', fontWeight: '500', margin: 0 }}>Sign in to continue learning</p>
        </div>

        <form onSubmit={handleLogin} style={{
          background: 'linear-gradient(135deg, rgba(139, 92, 246, 0.12) 0%, rgba(59, 130, 246, 0.08) 100%)',
          border: '1.5px solid rgba(139, 92, 246, 0.25)',
          borderRadius: '18px',
          padding: '24px 16px',
          backdropFilter: 'blur(40px)',
          boxShadow: '0 20px 60px rgba(0, 0, 0, 0.3)',
          boxSizing: 'border-box',
          width: '100%',
        }}>
          <div style={{ marginBottom: '20px' }}>
            <label style={{ display: 'block', fontSize: '13px', fontWeight: '600', marginBottom: '8px', color: '#e0e7ff', letterSpacing: '-0.2px', textTransform: 'uppercase' }}>Email</label>
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

          <div style={{ marginBottom: '24px' }}>
            <label style={{ fontSize: '13px', fontWeight: '600', color: '#e0e7ff', letterSpacing: '-0.2px', textTransform: 'uppercase', marginBottom: '8px', display: 'block' }}>Password</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="••••••••"
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

          <div style={{ marginBottom: '28px' }}>
            <a href="/forgot-password" style={{ fontSize: '13px', color: '#a78bfa', textDecoration: 'none', fontWeight: '600', transition: 'color 0.2s' }} onMouseEnter={(e) => e.currentTarget.style.color = '#c4b5fd'} onMouseLeave={(e) => e.currentTarget.style.color = '#a78bfa'}>
              Forgot password?
            </a>
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
            {loading ? 'Signing in...' : 'Sign In'}
          </button>
        </form>

        <div style={{ textAlign: 'center', marginTop: '28px' }}>
          <p style={{ fontSize: '13px', color: '#cbd5e1', fontWeight: '500', margin: '0' }}>
            Don't have an account?{' '}
            <a href="/signup" style={{ color: '#a78bfa', textDecoration: 'none', fontWeight: '700', transition: 'color 0.2s' }} onMouseEnter={(e) => e.currentTarget.style.color = '#c4b5fd'} onMouseLeave={(e) => e.currentTarget.style.color = '#a78bfa'}>
              Create one
            </a>
          </p>
        </div>

        <div style={{ marginTop: '40px', paddingTop: '20px', borderTop: '1px solid rgba(139, 92, 246, 0.15)', textAlign: 'center', fontSize: '11px', color: '#64748b' }}>
          Powered by Sage • Premium learning redefined
        </div>
      </div>
    </div>
  )
}