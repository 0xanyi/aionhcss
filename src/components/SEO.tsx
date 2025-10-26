import React from 'react'
import { Helmet } from 'react-helmet'

interface SEOProps {
  title?: string
  description?: string
  keywords?: string[]
  canonical?: string
  ogTitle?: string
  ogDescription?: string
  ogImage?: string
  twitterCard?: string
  twitterTitle?: string
  twitterDescription?: string
  twitterImage?: string
  schema?: any
  noIndex?: boolean
  noFollow?: boolean
}

const SEO: React.FC<SEOProps> = ({
  title,
  description,
  keywords,
  canonical,
  ogTitle,
  ogDescription,
  ogImage,
  twitterCard = 'summary_large_image',
  twitterTitle,
  twitterDescription,
  twitterImage,
  schema,
  noIndex = false,
  noFollow = false
}) => {
  const defaultTitle = 'Aion Health Care & Support Services - Professional Home Care in Essex'
  const defaultDescription = 'Aion Health Care provides compassionate home care and supported living services across Essex and the East of England. CQC registered, 24/7 support, 90-mile coverage from Chelmsford.'
  const defaultKeywords = [
    'home care Chelmsford',
    'social care services Essex',
    'supported living services',
    'personal care at home',
    'live-in care Essex',
    'elderly care services',
    'dementia care',
    'disability support',
    'care services East England'
  ]

  const pageTitle = title ? `${title} | Aion Health Care` : defaultTitle
  const pageDescription = description || defaultDescription
  const pageKeywords = keywords || defaultKeywords
  const pageCanonical = canonical || `https://aionhcss.com${window.location.pathname}`
  const pageOgTitle = ogTitle || pageTitle
  const pageOgDescription = ogDescription || pageDescription
  const pageOgImage = ogImage || 'https://aionhcss.com/images/og-image.jpg'
  const pageTwitterTitle = twitterTitle || pageTitle
  const pageTwitterDescription = twitterDescription || pageDescription
  const pageTwitterImage = twitterImage || pageOgImage

  const structuredData = schema ? JSON.stringify(schema) : null

  return (
    <Helmet>
      {/* Basic Meta Tags */}
      <title>{pageTitle}</title>
      <meta name="description" content={pageDescription} />
      <meta name="keywords" content={pageKeywords.join(', ')} />
      <link rel="canonical" href={pageCanonical} />
      
      {/* Robots Meta Tag */}
      <meta name="robots" content={`${noIndex ? 'noindex' : 'index'}, ${noFollow ? 'nofollow' : 'follow'}`} />
      
      {/* Open Graph */}
      <meta property="og:title" content={pageOgTitle} />
      <meta property="og:description" content={pageOgDescription} />
      <meta property="og:image" content={pageOgImage} />
      <meta property="og:url" content={pageCanonical} />
      <meta property="og:type" content="website" />
      <meta property="og:site_name" content="Aion Health Care" />
      
      {/* Twitter Card */}
      <meta name="twitter:card" content={twitterCard} />
      <meta name="twitter:title" content={pageTwitterTitle} />
      <meta name="twitter:description" content={pageTwitterDescription} />
      <meta name="twitter:image" content={pageTwitterImage} />
      <meta name="twitter:site" content="@aionhcss" />
      
      {/* Schema.org Structured Data */}
      {structuredData && (
        <script type="application/ld+json">
          {structuredData}
        </script>
      )}
      
      {/* Favicon */}
      <link rel="icon" href="/favicon.ico" />
      <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
      
      {/* Preconnect for external resources */}
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://www.google.com" />
      
      {/* Language and Character Encoding */}
      <html lang="en" />
      <meta charSet="utf-8" />
      
      {/* Viewport */}
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      
      {/* Theme Color */}
      <meta name="theme-color" content="#002B7F" />
    </Helmet>
  )
}

export default SEO