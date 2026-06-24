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

  // Check if there's a reset token in URL
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
      
      if (data.valid) {
        setTokenValid(true)
        setMessage('')
      } else {
        setError(data.error || 'Invalid or expired token')
        setTokenValid(false)
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
        setError(data.error || 'Failed to send reset email')
      }
    } catch (err: any) {
      setError(err.message || 'An error occurred')
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
        setMessage('Password reset successfully! Redirecting to login...')
        setTimeout(() => {
          window.location.href = '/login'
        }, 2000)
      } else {
        setError(data.error || 'Failed to reset password')
      }
    } catch (err: any) {
      setError(err.message || 'An error occurred')
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
        <div>Verifying reset link...</div>
      </div>
    )
  }

  const containerStyle: React.CSSProperties = {
    background: '#0a0e27',
    minHeight: '100vh',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    padding: '16px',
  }

  const cardStyle: React.CSSProperties = {
    background: 'rgba(139, 92, 246, 0.1)',
    border: '1px solid rgba(139, 92, 246, 0.2)',
    borderRadius: '12px',
    padding: '24px',
    maxWidth: '400px',
    width: '100%',
  }

  const titleStyle: React.CSSProperties = {
    fontSize: '24px',
    fontWeight: 'bold',
    color: '#ffffff',
    marginBottom: '12px',
    textAlign: 'center',
  }

  const labelStyle: React.CSSProperties = {
    fontSize: '14px',
    color: '#cbd5e1',
    marginBottom: '8px',
    display: 'block',
  }

  const inputStyle: React.CSSProperties = {
    width: '100%',
    padding: '12px',
    marginBottom: '16px',
    background: 'rgba(15, 23, 42, 0.6)',
    border: '1px solid rgba(139, 92, 246, 0.3)',
    borderRadius: '8px',
    color: '#ffffff',
    fontSize: '14px',
    boxSizing: 'border-box',
  }

  const buttonStyle: React.CSSProperties = {
    width: '100%',
    padding: '12px',
    background: 'linear-gradient(135deg, #8b5cf6 0%, #3b82f6 100%)',
    border: 'none',
    borderRadius: '8px',
    color: '#ffffff',
    fontSize: '14px',
    fontWeight: 'bold',
    cursor: loading ? 'not-allowed' : 'pointer',
    opacity: loading ? 0.6 : 1,
    transition: 'opacity 0.2s',
  }

  const messageStyle: React.CSSProperties = {
    marginTop: '16px',
    padding: '12px',
    borderRadius: '8px',
    fontSize: '14px',
    textAlign: 'center',
    background: 'rgba(16, 185, 129, 0.1)',
    border: '1px solid rgba(16, 185, 129, 0.3)',
    color: '#10b981',
  }

  const errorStyle: React.CSSProperties = {
    marginTop: '16px',
    padding: '12px',
    borderRadius: '8px',
    fontSize: '14px',
    textAlign: 'center',
    background: 'rgba(239, 68, 68, 0.1)',
    border: '1px solid rgba(239, 68, 68, 0.3)',
    color: '#ef4444',
  }

  return (
    <div style={containerStyle}>
      <div style={cardStyle}>
        {step === 'email' ? (
          <>
            <h1 style={titleStyle}>Reset Password</h1>
            <form onSubmit={handleSendReset}>
              <label style={labelStyle}>Email Address</label>
              <input
                type="email"
                style={inputStyle}
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
              <button
                type="submit"
                style={buttonStyle}
                disabled={loading}
              >
                {loading ? 'Sending...' : 'Send Reset Link'}
              </button>
            </form>
          </>
        ) : (
          <>
            <h1 style={titleStyle}>Set New Password</h1>
            {tokenValid ? (
              <form onSubmit={handleResetPassword}>
                <label style={labelStyle}>New Password</label>
                <input
                  type="password"
                  style={inputStyle}
                  placeholder="Enter new password"
                  value={newPassword}
                  onChange={(e) => setNewPassword(e.target.value)}
                  required
                  minLength={8}
                />
                <label style={labelStyle}>Confirm Password</label>
                <input
                  type="password"
                  style={inputStyle}
                  placeholder="Confirm password"
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                  required
                  minLength={8}
                />
                <button
                  type="submit"
                  style={buttonStyle}
                  disabled={loading}
                >
                  {loading ? 'Resetting...' : 'Reset Password'}
                </button>
              </form>
            ) : (
              <div style={errorStyle}>
                {error || 'Token is invalid or has expired'}
              </div>
            )}
          </>
        )}

        {message && <div style={messageStyle}>{message}</div>}
        {error && step === 'email' && <div style={errorStyle}>{error}</div>}
      </div>
    </div>
  )
}// Deployment trigger - Tue Jun 23 11:03:01 UTC 2026
// Redeploy trigger