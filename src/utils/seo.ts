import type { HeadContent } from '@tanstack/react-router'

/**
 * SEO configuration interface
 */
export interface SEOConfig {
  title: string
  description: string
  keywords?: string[]
  canonical?: string
  robots?: string
  openGraph?: {
    title?: string
    description?: string
    type?: string
    image?: string
    url?: string
    siteName?: string
  }
  twitter?: {
    card?: string
    title?: string
    description?: string
    image?: string
    site?: string
  }
  structuredData?: Record<string, any>
}

/**
 * Create SEO head content for TanStack Start routes
 */
export function createSEOHead(config: SEOConfig): HeadContent {
  const {
    title,
    description,
    keywords = [],
    canonical,
    robots = 'index, follow',
    openGraph = {},
    twitter = {},
    structuredData
  } = config

  const ogTitle = openGraph.title || title
  const ogDescription = openGraph.description || description
  const ogImage = openGraph.image || '/images/og-image.jpg'
  const ogUrl = openGraph.url
  const ogType = openGraph.type || 'website'
  const ogSiteName = openGraph.siteName || 'Aion Health Care & Support Services'

  const twitterCard = twitter.card || 'summary_large_image'
  const twitterTitle = twitter.title || title
  const twitterDescription = twitter.description || description
  const twitterImage = twitter.image || ogImage
  const twitterSite = twitter.site || '@AionHealthCare'

  // Helper function to conditionally add items to arrays
  const conditionalMeta = [
    // Basic meta tags
    { name: 'description', content: description },
    { name: 'keywords', content: keywords.join(', ') },
    { name: 'robots', content: robots },
    
    // Open Graph / Facebook
    { property: 'og:title', content: ogTitle },
    { property: 'og:description', content: ogDescription },
    { property: 'og:type', content: ogType },
    { property: 'og:image', content: ogImage },
    { property: 'og:site_name', content: ogSiteName }
  ]

  // Add conditional meta tags
  if (ogUrl) {
    conditionalMeta.push({ property: 'og:url', content: ogUrl })
  }

  // Add Twitter meta tags
  conditionalMeta.push(
    { name: 'twitter:card', content: twitterCard },
    { name: 'twitter:title', content: twitterTitle },
    { name: 'twitter:description', content: twitterDescription },
    { name: 'twitter:image', content: twitterImage },
    { name: 'twitter:site', content: twitterSite }
  )

  // Add structured data if provided
  if (structuredData) {
    conditionalMeta.push({
      property: 'application/ld+json',
      content: JSON.stringify(structuredData)
    })
  }

  // Helper function to conditionally add links
  const conditionalLinks = [
    // Preconnect for external resources
    { rel: 'preconnect', href: 'https://fonts.googleapis.com' },
    { rel: 'preconnect', href: 'https://fonts.gstatic.com', crossOrigin: '' },
    
    // Favicon
    { rel: 'icon', href: '/favicon.ico' },
    { rel: 'apple-touch-icon', sizes: '180x180', href: '/apple-touch-icon.png' },
    { rel: 'icon', sizes: '32x32', href: '/favicon-32x32.png' },
    { rel: 'icon', sizes: '16x16', href: '/favicon-16x16.png' },
    { rel: 'manifest', href: '/manifest.json' }
  ]

  // Add canonical URL if provided
  if (canonical) {
    conditionalLinks.unshift({ rel: 'canonical', href: canonical })
  }

  return {
    meta: conditionalMeta,
    links: conditionalLinks
  }
}

/**
 * Default SEO configurations for common pages
 */
export const defaultSEOConfigs = {
  home: {
    title: 'Aion Health Care & Support Services | Home Care in Essex',
    description: 'Professional home care and supported living services in Chelmsford, Essex. 24/7 compassionate care that respects and empowers our clients.',
    keywords: [
      'home care Chelmsford',
      'social care services Essex',
      'supported living services',
      'personal care at home',
      'live-in care Essex',
      'elderly care services',
      'dementia care Essex',
      'disability support services'
    ],
    openGraph: {
      title: 'Aion Health Care & Support Services | Professional Home Care',
      description: 'Compassionate 24/7 home care and supported living services in Essex and East England',
      type: 'website',
      image: '/images/og-home.jpg'
    },
    structuredData: {
      '@context': 'https://schema.org',
      '@type': 'LocalBusiness',
      'name': 'Aion Health Care & Support Services Ltd',
      'address': {
        '@type': 'PostalAddress',
        'streetAddress': 'Terriers Retreat, Woods Road, Ford End',
        'addressLocality': 'Chelmsford',
        'addressRegion': 'Essex',
        'postalCode': 'CM3 1LJ',
        'addressCountry': 'GB'
      },
      'telephone': '+44 7368195705',
      'email': 'info@aionhcss.com',
      'url': 'https://www.aionhcss.com',
      'openingHours': 'Mo 00:00-23:59; Tu 00:00-23:59; We 00:00-23:59; Th 00:00-23:59; Fr 00:00-23:59; Sa 00:00-23:59; Su 00:00-23:59',
      'sameAs': [
        'https://www.facebook.com/aionhcss',
        'https://www.linkedin.com/company/aion-health-care'
      ]
    }
  },

  about: {
    title: 'About Aion Health Care | Our Story & Mission',
    description: 'Learn about Aion Health Care & Support Services, our mission, values, and experienced team providing compassionate care in Essex.',
    keywords: [
      'about Aion Health Care',
      'care services company Essex',
      'healthcare professionals Chelmsford',
      'home care company',
      'caregiver training',
      'professional care team'
    ],
    openGraph: {
      title: 'About Aion Health Care | Our Story & Mission',
      description: 'Discover our journey and commitment to providing exceptional care services in Essex',
      type: 'article',
      image: '/images/og-about.jpg'
    }
  },

  services: {
    title: 'Home Care Services | Aion Health Care Essex',
    description: 'Comprehensive home care services including personal care, live-in care, supported living, and more in Chelmsford and Essex.',
    keywords: [
      'home care services',
      'personal care services',
      'live-in care',
      'supported living',
      'meal planning services',
      'household care',
      'respite care Essex',
      'medication management'
    ],
    openGraph: {
      title: 'Home Care Services | Aion Health Care Essex',
      description: 'Complete range of professional home care services for individuals and families in Essex',
      type: 'article',
      image: '/images/og-services.jpg'
    }
  },

  contact: {
    title: 'Contact Aion Health Care | Get in Touch',
    description: 'Contact Aion Health Care & Support Services for home care inquiries, service requests, or career opportunities in Essex.',
    keywords: [
      'contact home care',
      'care services inquiry',
      'home care Chelmsford',
      'care services Essex',
      'care job opportunities',
      'care provider contact'
    ],
    openGraph: {
      title: 'Contact Aion Health Care | Get in Touch',
      description: 'Reach out to our compassionate care team for inquiries and support',
      type: 'website',
      image: '/images/og-contact.jpg'
    }
  },

  careers: {
    title: 'Careers at Aion Health Care | Join Our Team',
    description: 'Join our growing team of care professionals. Current job openings for care workers, assistants, and support staff in Essex.',
    keywords: [
      'care jobs Essex',
      'care worker jobs',
      'home care careers',
      'care assistant jobs',
      'healthcare jobs Chelmsford',
      'care services employment'
    ],
    openGraph: {
      title: 'Careers at Aion Health Care | Join Our Team',
      description: 'Build your career in care with our growing team of compassionate professionals',
      type: 'website',
      image: '/images/og-careers.jpg'
    }
  },

  resources: {
    title: 'Care Resources & Guides | Aion Health Care',
    description: 'Helpful resources, guides, and information about home care services, assessments, and care planning in Essex.',
    keywords: [
      'care guides',
      'home care resources',
      'care assessment tools',
      'care planning',
      'elderly care information',
      'disability support resources'
    ],
    openGraph: {
      title: 'Care Resources & Guides | Aion Health Care',
      description: 'Comprehensive resources and guides for families and individuals seeking care services',
      type: 'article',
      image: '/images/og-resources.jpg'
    }
  }
}