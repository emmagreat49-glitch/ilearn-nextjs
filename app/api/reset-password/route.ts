import { createClient } from '@supabase/supabase-js'
import { NextRequest, NextResponse } from 'next/server'

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || ''
const supabaseServiceKey = process.env.SUPABASE_SERVICE_KEY || ''

const supabase = createClient(supabaseUrl, supabaseServiceKey)

export async function POST(request: NextRequest) {
  try {
    const { token, password } = await request.json()

    if (!token || !password) {
      return NextResponse.json(
        { success: false, error: 'Token and password are required' },
        { status: 400 }
      )
    }

    if (password.length < 8) {
      return NextResponse.json(
        { success: false, error: 'Password must be at least 8 characters' },
        { status: 400 }
      )
    }

    // Verify token exists, not used, and not expired
    const { data: tokenData, error: tokenError } = await supabase
      .from('password_reset_tokens')
      .select('*')
      .eq('token', token)
      .eq('used', false)
      .single()

    if (tokenError || !tokenData) {
      return NextResponse.json(
        { success: false, error: 'Invalid or expired token' },
        { status: 400 }
      )
    }

    const expiresAt = new Date(tokenData.expires_at)
    if (expiresAt < new Date()) {
      return NextResponse.json(
        { success: false, error: 'Token has expired' },
        { status: 400 }
      )
    }

    // Update user password via Supabase Auth
    const { error: updateError } = await supabase.auth.admin.updateUserById(
      tokenData.user_id,
      { password: password }
    )

    if (updateError) {
      console.error('[Password Update Error]', updateError)
      return NextResponse.json(
        { success: false, error: 'Failed to update password' },
        { status: 500 }
      )
    }

    // Mark token as used
    const { error: markError } = await supabase
      .from('password_reset_tokens')
      .update({ used: true })
      .eq('token', token)

    if (markError) {
      console.error('[Mark Token Error]', markError)
    }

    return NextResponse.json(
      { success: true, message: 'Password reset successfully!' },
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