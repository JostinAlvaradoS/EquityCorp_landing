import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  weight: ['300', '400', '500', '600', '700', '800', '900'],
})

export const metadata: Metadata = {
  title: 'EquityCorp — GovTech Solutions',
  description: 'Soluciones tecnológicas para el sector público. Automatización IA, SaaS, desarrollo a medida e infraestructura cloud. Powered by EquityCorp.',
  keywords: ['govtech', 'gobierno digital', 'automatización', 'inteligencia artificial', 'software público', 'EquityCorp'],
  authors: [{ name: 'EquityCorp' }],
  icons: {
    icon: '/favicon.png',
  },
  openGraph: {
    title: 'EquityCorp — GovTech Solutions',
    description: 'Transformamos el sector público con tecnología de vanguardia.',
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="es" className={inter.variable}>
      <body className="font-sans antialiased bg-background text-foreground">
        {children}
        <Analytics />
      </body>
    </html>
  )
}
