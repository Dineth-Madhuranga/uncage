import type { Metadata } from 'next'
import { GeistSans } from 'geist/font/sans'
import { GeistMono } from 'geist/font/mono'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

export const metadata: Metadata = {
  title: 'UNCAGE',
  description: 'UNCAGE builds scalable digital solutions from MVPs to ERP',
  generator: 'v0.app',
  icons: {
    icon: 'https://i.postimg.cc/5y0g3DBn/uk.png',
    shortcut: 'https://i.postimg.cc/5y0g3DBn/uk.png',
    apple: 'https://i.postimg.cc/5y0g3DBn/uk.png',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`font-sans ${GeistSans.variable} ${GeistMono.variable}`}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
