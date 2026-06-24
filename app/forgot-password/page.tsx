'use client'

import { useState, useEffect } from 'react'

export default function ForgotPasswordPage() {
  const [email, setEmail] = useState('')
  const [step, setStep] = useState<'email' | 'reset'>('email')
  const [resetToken, setResetToken] = useState('')
  const [newPassword, setNewPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')
  const [loading, setLoading] = useState(false)
  const [message, setMessage] = useState('')
  const [error, setError] = useState('')
  const [tokenValid, setTokenValid] = useState(false)
  const [verifying, setVerifying] = useState(true)

  useEffect(() => {
    const params = new URLSearchParams(window.location.search)
    const token = params.get('token')
    if (token) {
      setResetToken(token)
      setStep('reset')
      verifyToken(token)
    } else {
      setVerifying(false)
    }
  }, [])

  const verifyToken = async (token: string) => {
    try {
      const res = await fetch(`/api/verify-reset-token/${token}`)
      const data = await res.json()
      setTokenValid(data.valid || false)
      if (!data.valid) {
        setError(data.error || 'Invalid token')
      }
    } catch (err) {
      setError('Failed to verify token')
      setTokenValid(false)
    } finally {
      setVerifying(false)
    }
  }

  const handleSendReset = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    setError('')
    setMessage('')

    try {
      const res = await fetch('/api/forgot-password', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email }),
      })

      const data = await res.json()
      if (data.success) {
        setMessage(data.message)
        setEmail('')
      } else {
        setError(data.error || 'Failed')
      }
    } catch (err: any) {
      setError(err.message || 'Error')
    } finally {
      setLoading(false)
    }
  }

  const handleResetPassword = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    setError('')
    setMessage('')

    if (newPassword !== confirmPassword) {
      setError('Passwords do not match')
      setLoading(false)
      return
    }

    if (newPassword.length < 8) {
      setError('Password must be at least 8 characters')
      setLoading(false)
      return
    }

    try {
      const res = await fetch('/api/reset-password', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ token: resetToken, password: newPassword }),
      })

      const data = await res.json()
      if (data.success) {
        setMessage('Password reset successfully!')
        setTimeout(() => {
          window.location.href = '/login'
        }, 2000)
      } else {
        setError(data.error || 'Failed')
      }
    } catch (err: any) {
      setError(err.message || 'Error')
    } finally {
      setLoading(false)
    }
  }

  if (verifying) {
    return (
      <div style={{
        background: '#0a0e27',
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        color: '#ffffff'
      }}>
        Verifying...
      </div>
    )
  }

  return (
    <div style={{
      background: '#0a0e27',
      minHeight: '100vh',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      padding: '16px',
    }}>
      <div style={{
        background: 'rgba(139, 92, 246, 0.1)',
        border: '1px solid rgba(139, 92, 246, 0.2)',
        borderRadius: '12px',
        padding: '24px',
        maxWidth: '400px',
        width: '100%',
      }}>
        {step === 'email' ? (
          <>
            <h1 style={{ fontSize: '24px', color: '#ffffff', marginBottom: '20px', textAlign: 'center' }}>
              Reset Password
            </h1>
            <form onSubmit={handleSendReset}>
              <label style={{ color: '#cbd5e1', marginBottom: '8px', display: 'block' }}>Email</label>
              <input
                type="email"
                style={{
                  width: '100%',
                  padding: '12px',
                  marginBottom: '16px',
                  background: 'rgba(15, 23, 42, 0.6)',
                  border: '1px solid rgba(139, 92, 246, 0.3)',
                  borderRadius: '8px',
                  color: '#ffffff',
                  boxSizing: 'border-box',
                }}
                placeholder="your@email.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
              <button
                type="submit"
                style={{
                  width: '100%',
                  padding: '12px',
                  background: 'linear-gradient(135deg, #8b5cf6 0%, #3b82f6 100%)',
                  border: 'none',
                  borderRadius: '8px',
                  color: '#ffffff',
                  fontWeight: 'bold',
                  cursor: 'pointer',
                  opacity: loading ? 0.6 : 1,
                }}
                disabled={loading}
              >
                {loading ? 'Sending...' : 'Send Reset Link'}
              </button>
            </form>
          </>
        ) : (
          <>
            <h1 style={{ fontSize: '24px', color: '#ffffff', marginBottom: '20px', textAlign: 'center' }}>
              New Password
            </h1>
            {tokenValid ? (
              <form onSubmit={handleResetPassword}>
                <label style={{ color: '#cbd5e1', marginBottom: '8px', display: 'block' }}>Password</label>
                <input
                  type="password"
                  style={{
                    width: '100%',
                    padding: '12px',
                    marginBottom: '16px',
                    background: 'rgba(15, 23, 42, 0.6)',
                    border: '1px solid rgba(139, 92, 246, 0.3)',
                    borderRadius: '8px',
                    color: '#ffffff',
                    boxSizing: 'border-box',
                  }}
                  value={newPassword}
                  onChange={(e) => setNewPassword(e.target.value)}
                  required
                  minLength={8}
                />
                <label style={{ color: '#cbd5e1', marginBottom: '8px', display: 'block' }}>Confirm</label>
                <input
                  type="password"
                  style={{
                    width: '100%',
                    padding: '12px',
                    marginBottom: '16px',
                    background: 'rgba(15, 23, 42, 0.6)',
                    border: '1px solid rgba(139, 92, 246, 0.3)',
                    borderRadius: '8px',
                    color: '#ffffff',
                    boxSizing: 'border-box',
                  }}
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                  required
                  minLength={8}
                />
                <button
                  type="submit"
                  style={{
                    width: '100%',
                    padding: '12px',
                    background: 'linear-gradient(135deg, #8b5cf6 0%, #3b82f6 100%)',
                    border: 'none',
                    borderRadius: '8px',
                    color: '#ffffff',
                    fontWeight: 'bold',
                    cursor: 'pointer',
                  }}
                  disabled={loading}
                >
                  {loading ? 'Resetting...' : 'Reset Password'}
                </button>
              </form>
            ) : (
              <div style={{ color: '#ef4444' }}>
                {error || 'Invalid token'}
              </div>
            )}
          </>
        )}

        {message && <div style={{ marginTop: '16px', padding: '12px', color: '#10b981', background: 'rgba(16, 185, 129, 0.1)', borderRadius: '8px' }}>{message}</div>}
        {error && step === 'email' && <div style={{ marginTop: '16px', padding: '12px', color: '#ef4444', background: 'rgba(239, 68, 68, 0.1)', borderRadius: '8px' }}>{error}</div>}
      </div>
    </div>
  )
}