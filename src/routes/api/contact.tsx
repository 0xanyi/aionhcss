import { createFileRoute } from '@tanstack/react-router'
import { json } from '@tanstack/react-start'
import { contactFormSchema } from '../../utils/formUtils'

// Mock email service function
const sendEmail = async (_to: string, _subject: string, _html: string): Promise<boolean> => {
  // In a real implementation, this would integrate with an email service like SendGrid, Mailgun, etc.
  // Email processing would happen here in production
  
  // Simulate async email sending
  await new Promise(resolve => setTimeout(resolve, 1000))
  
  return Math.random() > 0.1 // 90% success rate for demo
}

export const Route = createFileRoute('/api/contact')({
  server: {
    handlers: {
      POST: async ({ request }) => {
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
            return json({
              success: true,
              message: 'Thank you for your message! We will get back to you soon.',
              data: {
                submissionId: `contact-${Date.now()}`,
                timestamp: new Date().toISOString()
              }
            })
          } else {
            return json({
              success: false,
              message: 'There was an error submitting your form. Please try again.',
              error: 'Failed to send email notification'
            }, { status: 500 })
          }
        } catch (error) {
          // Contact form submission error handled
          
          if (error && typeof error === 'object' && 'errors' in error) {
            return json({
              success: false,
              message: 'Please check your form entries and try again.',
              errors: (error as any).errors
            }, { status: 400 })
          }
          
          return json({
            success: false,
            message: 'There was an error submitting your form. Please try again.',
            error: error instanceof Error ? error.message : 'Unknown error'
          }, { status: 400 })
        }
      }
    }
  }
})