/**
 * Performance optimization utilities for Aion Health Care website
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

/**
 * Lazy load images with Intersection Observer
 */
export function lazyLoadImages() {
  if ('IntersectionObserver' in window) {
    const imageObserver = new IntersectionObserver((entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const img = entry.target as HTMLImageElement
          const src = img.dataset.src
          
          if (src) {
            img.src = src
            img.removeAttribute('data-src')
            img.classList.add('loaded')
            observer.unobserve(img)
          }
        }
      })
    })

    // Observe all images with data-src attribute
    document.querySelectorAll('img[data-src]').forEach(img => {
      imageObserver.observe(img)
    })
  }
}

/**
 * Preload critical resources
 */
export function preloadCriticalResources() {
  // Preload critical fonts
  const fontPreload = document.createElement('link')
  fontPreload.rel = 'preload'
  fontPreload.as = 'font'
  fontPreload.href = 'https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&display=swap'
  fontPreload.crossOrigin = 'anonymous'
  document.head.appendChild(fontPreload)

  // Preload critical images
  const criticalImages = [
    '/hero-image.jpg',
    '/aion_logo_blue.png',
    '/aion_icon.png'
  ]

  criticalImages.forEach(src => {
    const link = document.createElement('link')
    link.rel = 'preload'
    link.as = 'image'
    link.href = src
    document.head.appendChild(link)
  })
}

/**
 * Optimize web fonts loading
 */
export function optimizeFontLoading() {
  // Add font display swap for better performance
  const fontLink = document.createElement('link')
  fontLink.rel = 'stylesheet'
  fontLink.href = 'https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&display=swap'
  document.head.appendChild(fontLink)
}

/**
 * Performance monitoring
 */
export class PerformanceMonitor {
  private static instance: PerformanceMonitor
  private metrics: Map<string, number> = new Map()

  static getInstance(): PerformanceMonitor {
    if (!PerformanceMonitor.instance) {
      PerformanceMonitor.instance = new PerformanceMonitor()
    }
    return PerformanceMonitor.instance
  }

  startTimer(name: string) {
    this.metrics.set(name, performance.now())
  }

  endTimer(name: string): number {
    const startTime = this.metrics.get(name)
    if (startTime) {
      const duration = performance.now() - startTime
      this.metrics.delete(name)
      return duration
    }
    return 0
  }

  logMetric(name: string, value: number) {
    // Performance measurement collected
  }

  getCLS(): Promise<number> {
    return new Promise((resolve) => {
      if ('PerformanceObserver' in window) {
        const observer = new PerformanceObserver((list) => {
          const entries = list.getEntries()
          let clsScore = 0
          entries.forEach((entry) => {
            if (!(entry as any).hadRecentInput) {
              clsScore += (entry as any).value
            }
          })
          resolve(clsScore)
        })
        observer.observe({ type: 'layout-shift', buffered: true })
      } else {
        resolve(0)
      }
    })
  }

  getFCP(): Promise<number> {
    return new Promise((resolve) => {
      if ('PerformanceObserver' in window) {
        const observer = new PerformanceObserver((list) => {
          const entries = list.getEntries()
          const fcpEntry = entries.find(entry => entry.name === 'first-contentful-paint')
          if (fcpEntry) {
            resolve(fcpEntry.startTime)
          }
        })
        observer.observe({ type: 'paint', buffered: true })
      } else {
        resolve(0)
      }
    })
  }
}

/**
 * Resource hints for better performance
 */
export function addResourceHints() {
  const hints = [
    { rel: 'dns-prefetch', href: 'https://fonts.googleapis.com' },
    { rel: 'dns-prefetch', href: 'https://fonts.gstatic.com' },
    { rel: 'preconnect', href: 'https://fonts.googleapis.com', crossOrigin: 'anonymous' },
    { rel: 'preconnect', href: 'https://fonts.gstatic.com', crossOrigin: 'anonymous' }
  ]

  hints.forEach(hint => {
    const link = document.createElement('link')
    Object.assign(link, hint)
    document.head.appendChild(link)
  })
}

/**
 * Optimize images
 */
export function optimizeImages() {
  // Add loading="lazy" to images below the fold
  const images = document.querySelectorAll('img:not([loading])')
  images.forEach(img => {
    if (img.getBoundingClientRect().top > window.innerHeight) {
      img.setAttribute('loading', 'lazy')
    }
  })
}

/**
 * Performance optimization initialization
 */
export function initializePerformanceOptimizations() {
  // Add resource hints
  addResourceHints()
  
  // Optimize fonts
  optimizeFontLoading()
  
  // Preload critical resources
  preloadCriticalResources()
  
  // Optimize images
  optimizeImages()
  
  // Initialize lazy loading
  if ('loading' in HTMLImageElement.prototype) {
    // Native lazy loading supported
    document.querySelectorAll('img[data-src]').forEach(img => {
      img.setAttribute('loading', 'lazy')
      img.setAttribute('src', img.getAttribute('data-src')!)
      img.removeAttribute('data-src')
    })
  } else {
    // Fallback to Intersection Observer
    lazyLoadImages()
  }
}

/**
 * Web Vitals monitoring
 */
export function monitorWebVitals() {
  const monitor = PerformanceMonitor.getInstance()
  
  // Monitor First Contentful Paint
  monitor.getFCP().then(fcp => {
    monitor.logMetric('FCP', fcp)
    // Send to analytics if needed
    if (typeof window.gtag === 'function') {
      window.gtag('event', 'web_vital', {
        event_category: 'FCP',
        value: Math.round(fcp)
      })
    }
  })

  // Monitor Cumulative Layout Shift
  monitor.getCLS().then(cls => {
    monitor.logMetric('CLS', cls)
    // Send to analytics if needed
    if (typeof window.gtag === 'function') {
      window.gtag('event', 'web_vital', {
        event_category: 'CLS',
        value: Math.round(cls * 1000) // Convert to thousandths
      })
    }
  })

  // Monitor Largest Contentful Paint
  if ('PerformanceObserver' in window) {
    const observer = new PerformanceObserver((list) => {
      const entries = list.getEntries()
      const lastEntry = entries[entries.length - 1]
      const lcp = (lastEntry as any).startTime
      monitor.logMetric('LCP', lcp)
      
      // Send to analytics if needed
      if (typeof window.gtag === 'function') {
        window.gtag('event', 'web_vital', {
          event_category: 'LCP',
          value: Math.round(lcp)
        })
      }
    })
    observer.observe({ type: 'largest-contentful-paint', buffered: true })
  }
}