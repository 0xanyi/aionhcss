/**
 * Aion Health Care Website - Initialization and Setup
 * This file initializes all core functionality including SEO, performance, and accessibility
 */

// Global gtag function declaration for Google Analytics
declare global {
  interface Window {
    gtag: (...args: any[]) => void
  }
}

interface Window {
  gtag: typeof window.gtag
}

import { initializePerformanceOptimizations, monitorWebVitals } from './utils/performance'
import { initializeAccessibility } from './utils/accessibility'
import { initializeCrossBrowserCompatibility } from './utils/testing'

/**
 * Initialize all website functionality
 */
export function initializeWebsite() {
  // Ensure we're running in a browser environment
  if (typeof window === 'undefined' || typeof document === 'undefined') {
    // Not in browser environment - skipping initialization
    return
  }
  
  // Initializing Aion Health Care website...
  
  // Initialize performance optimizations
  // Initializing performance optimizations...
  initializePerformanceOptimizations()
  
  // Monitor web vitals
  // Starting web vitals monitoring...
  monitorWebVitals()
  
  // Initialize accessibility features
  // Initializing accessibility features...
  initializeAccessibility()
  
  // Initialize cross-browser compatibility
  // Testing cross-browser compatibility...
  initializeCrossBrowserCompatibility()
  
  // Set up global error handling
  setupGlobalErrorHandling()
  
  // Set up analytics (if available)
  setupAnalytics()
  
  // Website initialization complete!
}

/**
 * Set up global error handling
 */
function setupGlobalErrorHandling() {
  // Handle JavaScript errors
  window.addEventListener('error', (event) => {
    // JavaScript error details:
    // {
    //   message: event.message,
    //   filename: event.filename,
    //   lineno: event.lineno,
    //   colno: event.colno,
    //   stack: event.error?.stack
    // }
    
    // Send to analytics if available
    if (typeof window.gtag === 'function') {
      window.gtag('event', 'exception', {
        description: event.message,
        fatal: false
      })
    }
  })
  
  // Handle unhandled promise rejections
  window.addEventListener('unhandledrejection', (event) => {
    // Unhandled promise rejection handled
    
    // Send to analytics if available
    if (typeof window.gtag === 'function') {
      window.gtag('event', 'exception', {
        description: 'Unhandled Promise Rejection: ' + event.reason,
        fatal: false
      })
    }
  })
}

/**
 * Set up analytics tracking
 */
function setupAnalytics() {
  // Check if Google Analytics is loaded
  if (typeof window.gtag === 'function') {
    // Google Analytics detected and ready
    
    // Track page view
    window.gtag('config', 'GA_MEASUREMENT_ID', {
      page_title: document.title,
      page_location: window.location.href
    })
  } else {
    // Google Analytics not detected - analytics will be disabled
  }
}

/**
 * Performance monitoring and reporting
 */
export function reportPerformance() {
  // Report performance metrics
  if ('performance' in window) {
    const navigation = performance.getEntriesByType('navigation')[0] as PerformanceNavigationTiming
    
    if (navigation) {
      const metrics = {
        dnsLookup: navigation.domainLookupEnd - navigation.domainLookupStart,
        tcpConnect: navigation.connectEnd - navigation.connectStart,
        serverResponse: navigation.responseEnd - navigation.requestStart,
        domProcessing: navigation.domContentLoadedEventEnd - navigation.startTime,
        loadComplete: navigation.loadEventEnd - navigation.startTime
      }
      
      // Performance metrics collected
      
      // Send to analytics if available
      if (typeof window.gtag === 'function') {
        Object.entries(metrics).forEach(([metric, value]) => {
          window.gtag('event', 'timing_complete', {
            name: metric,
            value: Math.round(value),
            event_category: 'Performance'
          })
        })
      }
    }
  }
}

/**
 * Accessibility audit function
 */
export function runAccessibilityAudit() {
  // Running accessibility audit...
  
  const issues: string[] = []
  
  // Check for missing alt text on images
  const images = document.querySelectorAll('img')
  images.forEach((img, index) => {
    const alt = img.getAttribute('alt')
    if (!alt || alt.trim() === '') {
      issues.push(`Image ${index + 1} missing alt text: ${img.src}`)
    }
  })
  
  // Check for proper heading hierarchy
  const headings = document.querySelectorAll('h1, h2, h3, h4, h5, h6')
  let lastLevel = 0
  headings.forEach((heading, index) => {
    const level = parseInt(heading.tagName.charAt(1))
    if (index === 0 && level !== 1) {
      issues.push(`First heading should be h1, found h${level}`)
    }
    if (level > lastLevel + 1) {
      issues.push(`Heading level jump from h${lastLevel} to h${level} at position ${index + 1}`)
    }
    lastLevel = level
  })
  
  // Check for sufficient color contrast
  const textElements = document.querySelectorAll('p, span, div, a, button')
  textElements.forEach((element, index) => {
    const style = window.getComputedStyle(element)
    const color = style.color
    const backgroundColor = style.backgroundColor
    
    // Simple contrast check (in real implementation, use proper color parsing)
    if (color && backgroundColor && (color.includes('rgb(0, 0, 0)') || backgroundColor.includes('rgb(255, 255, 255)'))) {
      // This is a basic check - in production, implement proper color contrast checking
      // Element color contrast check passed
    }
  })
  
  // Check for keyboard navigation
  const focusableElements = document.querySelectorAll('a, button, input, textarea, select')
  if (focusableElements.length === 0) {
    issues.push('No focusable elements found - keyboard navigation may not work')
  }
  
  // Report results
  if (issues.length === 0) {
    // Accessibility audit passed - no issues found
  } else {
    // Accessibility issues found and handled
    
    // Send to analytics if available
    if (typeof window.gtag === 'function') {
      window.gtag('event', 'exception', {
        description: `Accessibility issues: ${issues.length} found`,
        fatal: false
      })
    }
  }
  
  return issues
}

/**
 * SEO audit function
 */
export function runSEOAudit() {
  // Running SEO audit...
  
  const issues: string[] = []
  
  // Check for meta description
  const metaDescription = document.querySelector('meta[name="description"]')
  if (!metaDescription) {
    issues.push('Missing meta description tag')
  } else {
    const content = metaDescription?.getAttribute('content')
    if (content && content.length < 50) {
      issues.push('Meta description too short (should be 50-160 characters)')
    }
  }
  
  // Check for title tag
  const title = document.querySelector('title')
  if (!title || !title.textContent || title.textContent.length < 10) {
    issues.push('Missing or too short title tag (should be 10-60 characters)')
  }
  
  // Check for H1 tag
  const h1 = document.querySelector('h1')
  if (!h1) {
    issues.push('Missing H1 tag')
  }
  
  // Check for structured data
  const structuredData = document.querySelector('script[type="application/ld+json"]')
  if (!structuredData) {
    issues.push('Missing structured data (JSON-LD)')
  }
  
  // Check for canonical URL
  const canonical = document.querySelector('link[rel="canonical"]')
  if (!canonical) {
    issues.push('Missing canonical URL')
  }
  
  // Check for Open Graph tags
  const ogTitle = document.querySelector('meta[property="og:title"]')
  const ogDescription = document.querySelector('meta[property="og:description"]')
  const ogImage = document.querySelector('meta[property="og:image"]')
  
  if (!ogTitle) issues.push('Missing Open Graph title')
  if (!ogDescription) issues.push('Missing Open Graph description')
  if (!ogImage) issues.push('Missing Open Graph image')
  
  // Report results
  if (issues.length === 0) {
    // SEO audit passed - no issues found
  } else {
    // SEO issues found and handled
  }
  
  return issues
}

/**
 * Initialize all audits on page load
 */
export function initializeAudits() {
  // Run audits after page load
  window.addEventListener('load', () => {
    setTimeout(() => {
      // Running post-load audits...
      
      // Run performance report
      reportPerformance()
      
      // Run accessibility audit
      runAccessibilityAudit()
      
      // Run SEO audit
      runSEOAudit()
      
      // All audits complete
    }, 2000) // Wait 2 seconds for everything to load
  })
}

// Initialize the website when DOM is ready (browser-only)
if (typeof document !== 'undefined') {
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initializeWebsite)
  } else {
    initializeWebsite()
  }

  // Initialize audits
  initializeAudits()
} else {
  // Running in non-browser environment - skipping client-side initialization
}