/**
 * Accessibility utilities for Aion Health Care website
 * Implements WCAG 2.1 AA compliance features
 */

/**
 * Color contrast checker for WCAG compliance
 */
export function checkColorContrast(foreground: string, background: string): number {
  const getLuminance = (color: string): number => {
    const hex = color.replace('#', '')
    const rgb = parseInt(hex, 16)
    const r = (rgb >> 16) & 0xff
    const g = (rgb >> 8) & 0xff
    const b = (rgb >> 0) & 0xff
    
    const [rSrgb, gSrgb, bSrgb] = [r, g, b].map(c => {
      const cFloat = c / 255
      return cFloat <= 0.03928 ? cFloat / 12.92 : Math.pow((cFloat + 0.055) / 1.055, 2.4)
    })
    
    return 0.2126 * rSrgb + 0.7152 * gSrgb + 0.0722 * bSrgb
  }

  const lum1 = getLuminance(foreground)
  const lum2 = getLuminance(background)
  const brightest = Math.max(lum1, lum2)
  const darkest = Math.min(lum1, lum2)
  
  return (brightest + 0.05) / (darkest + 0.05)
}

/**
 * Check if color contrast meets WCAG standards
 */
export function meetsWCAGContrast(color1: string, color2: string, level: 'AA' | 'AAA' = 'AA'): boolean {
  const contrast = checkColorContrast(color1, color2)
  
  if (level === 'AA') {
    return contrast >= 4.5 // Normal text
  } else {
    return contrast >= 7.0 // Normal text
  }
}

/**
 * Keyboard navigation manager
 */
export class KeyboardNavigation {
  private focusableElements: HTMLElement[] = []
  private currentIndex = 0

  initialize() {
    this.updateFocusableElements()
    this.addEventListeners()
  }

  private updateFocusableElements() {
    const focusableSelector = [
      'a[href]',
      'button:not([disabled])',
      'input:not([disabled])',
      'textarea:not([disabled])',
      'select:not([disabled])',
      '[tabindex]:not([tabindex="-1"])',
      '[contenteditable="true"]'
    ].join(', ')

    this.focusableElements = Array.from(
      document.querySelectorAll(focusableSelector)
    ) as HTMLElement[]
  }

  private addEventListeners() {
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Tab') {
        this.handleTabKey(e)
      } else if (e.key === 'Escape') {
        this.handleEscapeKey(e)
      }
    })
  }

  private handleTabKey(e: KeyboardEvent) {
    const activeElement = document.activeElement as HTMLElement
    const currentIndex = this.focusableElements.indexOf(activeElement)
    
    if (currentIndex === -1) return

    if (e.shiftKey) {
      // Shift + Tab
      e.preventDefault()
      const prevIndex = currentIndex === 0 ? this.focusableElements.length - 1 : currentIndex - 1
      this.focusableElements[prevIndex]?.focus()
    } else {
      // Tab
      e.preventDefault()
      const nextIndex = currentIndex === this.focusableElements.length - 1 ? 0 : currentIndex + 1
      this.focusableElements[nextIndex]?.focus()
    }
  }

  private handleEscapeKey(e: KeyboardEvent) {
    // Close modals, dropdowns, etc.
    const openElements = document.querySelectorAll('[aria-expanded="true"], .modal-open')
    openElements.forEach(element => {
      if (element instanceof HTMLElement) {
        element.focus()
        element.click() // Close the element
      }
    })
  }

  focusFirst() {
    this.focusableElements[0]?.focus()
  }

  focusLast() {
    this.focusableElements[this.focusableElements.length - 1]?.focus()
  }
}

/**
 * Screen reader utilities
 */
export class ScreenReaderUtils {
  /**
   * Announce a message to screen readers
   */
  static announce(message: string, priority: 'polite' | 'assertive' = 'polite') {
    const announcement = document.createElement('div')
    announcement.setAttribute('aria-live', priority)
    announcement.setAttribute('aria-atomic', 'true')
    announcement.className = 'sr-only'
    announcement.textContent = message
    
    document.body.appendChild(announcement)
    
    // Remove after announcement
    setTimeout(() => {
      document.body.removeChild(announcement)
    }, 1000)
  }

  /**
   * Create accessible error messages
   */
  static createErrorMessage(message: string, fieldId: string): HTMLElement {
    const errorId = `${fieldId}-error`
    const errorElement = document.createElement('div')
    errorElement.id = errorId
    errorElement.className = 'text-aion-coral text-sm mt-1'
    errorElement.setAttribute('role', 'alert')
    errorElement.setAttribute('aria-live', 'polite')
    errorElement.textContent = message
    
    return errorElement
  }

  /**
   * Update form field with error
   */
  static updateFieldWithError(field: HTMLElement, errorElement: HTMLElement) {
    const fieldId = field.id || field.getAttribute('name')
    if (fieldId) {
      field.setAttribute('aria-describedby', `${fieldId}-error`)
      field.setAttribute('aria-invalid', 'true')
      field.after(errorElement)
    }
  }
}

/**
 * High contrast mode manager
 */
export class HighContrastManager {
  private isHighContrast = false
  private originalStyles: Map<string, string> = new Map()

  toggleHighContrast() {
    this.isHighContrast = !this.isHighContrast
    
    if (this.isHighContrast) {
      this.enableHighContrast()
    } else {
      this.disableHighContrast()
    }
  }

  private enableHighContrast() {
    // Store original styles
    this.storeOriginalStyles()
    
    // Apply high contrast styles
    document.documentElement.style.setProperty('--contrast-multiplier', '1.5')
    document.documentElement.style.setProperty('--text-color', '#ffffff')
    document.documentElement.style.setProperty('--background-color', '#000000')
    document.documentElement.style.setProperty('--accent-color', '#ffff00')
    
    // Add high contrast class
    document.documentElement.classList.add('high-contrast')
  }

  private disableHighContrast() {
    // Restore original styles
    this.restoreOriginalStyles()
    
    // Remove high contrast class
    document.documentElement.classList.remove('high-contrast')
  }

  private storeOriginalStyles() {
    const root = document.documentElement
    const styles = getComputedStyle(root)
    
    this.originalStyles.set('--text-color', styles.getPropertyValue('--text-color'))
    this.originalStyles.set('--background-color', styles.getPropertyValue('--background-color'))
    this.originalStyles.set('--accent-color', styles.getPropertyValue('--accent-color'))
  }

  private restoreOriginalStyles() {
    this.originalStyles.forEach((value, key) => {
      document.documentElement.style.setProperty(key, value)
    })
  }

  isHighContrastEnabled(): boolean {
    return this.isHighContrast
  }
}

/**
 * Font size manager
 */
export class FontSizeManager {
  private currentSize = 100 // Base font size percentage

  increaseFontSize() {
    if (this.currentSize < 150) {
      this.currentSize += 25
      this.applyFontSize()
    }
  }

  decreaseFontSize() {
    if (this.currentSize > 75) {
      this.currentSize -= 25
      this.applyFontSize()
    }
  }

  resetFontSize() {
    this.currentSize = 100
    this.applyFontSize()
  }

  private applyFontSize() {
    document.documentElement.style.setProperty('--font-size-scale', `${this.currentSize / 100}`)
  }

  getCurrentSize(): number {
    return this.currentSize
  }
}

/**
 * Focus management utilities
 */
export class FocusManager {
  /**
   * Trap focus within an element (for modals, dialogs)
   */
  static trapFocus(element: HTMLElement) {
    const focusableElements = element.querySelectorAll(
      'a[href], button:not([disabled]), input:not([disabled]), textarea:not([disabled]), select:not([disabled]), [tabindex]:not([tabindex="-1"])'
    ) as NodeListOf<HTMLElement>

    const firstElement = focusableElements[0]
    const lastElement = focusableElements[focusableElements.length - 1]

    const handleTabKey = (e: KeyboardEvent) => {
      if (e.key === 'Tab') {
        if (e.shiftKey) {
          if (document.activeElement === firstElement) {
            e.preventDefault()
            lastElement?.focus()
          }
        } else {
          if (document.activeElement === lastElement) {
            e.preventDefault()
            firstElement?.focus()
          }
        }
      }
    }

    element.addEventListener('keydown', handleTabKey)
    
    return () => {
      element.removeEventListener('keydown', handleTabKey)
    }
  }

  /**
   * Restore focus to previous element
   */
  static restoreFocus(previousElement: HTMLElement) {
    previousElement?.focus()
  }
}

/**
 * Accessibility checker
 */
export class AccessibilityChecker {
  /**
   * Check if an element has proper ARIA attributes
   */
  static checkARIA(element: HTMLElement): boolean {
    const role = element.getAttribute('role')
    const ariaLabel = element.getAttribute('aria-label')
    const ariaLabelledBy = element.getAttribute('aria-labelledby')
    const ariaDescribedBy = element.getAttribute('aria-describedby')
    
    // Check if element has proper labeling
    if (role && !ariaLabel && !ariaLabelledBy) {
      // Element with role should have aria-label or aria-labelledby
      return false
    }
    
    return true
  }

  /**
   * Check if images have alt text
   */
  static checkImages(): boolean {
    const images = document.querySelectorAll('img')
    let allHaveAlt = true
    
    images.forEach(img => {
      const alt = img.getAttribute('alt')
      if (!alt) {
        // Image missing alt text
        allHaveAlt = false
      }
    })
    
    return allHaveAlt
  }

  /**
   * Check color contrast for all text elements
   */
  static checkColorContrast(): boolean {
    const textElements = document.querySelectorAll('p, h1, h2, h3, h4, h5, h6, span, a, button')
    let allMeetContrast = true
    
    textElements.forEach(element => {
      const computedStyle = getComputedStyle(element)
      const color = computedStyle.color
      const backgroundColor = computedStyle.backgroundColor
      
      if (!meetsWCAGContrast(color, backgroundColor)) {
        // Text element fails color contrast
        allMeetContrast = false
      }
    })
    
    return allMeetContrast
  }
}

/**
 * Initialize accessibility features
 */
export function initializeAccessibility() {
  // Initialize keyboard navigation
  const keyboardNav = new KeyboardNavigation()
  keyboardNav.initialize()
  
  // Initialize high contrast manager
  const highContrastManager = new HighContrastManager()
  
  // Initialize font size manager
  const fontSizeManager = new FontSizeManager()
  
  // Add keyboard shortcuts
  document.addEventListener('keydown', (e) => {
    // Ctrl + + to increase font size
    if (e.ctrlKey && e.key === '+') {
      e.preventDefault()
      fontSizeManager.increaseFontSize()
    }
    
    // Ctrl + - to decrease font size
    if (e.ctrlKey && e.key === '-') {
      e.preventDefault()
      fontSizeManager.decreaseFontSize()
    }
    
    // Ctrl + 0 to reset font size
    if (e.ctrlKey && e.key === '0') {
      e.preventDefault()
      fontSizeManager.resetFontSize()
    }
    
    // Ctrl + H to toggle high contrast
    if (e.ctrlKey && e.key === 'h') {
      e.preventDefault()
      highContrastManager.toggleHighContrast()
    }
  })
  
  // Check accessibility on load
  setTimeout(() => {
    AccessibilityChecker.checkImages()
    AccessibilityChecker.checkColorContrast()
  }, 1000)
}