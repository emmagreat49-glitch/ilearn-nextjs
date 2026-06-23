import { createClient } from '@supabase/supabase-js'
import { NextRequest, NextResponse } from 'next/server'
import crypto from 'crypto'

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || ''
const supabaseServiceKey = process.env.SUPABASE_SERVICE_KEY || ''
const resendApiKey = process.env.RESEND_API_KEY || ''

const supabase = createClient(supabaseUrl, supabaseServiceKey)

export async function POST(request: NextRequest) {
  try {
    const { email } = await request.json()

    if (!email) {
      return NextResponse.json(
        { success: false, error: 'Email is required' },
        { status: 400 }
      )
    }

    // Check if user exists in Supabase Auth
    const { data: { users }, error: userError } = await supabase.auth.admin.listUsers()
    
    if (userError) {
      console.error('[Password Reset] Error fetching users:', userError)
      return NextResponse.json(
        { success: true, message: 'If an account with this email exists, you will receive a password reset link.' },
        { status: 200 }
      )
    }

    const user = users?.find(u => u.email?.toLowerCase() === email.toLowerCase())

    if (!user) {
      // For security, don't reveal if email exists
      return NextResponse.json(
        { success: true, message: 'If an account with this email exists, you will receive a password reset link.' },
        { status: 200 }
      )
    }

    // Generate reset token
    const token = crypto.randomBytes(32).toString('hex')
    const expiresAt = new Date(Date.now() + 60 * 60 * 1000) // 1 hour

    // Store token in Supabase
    const { error: tokenError } = await supabase
      .from('password_reset_tokens')
      .insert({
        user_id: user.id,
        email: email.toLowerCase(),
        token: token,
        expires_at: expiresAt.toISOString(),
      })

    if (tokenError) {
      console.error('[Password Reset] Error storing token:', tokenError)
      return NextResponse.json(
        { success: false, error: 'Failed to generate reset token' },
        { status: 500 }
      )
    }

    // Build reset URL
    const resetUrl = `${process.env.NEXT_PUBLIC_APP_URL || 'https://ilearn-nextjs-c19j.vercel.app'}/forgot-password?token=${token}`

    // Send email via Resend
    try {
      const response = await fetch('https://api.resend.com/emails', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${resendApiKey}`,
        },
        body: JSON.stringify({
          from: 'onboarding@resend.dev',
          to: email,
          subject: 'Reset Your iLEARN Password',
          html: `
            <!DOCTYPE html>
            <html>
              <head>
                <meta charset="utf-8">
                <style>
                  body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
                  .container { max-width: 600px; margin: 0 auto; padding: 20px; }
                  .header { background: linear-gradient(135deg, #8b5cf6 0%, #3b82f6 100%); color: white; padding: 20px; border-radius: 8px; text-align: center; }
                  .content { padding: 20px; background: #f9fafb; border-radius: 8px; margin-top: 20px; }
                  .button { display: inline-block; background: linear-gradient(135deg, #8b5cf6 0%, #3b82f6 100%); color: white; padding: 12px 30px; text-decoration: none; border-radius: 6px; margin-top: 20px; }
                  .footer { text-align: center; color: #999; font-size: 12px; margin-top: 20px; }
                </style>
              </head>
              <body>
                <div class="container">
                  <div class="header">
                    <h1>Reset Your Password</h1>
                  </div>
                  <div class="content">
                    <p>Hi there,</p>
                    <p>We received a request to reset your iLEARN password. Click the button below to set a new password:</p>
                    <a href="${resetUrl}" class="button">Reset Password</a>
                    <p>This link will expire in 1 hour.</p>
                    <p>If you didn't request this, please ignore this email.</p>
                  </div>
                  <div class="footer">
                    <p>&copy; 2024 iLEARN. All rights reserved.</p>
                  </div>
                </div>
              </body>
            </html>
          `,
        }),
      })

      if (!response.ok) {
        console.error('[Resend Error] Status:', response.status)
        const error = await response.text()
        console.error('[Resend Error] Response:', error)
      }
    } catch (resendError) {
      console.error('[Resend Error]', resendError)
    }

    return NextResponse.json(
      { success: true, message: 'If an account with this email exists, you will receive a password reset link.' },
      { status: 200 }
    )
  } catch (error: any) {
    console.error('[Password Reset Error]', error)
    return NextResponse.json(
      { success: false, error: error.message },
      { status: 500 }
    )
  }
}