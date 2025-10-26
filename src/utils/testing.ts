/**
 * Cross-browser testing and compatibility utilities
 */

/**
 * Browser detection
 */
export class BrowserDetector {
  static getBrowserInfo() {
    const userAgent = navigator.userAgent
    const platform = navigator.platform
    
    return {
      browser: this.detectBrowser(userAgent),
      version: this.detectVersion(userAgent),
      platform: this.detectPlatform(platform),
      isMobile: this.isMobileDevice(userAgent),
      isTouchDevice: this.isTouchDevice(),
      supportsES6: this.supportsES6(),
      supportsWebP: this.supportsWebP(),
      supportsIntersectionObserver: this.supportsIntersectionObserver(),
      supportsResizeObserver: this.supportsResizeObserver(),
      supportsCSSGrid: this.supportsCSSGrid(),
      supportsFlexbox: this.supportsFlexbox()
    }
  }

  private static detectBrowser(userAgent: string): string {
    if (userAgent.includes('Chrome')) return 'Chrome'
    if (userAgent.includes('Firefox')) return 'Firefox'
    if (userAgent.includes('Safari') && !userAgent.includes('Chrome')) return 'Safari'
    if (userAgent.includes('Edge')) return 'Edge'
    if (userAgent.includes('Opera') || userAgent.includes('OPR')) return 'Opera'
    if (userAgent.includes('MSIE') || userAgent.includes('Trident')) return 'Internet Explorer'
    return 'Unknown'
  }

  private static detectVersion(userAgent: string): string {
    const browsers = [
      { name: 'Chrome', regex: /Chrome\/(\d+)/ },
      { name: 'Firefox', regex: /Firefox\/(\d+)/ },
      { name: 'Safari', regex: /Version\/(\d+)/ },
      { name: 'Edge', regex: /Edge\/(\d+)/ },
      { name: 'Opera', regex: /Opera\/(\d+)/ }
    ]

    for (const browser of browsers) {
      const match = userAgent.match(browser.regex)
      if (match) {
        return match[1]
      }
    }
    return 'Unknown'
  }

  private static detectPlatform(platform: string): string {
    if (platform.includes('Win')) return 'Windows'
    if (platform.includes('Mac')) return 'macOS'
    if (platform.includes('Linux')) return 'Linux'
    if (platform.includes('iPhone') || platform.includes('iPad')) return 'iOS'
    if (platform.includes('Android')) return 'Android'
    return 'Unknown'
  }

  private static isMobileDevice(userAgent: string): boolean {
    return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(userAgent)
  }

  private static isTouchDevice(): boolean {
    return 'ontouchstart' in window || navigator.maxTouchPoints > 0
  }

  private static supportsES6(): boolean {
    try {
      new Function('(a = 0) => a')
      return true
    } catch {
      return false
    }
  }

  private static supportsWebP(): boolean {
    const canvas = document.createElement('canvas')
    canvas.width = 1
    canvas.height = 1
    return canvas.toDataURL('image/webp').indexOf('webp') > -1
  }

  private static supportsIntersectionObserver(): boolean {
    return 'IntersectionObserver' in window
  }

  private static supportsResizeObserver(): boolean {
    return 'ResizeObserver' in window
  }

  private static supportsCSSGrid(): boolean {
    return CSS.supports('display', 'grid')
  }

  private static supportsFlexbox(): boolean {
    return CSS.supports('display', 'flex')
  }
}

/**
 * CSS compatibility checker
 */
export class CSSCompatibility {
  /**
   * Check if CSS property is supported
   */
  static supportsProperty(property: string, value?: string): boolean {
    const testElement = document.createElement('div')
    const style = testElement.style as any
    
    if (value) {
      style[property] = value
      return style[property] === value
    }
    
    return property in style
  }

  /**
   * Get vendor-prefixed property name
   */
  static getVendorPrefix(property: string): string {
    const prefixes = ['webkit', 'moz', 'ms', 'o']
    const testElement = document.createElement('div')
    const style = testElement.style
    
    // Check if property is supported without prefix
    if (property in style) return property
    
    // Check with prefixes
    for (const prefix of prefixes) {
      const prefixedProperty = prefix + property.charAt(0).toUpperCase() + property.slice(1)
      if (prefixedProperty in style) {
        return prefixedProperty
      }
    }
    
    return property
  }

  /**
   * Apply CSS with vendor prefixes
   */
  static applyPrefixedStyle(element: HTMLElement, property: string, value: string) {
    const prefixes = ['', 'webkit', 'moz', 'ms', 'o']
    const style = element.style as any
    
    prefixes.forEach(prefix => {
      const propName = prefix ? prefix + property.charAt(0).toUpperCase() + property.slice(1) : property
      if (this.supportsProperty(propName, value)) {
        style[propName] = value
      }
    })
  }
}

/**
 * JavaScript compatibility utilities
 */
export class JSCompatibility {
  /**
   * Polyfill for Array.from
   */
  static polyfillArrayFrom() {
    if (!Array.from) {
      Array.from = (arrayLike: any, mapFn?: Function, thisArg?: any) => {
        const array = []
        const length = arrayLike.length
        
        for (let i = 0; i < length; i++) {
          array.push(mapFn ? mapFn.call(thisArg, arrayLike[i]) : arrayLike[i])
        }
        
        return array
      }
    }
  }

  /**
   * Polyfill for Object.assign
   */
  static polyfillObjectAssign() {
    if (!Object.assign) {
      Object.assign = (target: any, ...sources: any[]) => {
        if (target === null || target === undefined) {
          throw new TypeError('Cannot convert undefined or null to object')
        }
        
        const to = Object(target)
        
        for (const source of sources) {
          if (source !== null && source !== undefined) {
            for (const key in source) {
              if (Object.prototype.hasOwnProperty.call(source, key)) {
                to[key] = source[key]
              }
            }
          }
        }
        
        return to
      }
    }
  }

  /**
   * Polyfill for String.includes
   */
  static polyfillStringIncludes() {
    if (!String.prototype.includes) {
      String.prototype.includes = function(search: string, start?: number) {
        if (typeof start !== 'number') start = 0
        if (start + search.length > this.length) {
          return false
        }
        return this.indexOf(search, start) !== -1
      }
    }
  }

  /**
   * Apply all polyfills
   */
  static applyPolyfills() {
    this.polyfillArrayFrom()
    this.polyfillObjectAssign()
    this.polyfillStringIncludes()
  }
}

/**
 * Responsive design testing
 */
export class ResponsiveTester {
  /**
   * Get current breakpoint
   */
  static getCurrentBreakpoint(): string {
    const width = window.innerWidth
    
    if (width < 640) return 'mobile'
    if (width < 768) return 'mobile-lg'
    if (width < 1024) return 'tablet'
    if (width < 1280) return 'laptop'
    return 'desktop'
  }

  /**
   * Check if element is visible
   */
  static isElementVisible(element: HTMLElement): boolean {
    const rect = element.getBoundingClientRect()
    const viewportHeight = window.innerHeight
    const viewportWidth = window.innerWidth
    
    return (
      rect.top >= 0 &&
      rect.left >= 0 &&
      rect.bottom <= viewportHeight &&
      rect.right <= viewportWidth
    )
  }

  /**
   * Test touch events
   */
  static testTouchEvents(): boolean {
    let touchSupported = false
    
    const testTouch = () => {
      touchSupported = true
      document.removeEventListener('touchstart', testTouch, false)
    }
    
    document.addEventListener('touchstart', testTouch, false)
    
    // Also check CSS hover support
    const mediaQuery = window.matchMedia('(hover: hover)')
    const supportsHover = mediaQuery.matches
    
    return touchSupported || !supportsHover
  }
}

/**
 * Performance testing
 */
export class PerformanceTester {
  /**
   * Test page load time
   */
  static testPageLoadTime(): Promise<number> {
    return new Promise((resolve) => {
      if (performance.timing) {
        const loadTime = performance.timing.loadEventEnd - performance.timing.navigationStart
        resolve(loadTime)
      } else {
        resolve(0)
      }
    })
  }

  /**
   * Test JavaScript execution time
   */
  static testJSTime(fn: Function): number {
    const start = performance.now()
    fn()
    const end = performance.now()
    return end - start
  }

  /**
   * Test memory usage
   */
  static testMemoryUsage(): number {
    if ('memory' in performance) {
      return (performance as any).memory.usedJSHeapSize
    }
    return 0
  }
}

/**
 * Cross-browser testing suite
 */
export class CrossBrowserTester {
  private testResults: Map<string, any> = new Map()

  /**
   * Run comprehensive browser tests
   */
  async runTests(): Promise<Map<string, any>> {
    // Running cross-browser compatibility tests...
    
    // Browser detection
    this.testResults.set('browserInfo', BrowserDetector.getBrowserInfo())
    
    // CSS compatibility
    this.testResults.set('cssGrid', BrowserDetector.getBrowserInfo().supportsCSSGrid)
    this.testResults.set('flexbox', BrowserDetector.getBrowserInfo().supportsFlexbox)
    this.testResults.set('webp', BrowserDetector.getBrowserInfo().supportsWebP)
    
    // JavaScript compatibility
    this.testResults.set('intersectionObserver', BrowserDetector.getBrowserInfo().supportsIntersectionObserver)
    this.testResults.set('resizeObserver', BrowserDetector.getBrowserInfo().supportsResizeObserver)
    
    // Performance tests
    const loadTime = await PerformanceTester.testPageLoadTime()
    this.testResults.set('loadTime', loadTime)
    this.testResults.set('memoryUsage', PerformanceTester.testMemoryUsage())
    
    // Responsive tests
    this.testResults.set('breakpoint', ResponsiveTester.getCurrentBreakpoint())
    this.testResults.set('touchEvents', ResponsiveTester.testTouchEvents())
    
    // Apply polyfills if needed
    JSCompatibility.applyPolyfills()
    
    return this.testResults
  }

  /**
   * Generate test report
   */
  generateReport(): string {
    let report = 'Cross-Browser Compatibility Report\n'
    report += '='.repeat(50) + '\n\n'
    
    this.testResults.forEach((value, key) => {
      report += `${key}: ${JSON.stringify(value)}\n`
    })
    
    report += '\nRecommendations:\n'
    report += this.generateRecommendations()
    
    return report
  }

  private generateRecommendations(): string {
    const recommendations: string[] = []
    const browserInfo = this.testResults.get('browserInfo')
    const loadTime = this.testResults.get('loadTime')
    
    if (browserInfo && browserInfo.browser === 'Internet Explorer') {
      recommendations.push('Consider adding polyfills for older IE versions')
    }
    
    if (loadTime && loadTime > 3000) {
      recommendations.push('Page load time is slow. Consider optimizing images and code splitting.')
    }
    
    if (!this.testResults.get('webp')) {
      recommendations.push('WebP not supported. Provide fallback image formats.')
    }
    
    if (!this.testResults.get('intersectionObserver')) {
      recommendations.push('Intersection Observer not supported. Provide fallback for lazy loading.')
    }
    
    return recommendations.length > 0 ? recommendations.join('\n') : 'No specific recommendations.'
  }

  /**
   * Log test results to console
   */
  logResults() {
    console.group('Cross-Browser Test Results')
    this.testResults.forEach((value, key) => {
      // Browser compatibility data logged
    })
    console.groupEnd()
  }
}

/**
 * Initialize cross-browser compatibility
 */
export function initializeCrossBrowserCompatibility() {
  // Apply polyfills
  JSCompatibility.applyPolyfills()
  
  // Test browser compatibility
  const tester = new CrossBrowserTester()
  
  tester.runTests().then(() => {
    tester.logResults()
    
    // Generate and log report
    const report = tester.generateReport()
    // Compatibility report generated
  })
  
  // Add event listeners for responsive testing
  window.addEventListener('resize', () => {
    const breakpoint = ResponsiveTester.getCurrentBreakpoint()
    // Breakpoint changed
  })
}