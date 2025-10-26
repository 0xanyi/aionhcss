import { z } from 'zod'

// Contact Form Schema
export const contactFormSchema = z.object({
  name: z
    .string()
    .min(2, 'Name must be at least 2 characters')
    .max(100, 'Name must be less than 100 characters')
    .regex(/^[a-zA-Z\s]+$/, 'Name can only contain letters and spaces'),
  
  email: z
    .string()
    .email('Please enter a valid email address')
    .max(255, 'Email must be less than 255 characters'),
  
  phone: z
    .string()
    .min(10, 'Please enter a valid phone number')
    .max(20, 'Phone number must be less than 20 characters')
    .regex(/^\+?[\d\s\-\(\)]+$/, 'Please enter a valid phone number'),
  
  service: z
    .string()
    .optional(),
  
  urgency: z
    .enum(['emergency', 'urgent', 'soon', 'planning'], {
      errorMap: () => ({ message: 'Please select an urgency level' })
    })
    .optional(),
  
  message: z
    .string()
    .min(10, 'Message must be at least 10 characters')
    .max(1000, 'Message must be less than 1000 characters'),
  
  contactMethod: z
    .enum(['phone', 'email', 'text'], {
      errorMap: () => ({ message: 'Please select a contact method' })
    })
    .optional(),
  
  bestTime: z
    .enum(['morning', 'afternoon', 'evening'], {
      errorMap: () => ({ message: 'Please select a preferred time' })
    })
    .optional(),
})

// Application Form Schema
export const applicationFormSchema = z.object({
  firstName: z
    .string()
    .min(2, 'First name must be at least 2 characters')
    .max(50, 'First name must be less than 50 characters')
    .regex(/^[a-zA-Z]+$/, 'First name can only contain letters'),
  
  lastName: z
    .string()
    .min(2, 'Last name must be at least 2 characters')
    .max(50, 'Last name must be less than 50 characters')
    .regex(/^[a-zA-Z]+$/, 'Last name can only contain letters'),
  
  email: z
    .string()
    .email('Please enter a valid email address')
    .max(255, 'Email must be less than 255 characters'),
  
  phone: z
    .string()
    .min(10, 'Please enter a valid phone number')
    .max(20, 'Phone number must be less than 20 characters')
    .regex(/^\+?[\d\s\-\(\)]+$/, 'Please enter a valid phone number'),
  
  position: z
    .string()
    .min(1, 'Please select a position')
    .max(100, 'Position name is too long'),
  
  experience: z
    .number()
    .min(0, 'Years of experience cannot be negative')
    .max(50, 'Years of experience seems unrealistic'),
  
  qualifications: z
    .string()
    .min(10, 'Please describe your qualifications')
    .max(500, 'Qualifications description is too long'),
  
  availability: z
    .enum(['full-time', 'part-time', 'flexible'], {
      errorMap: () => ({ message: 'Please select availability' })
    }),
  
  cv: z
    .instanceof(File)
    .refine((file) => file.size <= 5000000, 'CV must be less than 5MB')
    .refine((file) => ['application/pdf', 'application/msword', 'application/vnd.openxmlformats-officedocument.wordprocessingml.document'].includes(file.type), 'CV must be a PDF or Word document'),
  
  coverLetter: z
    .string()
    .max(1000, 'Cover letter must be less than 1000 characters')
    .optional(),
  
  consent: z
    .boolean()
    .refine((val) => val === true, 'You must consent to data processing'),
})

// Assessment Form Schema
export const assessmentFormSchema = z.object({
  fullName: z
    .string()
    .min(2, 'Full name must be at least 2 characters')
    .max(100, 'Full name must be less than 100 characters'),
  
  age: z
    .number()
    .min(18, 'You must be at least 18 years old')
    .max(120, 'Age seems unrealistic'),
  
  email: z
    .string()
    .email('Please enter a valid email address')
    .max(255, 'Email must be less than 255 characters'),
  
  phone: z
    .string()
    .min(10, 'Please enter a valid phone number')
    .max(20, 'Phone number must be less than 20 characters')
    .regex(/^\+?[\d\s\-\(\)]+$/, 'Please enter a valid phone number'),
  
  careType: z
    .array(z.string())
    .min(1, 'Please select at least one care type')
    .max(5, 'Too many care types selected'),
  
  urgency: z
    .enum(['emergency', 'urgent', 'soon', 'planning'], {
      errorMap: () => ({ message: 'Please select urgency level' })
    }),
  
  healthConditions: z
    .string()
    .max(500, 'Health conditions description is too long')
    .optional(),
  
  currentSupport: z
    .string()
    .max(300, 'Current support description is too long')
    .optional(),
  
  budget: z
    .enum(['under-1000', '1000-2000', '2000-3000', 'over-3000', 'not-sure'], {
      errorMap: () => ({ message: 'Please select a budget range' })
    }),
  
  message: z
    .string()
    .max(1000, 'Message must be less than 1000 characters')
    .optional(),
})

// Form Field Types
export type ContactFormData = z.infer<typeof contactFormSchema>
export type ApplicationFormData = z.infer<typeof applicationFormSchema>
export type AssessmentFormData = z.infer<typeof assessmentFormSchema>

// Form Submission Response
export interface FormSubmissionResponse {
  success: boolean
  message: string
  data?: any
  error?: string
}

// Email Template Functions
export const generateContactEmail = (data: ContactFormData): string => {
  return `
    <h2>New Contact Form Submission</h2>
    <div style="margin: 20px 0;">
      <h3>Client Information</h3>
      <p><strong>Name:</strong> ${data.name}</p>
      <p><strong>Email:</strong> ${data.email}</p>
      <p><strong>Phone:</strong> ${data.phone}</p>
      ${data.service ? `<p><strong>Service Interest:</strong> ${data.service}</p>` : ''}
      ${data.urgency ? `<p><strong>Urgency:</strong> ${data.urgency}</p>` : ''}
      ${data.contactMethod ? `<p><strong>Preferred Contact Method:</strong> ${data.contactMethod}</p>` : ''}
      ${data.bestTime ? `<p><strong>Best Time to Contact:</strong> ${data.bestTime}</p>` : ''}
    </div>
    <div style="margin: 20px 0;">
      <h3>Message</h3>
      <p style="white-space: pre-wrap;">${data.message}</p>
    </div>
    <div style="margin-top: 30px; padding-top: 20px; border-top: 1px solid #e5e7eb;">
      <p><em>This message was sent through the Aion Health Care website contact form.</em></p>
    </div>
  `
}

export const generateApplicationEmail = (data: ApplicationFormData): string => {
  return `
    <h2>New Job Application</h2>
    <div style="margin: 20px 0;">
      <h3>Applicant Information</h3>
      <p><strong>Name:</strong> ${data.firstName} ${data.lastName}</p>
      <p><strong>Email:</strong> ${data.email}</p>
      <p><strong>Phone:</strong> ${data.phone}</p>
      <p><strong>Position:</strong> ${data.position}</p>
      <p><strong>Experience:</strong> ${data.experience} years</p>
      <p><strong>Availability:</strong> ${data.availability}</p>
    </div>
    <div style="margin: 20px 0;">
      <h3>Qualifications</h3>
      <p style="white-space: pre-wrap;">${data.qualifications}</p>
    </div>
    ${data.coverLetter ? `
      <div style="margin: 20px 0;">
        <h3>Cover Letter</h3>
        <p style="white-space: pre-wrap;">${data.coverLetter}</p>
      </div>
    ` : ''}
    <div style="margin-top: 30px; padding-top: 20px; border-top: 1px solid #e5e7eb;">
      <p><em>This application was submitted through the Aion Health Care website.</em></p>
    </div>
  `
}

// Form Validation Helpers
export const validateForm = async (schema: z.ZodSchema, data: any) => {
  try {
    const validatedData = await schema.parseAsync(data)
    return { success: true, data: validatedData }
  } catch (error) {
    if (error instanceof z.ZodError) {
      return {
        success: false,
        errors: error.errors.reduce((acc, curr) => {
          acc[curr.path[0] as string] = curr.message
          return acc
        }, {} as Record<string, string>)
      }
    }
    return { success: false, error: 'Validation failed' }
  }
}

// Form Submission Helpers
export const submitForm = async (endpoint: string, data: FormData | any, options: {
  timeout?: number
  retries?: number
  retryDelay?: number
} = {}): Promise<FormSubmissionResponse> => {
  const {
    timeout = 30000, // 30 seconds default timeout
    retries = 3,
    retryDelay = 1000
  } = options

  let lastError: Error | null = null

  for (let attempt = 1; attempt <= retries + 1; attempt++) {
    // Create AbortController for timeout
    const controller = new AbortController()
    const timeoutId = setTimeout(() => controller.abort(), timeout)

    try {
      const response = await fetch(endpoint, {
        method: 'POST',
        body: data instanceof FormData ? data : JSON.stringify(data),
        headers: {
          'Content-Type': data instanceof FormData ? 'multipart/form-data' : 'application/json',
        },
        signal: controller.signal
      })

      clearTimeout(timeoutId)

      if (!response.ok) {
        // If it's a client error (4xx), don't retry
        if (response.status >= 400 && response.status < 500) {
          return {
            success: false,
            message: 'Please check your form entries and try again.',
            error: `Client error: ${response.status}`
          }
        }
        throw new Error(`HTTP error! status: ${response.status}`)
      }

      const result = await response.json()
      return {
        success: true,
        message: result.message || 'Form submitted successfully',
        data: result.data
      }
    } catch (error) {
      clearTimeout(timeoutId)
      lastError = error instanceof Error ? error : new Error('Unknown error')
      
      // If it's the last attempt or an abort, don't retry
      if (attempt === retries + 1 || lastError.name === 'AbortError') {
        break
      }
      
      // Wait before retry with exponential backoff
      const delay = retryDelay * Math.pow(2, attempt - 1)
      await new Promise(resolve => setTimeout(resolve, delay))
    }
  }

  // All retries failed
  return {
    success: false,
    message: 'Failed to submit form after multiple attempts. Please check your connection and try again.',
    error: lastError?.name === 'AbortError' 
      ? 'Request timeout. Please check your connection.' 
      : lastError?.message || 'Unknown error'
  }
}

// Error Message Helpers
export const getErrorMessage = (field: string, errors: Record<string, string>): string => {
  return errors[field] || ''
}

export const hasError = (field: string, errors: Record<string, string>): boolean => {
  return !!errors[field]
}