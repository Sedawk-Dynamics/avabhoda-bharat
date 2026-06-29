import type { Metadata } from 'next'
import { Inter, Playfair_Display } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const inter = Inter({ subsets: ['latin'], variable: '--font-sans' })
const playfairDisplay = Playfair_Display({ subsets: ['latin'], variable: '--font-serif' })

export const metadata: Metadata = {
  title: 'Avabodha Bharat | POSH & POCSO Training, Compliance & Legal Advisory',
  description: 'Expert POSH (Prevention of Sexual Harassment) and POCSO (Protection of Children from Sexual Offences) training, compliance, and legal advisory. Empower your workplace and protect children through comprehensive awareness and training programs.',
  keywords: 'POSH training, POCSO awareness, workplace sexual harassment prevention, child protection, compliance training, legal advisory, sexual harassment prevention, workplace safety, employee training, corporate compliance, gender safety, workplace policies, anti-harassment, child safety',
  generator: 'v0.app',
  authors: [{ name: 'Avabodha Bharat' }],
  creator: 'Avabodha Bharat',
  publisher: 'Avabodha Bharat',
  applicationName: 'Avabodha Bharat',
  icons: {
    icon: '/favicon.ico',
    apple: '/favicon.ico',
  },
  openGraph: {
    type: 'website',
    locale: 'en_IN',
    url: 'https://avabodhabharat.com',
    siteName: 'Avabodha Bharat',
    title: 'Avabodha Bharat | POSH & POCSO Training & Compliance',
    description: 'Expert training and compliance services for POSH and POCSO. Protect your workplace and children.',
    images: [
      {
        url: '/favicon.ico',
        width: 1200,
        height: 630,
        alt: 'Avabodha Bharat - POSH & POCSO Training Platform',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Avabodha Bharat | POSH & POCSO Training & Compliance',
    description: 'Expert training and compliance services for POSH and POCSO.',
    images: ['/favicon.ico'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-snippet': -1,
      'max-image-preview': 'large',
      'max-video-preview': -1,
    },
  },
  verification: {
    google: 'your_google_verification_code_here',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${playfairDisplay.variable}`}>
      <body className="font-sans antialiased">
        {children}
        <Analytics />
      </body>
    </html>
  )
}
