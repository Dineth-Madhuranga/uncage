import type { Metadata } from 'next'
import { GeistSans } from 'geist/font/sans'
import { GeistMono } from 'geist/font/mono'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Uncage Software',
  description: 'Uncage Software',
  applicationName: 'Uncage Software',
  generator: 'v0.app',
  icons: {
    icon: 'https://i.postimg.cc/5y0g3DBn/uk.png',
    shortcut: 'https://i.postimg.cc/5y0g3DBn/uk.png',
    apple: 'https://i.postimg.cc/5y0g3DBn/uk.png',
  },
  openGraph: {
    title: 'Uncage Software',
    description: 'Uncage Software',
    url: '/',
    siteName: 'Uncage Software',
    images: [
      {
        url: 'https://i.postimg.cc/5y0g3DBn/uk.png',
        width: 512,
        height: 512,
      },
    ],
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Uncage Software',
    description: 'Uncage Software',
    images: ['https://i.postimg.cc/5y0g3DBn/uk.png'],
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
