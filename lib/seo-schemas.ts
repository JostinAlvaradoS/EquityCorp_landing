'use client'

import { useEffect } from 'react'

/**
 * SEO Schema Script Component
 * Injects structured data for better search engine indexing
 */
export function SchemaScripts() {
  useEffect(() => {
    // This component can be extended with additional schema.org scripts
    // Product schema, LocalBusiness schema, FAQSchema, etc.
  }, [])

  return null
}

// Organization Schema
export const organizationSchema = {
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
  areaServed: ['EC', 'MX', 'CO', 'PE', 'CL', 'AR'],
}

// Product Schema for GPI
export const productSchema = {
  '@context': 'https://schema.org',
  '@type': 'SoftwareApplication',
  name: 'GPI - Gestión Pública Integrada',
  description: 'Plataforma integral de gestión para entidades públicas con funcionalidades de seguimiento presupuestario, colaboración entre instituciones y reportería normativa.',
  applicationCategory: 'BusinessApplication',
  offers: {
    '@type': 'Offer',
    price: 'Consultar',
    priceCurrency: 'USD',
  },
  publisher: {
    '@type': 'Organization',
    name: 'EquityCorp',
    url: 'https://equitycorp.ec',
  },
}

// Local Business Schema
export const localBusinessSchema = {
  '@context': 'https://schema.org',
  '@type': 'LocalBusiness',
  name: 'EquityCorp',
  url: 'https://equitycorp.ec',
  contactPoint: {
    '@type': 'ContactPoint',
    contactType: 'Customer Service',
    telephone: '+593-2-XXX-XXXX',
    availableLanguage: ['es'],
  },
  areaServed: [
    {
      '@type': 'Country',
      name: 'Ecuador',
    },
    {
      '@type': 'Country',
      name: 'Mexico',
    },
    {
      '@type': 'Country',
      name: 'Colombia',
    },
  ],
  sameAs: [
    'https://www.linkedin.com/company/equitycorp',
    'https://x.com/equitycorp',
    'https://facebook.com/equitycorp',
  ],
}
