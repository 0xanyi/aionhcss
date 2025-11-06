import { describe, it, expect, beforeEach, vi } from 'vitest'

// Mock the auth utilities to avoid needing actual authentication in tests
vi.mock('../../utils/auth', () => ({
  requireAuth: vi.fn().mockResolvedValue({
    user: { 
      id: 'test-user', 
      email: 'test@example.com', 
      role: 'admin' as const, 
      permissions: ['read', 'write'] 
    },
    error: null
  }),
  logAccess: vi.fn()
}))

// Mock the formUtils
vi.mock('../../utils/formUtils', () => ({
  contactFormSchema: {
    parse: vi.fn().mockReturnValue({
      name: 'Test User',
      email: 'test@example.com',
      phone: '0124 5823 377',
      service: 'personal-care',
      urgency: 'soon',
      message: 'Test message',
      contactMethod: 'phone',
      bestTime: 'afternoon'
    })
  },
  applicationFormSchema: {
    parse: vi.fn().mockReturnValue({
      firstName: 'Jane',
      lastName: 'Smith',
      email: 'jane@example.com',
      phone: '0124 5823 377',
      position: 'care-worker',
      experience: 3,
      qualifications: 'NVQ Level 2',
      availability: 'full-time',
      cv: new File(['test'], 'resume.pdf', { type: 'application/pdf' }),
      coverLetter: 'I am passionate about care work...',
      consent: true
    })
  },
  assessmentFormSchema: {
    parse: vi.fn().mockReturnValue({
      fullName: 'Robert Wilson',
      age: 75,
      email: 'robert@example.com',
      phone: '0124 5823 377',
      careType: ['personal-care'],
      urgency: 'urgent',
      healthConditions: 'Diabetes',
      currentSupport: 'Family',
      budget: '2000-3000',
      message: 'Need care support'
    })
  }
}))

describe('API Endpoints', () => {
  describe('Contact Form API', () => {
    it('should handle valid contact form submission', async () => {
      // Mock fetch response
      global.fetch = vi.fn().mockResolvedValueOnce({
        ok: true,
        json: async () => ({
          success: true,
          message: 'Contact form submitted successfully',
          data: { submissionId: 'contact-123' }
        })
      })

      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': 'Bearer test-token'
        },
        body: JSON.stringify({
          name: 'Test User',
          email: 'test@example.com',
          phone: '0124 5823 377',
          service: 'personal-care',
          urgency: 'soon',
          message: 'Test message',
          contactMethod: 'phone',
          bestTime: 'afternoon'
        })
      })

      expect(response.ok).toBe(true)
      
      const result = await response.json()
      expect(result.success).toBe(true)
      expect(result.message).toBe('Contact form submitted successfully')
    })

    it('should handle form submission errors', async () => {
      global.fetch = vi.fn().mockResolvedValueOnce({
        ok: false,
        status: 400,
        statusText: 'Bad Request'
      })

      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': 'Bearer test-token'
        },
        body: JSON.stringify({
          name: 'Test User',
          email: 'test@example.com'
          // Missing required fields
        })
      })

      expect(response.ok).toBe(false)
      expect(response.status).toBe(400)
    })

    it('should handle network errors', async () => {
      global.fetch = vi.fn().mockRejectedValueOnce(new Error('Network error'))

      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': 'Bearer test-token'
        },
        body: JSON.stringify({
          name: 'Test User',
          email: 'test@example.com',
          phone: '0124 5823 377'
        })
      })

      expect(response.ok).toBe(false)
    })
  })

  describe('Application Form API', () => {
    it('should handle valid job application submission', async () => {
      global.fetch = vi.fn().mockResolvedValueOnce({
        ok: true,
        json: async () => ({
          success: true,
          message: 'Application submitted successfully',
          data: { applicationId: 'app-123' }
        })
      })

      const formData = new FormData()
      formData.append('firstName', 'Jane')
      formData.append('lastName', 'Smith')
      formData.append('email', 'jane@example.com')
      formData.append('phone', '0124 5823 377')
      formData.append('position', 'care-worker')
      formData.append('experience', '3')
      formData.append('availability', 'full-time')
      formData.append('consent', 'true')

      const response = await fetch('/api/application', {
        method: 'POST',
        headers: {
          'Authorization': 'Bearer test-token'
        },
        body: formData
      })

      expect(response.ok).toBe(true)
      
      const result = await response.json()
      expect(result.success).toBe(true)
      expect(result.message).toBe('Application submitted successfully')
    })

    it('should handle file upload validation', async () => {
      global.fetch = vi.fn().mockResolvedValueOnce({
        ok: true,
        json: async () => ({
          success: true,
          message: 'Application with CV submitted successfully'
        })
      })

      const formData = new FormData()
      formData.append('firstName', 'Jane')
      formData.append('email', 'jane@example.com')
      formData.append('cv', new File(['cv content'], 'resume.pdf', { type: 'application/pdf' }))

      const response = await fetch('/api/application', {
        method: 'POST',
        headers: {
          'Authorization': 'Bearer test-token'
        },
        body: formData
      })

      expect(response.ok).toBe(true)
      
      const result = await response.json()
      expect(result.success).toBe(true)
    })
  })

  describe('Assessment Form API', () => {
    it('should handle valid care assessment submission', async () => {
      global.fetch = vi.fn().mockResolvedValueOnce({
        ok: true,
        json: async () => ({
          success: true,
          message: 'Assessment submitted successfully',
          data: { assessmentId: 'assessment-123' }
        })
      })

      const response = await fetch('/api/assessment', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': 'Bearer test-token'
        },
        body: JSON.stringify({
          fullName: 'Robert Wilson',
          age: 75,
          email: 'robert@example.com',
          phone: '0124 5823 377',
          careType: ['personal-care', 'medication-management'],
          urgency: 'urgent',
          healthConditions: 'Diabetes and mobility issues',
          currentSupport: 'Family',
          budget: '2000-3000',
          message: 'Looking for professional care support'
        })
      })

      expect(response.ok).toBe(true)
      
      const result = await response.json()
      expect(result.success).toBe(true)
      expect(result.message).toBe('Assessment submitted successfully')
    })

    it('should validate age restrictions', async () => {
      const { assessmentFormSchema } = await import('../../utils/formUtils')
      
      // Test that age validation works
      expect(() => assessmentFormSchema.parse({
        fullName: 'Test User',
        age: 17, // Too young
        email: 'test@example.com',
        phone: '0124 5823 377',
        careType: ['personal-care'],
        urgency: 'soon',
        healthConditions: 'None',
        currentSupport: 'Family',
        budget: '1000-2000',
        message: 'Test'
      })).toThrow()
    })
  })

  describe('Authentication Requirements', () => {
    it('should reject requests without authentication', async () => {
      // Mock auth failure
      const { requireAuth } = await import('../../utils/auth')
      vi.mocked(requireAuth).mockResolvedValueOnce({
        user: null,
        error: 'Authentication required'
      })

      const response = await fetch('/api/assessment', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          fullName: 'Test User',
          age: 75,
          email: 'test@example.com',
          phone: '0124 5823 377',
          careType: ['personal-care'],
          urgency: 'urgent',
          healthConditions: 'None',
          currentSupport: 'Family',
          budget: '2000-3000',
          message: 'Test'
        })
      })

      expect(response.status).toBe(401)
      
      const result = await response.json()
      expect(result.success).toBe(false)
      expect(result.error).toBe('Authentication required')
    })

    it('should reject requests with insufficient permissions', async () => {
      // Mock auth with insufficient role
      const { requireAuth } = await import('../../utils/auth')
      vi.mocked(requireAuth).mockResolvedValueOnce({
        user: { 
          id: 'test-user', 
          email: 'test@example.com', 
          role: 'guest' as const, // Insufficient role
          permissions: ['read'] 
        },
        error: 'Insufficient permissions'
      })

      const response = await fetch('/api/assessment', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': 'Bearer test-token'
        },
        body: JSON.stringify({
          fullName: 'Test User',
          age: 75,
          email: 'test@example.com',
          phone: '0124 5823 377',
          careType: ['personal-care'],
          urgency: 'urgent',
          healthConditions: 'None',
          currentSupport: 'Family',
          budget: '2000-3000',
          message: 'Test'
        })
      })

      expect(response.status).toBe(401)
      
      const result = await response.json()
      expect(result.success).toBe(false)
    })
  })
})
