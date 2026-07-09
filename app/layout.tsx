import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'iLEARN',
  description: 'Professional E-Learning Platform',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="bg-dark-bg text-white">
        {children}
      </body>
    </html>
  )
}
