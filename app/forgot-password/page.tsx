'use client'

import { Suspense } from 'react'
import ForgotPasswordContent from './content'

export default function ForgotPasswordPage() {
  return (
    <Suspense fallback={<div style={{ background: '#0a0e27', minHeight: '100vh' }} />}>
      <ForgotPasswordContent />
    </Suspense>
  )
}