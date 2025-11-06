import { describe, it, expect, beforeEach } from 'vitest'
import { contactFormSchema, applicationFormSchema, assessmentFormSchema, submitForm } from './formUtils'

describe('Form Validation', () => {
  describe('Contact Form Validation', () => {
    const validContactData = {
      name: 'John Doe',
      email: 'john@example.com',
      phone: '0124 5823 377',
      service: 'personal-care',
      urgency: 'soon',
      message: 'I need help with personal care for my mother',
      contactMethod: 'phone',
      bestTime: 'afternoon'
    }

    it('should validate valid contact form data', () => {
      const result = contactFormSchema.parse(validContactData)
      expect(result).toMatchObject(validContactData)
    })

    it('should reject contact form with invalid email', () => {
      const invalidData = { ...validContactData, email: 'invalid-email' }
      expect(() => contactFormSchema.parse(invalidData)).toThrow()
    })

    it('should reject contact form with too short name', () => {
      const invalidData = { ...validContactData, name: 'J' }
      expect(() => contactFormSchema.parse(invalidData)).toThrow()
    })

    it('should reject contact form with too short phone number', () => {
      const invalidData = { ...validContactData, phone: '123' }
      expect(() => contactFormSchema.parse(invalidData)).toThrow()
    })

    it('should reject contact form with too short message', () => {
      const invalidData = { ...validContactData, message: 'Hi' }
      expect(() => contactFormSchema.parse(invalidData)).toThrow()
    })

    it('should reject contact form without required fields', () => {
      expect(() => contactFormSchema.parse({})).toThrow()
    })
  })

  describe('Application Form Validation', () => {
    const validApplicationData = {
      firstName: 'Jane',
      lastName: 'Smith',
      email: 'jane@example.com',
      phone: '0124 5823 377',
      position: 'care-worker',
      experience: 3,
      qualifications: 'NVQ Level 2 in Health & Social Care with 3 years experience',
      availability: 'full-time',
      cv: new File(['test'], 'resume.pdf', { type: 'application/pdf' }),
      coverLetter: 'I am passionate about care work...',
      consent: true
    }

    it('should validate valid application form data', () => {
      const result = applicationFormSchema.parse(validApplicationData)
      expect(result).toMatchObject(validApplicationData)
    })

    it('should reject application with invalid email', () => {
      const invalidData = { ...validApplicationData, email: 'not-an-email' }
      expect(() => applicationFormSchema.parse(invalidData)).toThrow()
    })

    it('should reject application without consent', () => {
      const invalidData = { ...validApplicationData, consent: false }
      expect(() => applicationFormSchema.parse(invalidData)).toThrow()
    })

    it('should reject application with negative experience', () => {
      const invalidData = { ...validApplicationData, experience: -1 }
      expect(() => applicationFormSchema.parse(invalidData)).toThrow()
    })
  })

  describe('Assessment Form Validation', () => {
    const validAssessmentData = {
      fullName: 'Robert Wilson',
      age: 75,
      email: 'robert@example.com',
      phone: '0124 5823 377',
      careType: ['personal-care', 'medication-management'],
      urgency: 'urgent',
      healthConditions: 'Diabetes and mobility issues',
      currentSupport: 'Family provides some support',
      budget: '2000-3000',
      message: 'Looking for professional care support'
    }

    it('should validate valid assessment form data', () => {
      const result = assessmentFormSchema.parse(validAssessmentData)
      expect(result).toMatchObject(validAssessmentData)
    })

    it('should reject assessment with invalid age', () => {
      const invalidData = { ...validAssessmentData, age: 17 }
      expect(() => assessmentFormSchema.parse(invalidData)).toThrow()
    })

    it('should reject assessment with empty care type', () => {
      const invalidData = { ...validAssessmentData, careType: [] }
      expect(() => assessmentFormSchema.parse(invalidData)).toThrow()
    })
  })

  describe('Form Submission', () => {
    beforeEach(() => {
      vi.clearAllMocks()
    })

    it('should submit form successfully', async () => {
      const mockResponse = {
        success: true,
        message: 'Form submitted successfully'
      }

      global.fetch = vi.fn().mockResolvedValueOnce({
        ok: true,
        json: async () => mockResponse
      })

      const result = await submitForm('/api/test', { test: 'data' })
      
      expect(result.success).toBe(true)
      expect(result.message).toBe('Form submitted successfully')
    })

    it('should handle submission failure', async () => {
      global.fetch = vi.fn().mockRejectedValueOnce(new Error('Network error'))

      const result = await submitForm('/api/test', { test: 'data' })
      
      expect(result.success).toBe(false)
      expect(result.message).toContain('Failed to submit form')
    })

    it('should handle timeout', async () => {
      // Mock AbortError
      const abortError = new Error('The operation was aborted')
      abortError.name = 'AbortError'
      
      global.fetch = vi.fn().mockRejectedValueOnce(abortError)

      const result = await submitForm('/api/test', { test: 'data' }, { timeout: 100 })
      
      expect(result.success).toBe(false)
      expect(result.error).toContain('timeout')
    })
  })
})