import { json } from '@tanstack/start/api'
import { contactFormSchema, applicationFormSchema, assessmentFormSchema } from '../utils/formUtils'

// Mock email service function
const sendEmail = async (_to: string, _subject: string, _html: string): Promise<boolean> => {
  // In a real implementation, this would integrate with an email service like SendGrid, Mailgun, etc.
  // Email processing would happen here in production
  
  // Simulate async email sending
  await new Promise(resolve => setTimeout(resolve, 1000))
  
  return Math.random() > 0.1 // 90% success rate for demo
}

// Contact form submission handler
export const contactFormHandler = json(async (request) => {
  try {
    const formData = await request.json()
    
    // Validate form data
    const validatedData = contactFormSchema.parse(formData)
    
    // Generate email content
    const emailContent = `
      <h2>New Contact Form Submission</h2>
      <div style="margin: 20px 0;">
        <h3>Client Information</h3>
        <p><strong>Name:</strong> ${validatedData.name}</p>
        <p><strong>Email:</strong> ${validatedData.email}</p>
        <p><strong>Phone:</strong> ${validatedData.phone}</p>
        ${validatedData.service ? `<p><strong>Service Interest:</strong> ${validatedData.service}</p>` : ''}
        ${validatedData.urgency ? `<p><strong>Urgency:</strong> ${validatedData.urgency}</p>` : ''}
        ${validatedData.contactMethod ? `<p><strong>Preferred Contact Method:</strong> ${validatedData.contactMethod}</p>` : ''}
        ${validatedData.bestTime ? `<p><strong>Best Time to Contact:</strong> ${validatedData.bestTime}</p>` : ''}
      </div>
      <div style="margin: 20px 0;">
        <h3>Message</h3>
        <p style="white-space: pre-wrap;">${validatedData.message}</p>
      </div>
      <div style="margin-top: 30px; padding-top: 20px; border-top: 1px solid #e5e7eb;">
        <p><em>This message was sent through the Aion Health Care website contact form.</em></p>
      </div>
    `
    
    // Send email to admin
    const emailSent = await sendEmail('info@aionhcss.com', 'New Contact Form Submission', emailContent)
    
    if (emailSent) {
      return {
        success: true,
        message: 'Thank you for your message! We will get back to you soon.',
        data: {
          submissionId: `contact-${Date.now()}`,
          timestamp: new Date().toISOString()
        }
      }
    } else {
      throw new Error('Failed to send email notification')
    }
  } catch (error) {
    // Contact form submission error handled
    
    if (error instanceof Error && error.name === 'ZodError') {
      return {
        success: false,
        message: 'Please check your form entries and try again.',
        errors: error.errors
      }
    }
    
    return {
      success: false,
      message: 'There was an error submitting your form. Please try again.',
      error: error instanceof Error ? error.message : 'Unknown error'
    }
  }
})

// Application form submission handler
export const applicationFormHandler = json(async (request) => {
  try {
    const formData = await request.json()
    
    // Validate form data
    const validatedData = applicationFormSchema.parse(formData)
    
    // Generate email content
    const emailContent = `
      <h2>New Job Application</h2>
      <div style="margin: 20px 0;">
        <h3>Applicant Information</h3>
        <p><strong>Name:</strong> ${validatedData.firstName} ${validatedData.lastName}</p>
        <p><strong>Email:</strong> ${validatedData.email}</p>
        <p><strong>Phone:</strong> ${validatedData.phone}</p>
        <p><strong>Position:</strong> ${validatedData.position}</p>
        <p><strong>Experience:</strong> ${validatedData.experience} years</p>
        <p><strong>Availability:</strong> ${validatedData.availability}</p>
      </div>
      <div style="margin: 20px 0;">
        <h3>Qualifications</h3>
        <p style="white-space: pre-wrap;">${validatedData.qualifications}</p>
      </div>
      ${validatedData.coverLetter ? `
        <div style="margin: 20px 0;">
          <h3>Cover Letter</h3>
          <p style="white-space: pre-wrap;">${validatedData.coverLetter}</p>
        </div>
      ` : ''}
      <div style="margin-top: 30px; padding-top: 20px; border-top: 1px solid #e5e7eb;">
        <p><em>This application was submitted through the Aion Health Care website.</em></p>
      </div>
    `
    
    // Send email to HR
    const emailSent = await sendEmail('hr@aionhcss.com', `Job Application - ${validatedData.position}`, emailContent)
    
    if (emailSent) {
      return {
        success: true,
        message: 'Thank you for your application! We will review it and get back to you soon.',
        data: {
          submissionId: `application-${Date.now()}`,
          timestamp: new Date().toISOString()
        }
      }
    } else {
      throw new Error('Failed to send email notification')
    }
  } catch (error) {
    // Application form submission error handled
    
    if (error instanceof Error && error.name === 'ZodError') {
      return {
        success: false,
        message: 'Please check your form entries and try again.',
        errors: error.errors
      }
    }
    
    return {
      success: false,
      message: 'There was an error submitting your application. Please try again.',
      error: error instanceof Error ? error.message : 'Unknown error'
    }
  }
})

// Assessment form submission handler
export const assessmentFormHandler = json(async (request) => {
  try {
    const formData = await request.json()
    
    // Validate form data
    const validatedData = assessmentFormSchema.parse(formData)
    
    // Generate email content
    const emailContent = `
      <h2>New Care Assessment Request</h2>
      <div style="margin: 20px 0;">
        <h3>Client Information</h3>
        <p><strong>Name:</strong> ${validatedData.fullName}</p>
        <p><strong>Age:</strong> ${validatedData.age}</p>
        <p><strong>Email:</strong> ${validatedData.email}</p>
        <p><strong>Phone:</strong> ${validatedData.phone}</p>
        <p><strong>Care Types:</strong> ${validatedData.careType.join(', ')}</p>
        <p><strong>Urgency:</strong> ${validatedData.urgency}</p>
        <p><strong>Budget:</strong> ${validatedData.budget}</p>
      </div>
      ${validatedData.healthConditions ? `
        <div style="margin: 20px 0;">
          <h3>Health Conditions</h3>
          <p style="white-space: pre-wrap;">${validatedData.healthConditions}</p>
        </div>
      ` : ''}
      ${validatedData.currentSupport ? `
        <div style="margin: 20px 0;">
          <h3>Current Support</h3>
          <p style="white-space: pre-wrap;">${validatedData.currentSupport}</p>
        </div>
      ` : ''}
      ${validatedData.message ? `
        <div style="margin: 20px 0;">
          <h3>Additional Information</h3>
          <p style="white-space: pre-wrap;">${validatedData.message}</p>
        </div>
      ` : ''}
      <div style="margin-top: 30px; padding-top: 20px; border-top: 1px solid #e5e7eb;">
        <p><em>This assessment request was submitted through the Aion Health Care website.</em></p>
      </div>
    `
    
    // Send email to care coordination
    const emailSent = await sendEmail('care@aionhcss.com', 'New Care Assessment Request', emailContent)
    
    if (emailSent) {
      return {
        success: true,
        message: 'Thank you for your assessment request! Our care team will contact you within 24 hours.',
        data: {
          submissionId: `assessment-${Date.now()}`,
          timestamp: new Date().toISOString()
        }
      }
    } else {
      throw new Error('Failed to send email notification')
    }
  } catch (error) {
    // Assessment form submission error handled
    
    if (error instanceof Error && error.name === 'ZodError') {
      return {
        success: false,
        message: 'Please check your form entries and try again.',
        errors: error.errors
      }
    }
    
    return {
      success: false,
      message: 'There was an error submitting your assessment. Please try again.',
      error: error instanceof Error ? error.message : 'Unknown error'
    }
  }
})

// Export all handlers for use in route files
export const formHandlers = {
  contact: contactFormHandler,
  application: applicationFormHandler,
  assessment: assessmentFormHandler
}