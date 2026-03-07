import type { Metadata, Viewport } from 'next'
import { Inter } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  weight: ['300', '400', '500', '600', '700', '800', '900'],
})

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  viewportFit: 'cover',
}

export const metadata: Metadata = {
  metadataBase: new URL('https://equitycorp.ec'),
  title: 'EquityCorp — Soluciones GovTech para Gobierno Digital en Latinoamérica',
  description: 'Transformamos el sector público con tecnología de vanguardia. Automatización IA, SaaS Govtech, desarrollo a medida e infraestructura cloud para entidades gubernamentales de Ecuador y Latinoamérica.',
  keywords: [
    'govtech',
    'gobierno digital',
    'transformación digital',
    'automatización IA',
    'software público',
    'infraestructura cloud',
    'SaaS gubernamental',
    'EquityCorp',
    'sector público',
    'Ecuador',
    'Latinoamérica'
  ],
  authors: [{ name: 'EquityCorp' }],
  creator: 'EquityCorp',
  publisher: 'EquityCorp',
  icons: {
    icon: [
      { url: '/favicon.ico', type: 'image/x-icon' },
      { url: '/favicon.png', type: 'image/png' },
    ],
    apple: '/apple-touch-icon.png',
    shortcut: '/favicon.ico',
  },
  openGraph: {
    title: 'EquityCorp — Soluciones GovTech para Gobierno Digital',
    description: 'Transformamos el sector público con tecnología de vanguardia. Conoce nuestras soluciones en automatización IA, SaaS y cloud.',
    type: 'website',
    url: 'https://equitycorp.ec',
    siteName: 'EquityCorp',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'EquityCorp - GovTech Solutions',
        type: 'image/png',
      },
    ],
    locale: 'es_ES',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'EquityCorp — Soluciones GovTech',
    description: 'Transformamos el sector público con tecnología de vanguardia.',
    images: ['/og-image.png'],
    creator: '@equitycorp',
  },
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      'max-image-preview': 'large',
      'max-snippet': -1,
      'max-video-preview': -1,
    },
  },
  alternates: {
    canonical: 'https://equitycorp.ec',
  },
  category: 'Technology',
  other: {
    'og:type': 'website',
    'og:locale': 'es_ES',
  },
  manifest: '/manifest.json',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'EquityCorp',
    url: 'https://equitycorp.ec',
    logo: 'https://equitycorp.ec/logo_blanco.png',
    description: 'Soluciones tecnológicas innovadoras para el sector público latinoamericano',
    sameAs: [
      'https://www.linkedin.com/company/equitycorp',
      'https://x.com/equitycorp',
      'https://facebook.com/equitycorp',
    ],
    contactPoint: {
      '@type': 'ContactPoint',
      contactType: 'Customer Service',
      availableLanguage: ['es'],
    },
    foundingDate: '2024',
    areaServed: ['EC', 'MX', 'CO', 'PE', 'CL', 'AR'],
  }

  return (
    <html lang="es" className={inter.variable}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      </head>
      <body className="font-sans antialiased bg-background text-foreground">
        {children}
        <Analytics />
      </body>
    </html>
  )
}
