import { Inter } from 'next/font/google'
import './globals.css'
import type { Metadata } from 'next'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Saabhi Wellness - Personalized Ayurvedic Quiz',
  description: 'Discover your perfect Ayurvedic wellness solution with our personalized quiz. Get recommendations tailored to your lifestyle and health goals.',
  keywords: 'ayurvedic, wellness, personalized, quiz, health, natural, saabhi',
  authors: [{ name: 'Saabhi Wellness' }],
  openGraph: {
    title: 'Saabhi Wellness - Personalized Ayurvedic Quiz',
    description: 'Find your perfect wellness match with our AI-powered quiz',
    type: 'website',
    locale: 'en_US',
  },
  robots: {
    index: true,
    follow: true,
  },
  // REMOVED: viewport should not be in metadata
}

// ADD THIS: New way to export viewport in Next.js 13+
export const viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 1,
  // You can add more viewport properties if needed
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <meta name="theme-color" content="#10b981" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <meta name="mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="default" />
      </head>
      <body className={inter.className} suppressHydrationWarning={true}>
        {children}
      </body>
    </html>
  )
}