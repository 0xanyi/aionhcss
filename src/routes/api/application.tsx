import { createFileRoute } from '@tanstack/react-router'
import { json } from '@tanstack/react-start'
import { applicationFormSchema } from '../../utils/formUtils'
import { requireAuth, logAccess } from '../../utils/auth'

// Mock email service function
const sendEmail = async (_to: string, _subject: string, _html: string): Promise<boolean> => {
  // In a real implementation, this would integrate with an email service like SendGrid, Mailgun, etc.
  // Email processing would happen here in production
  
  // Simulate async email sending
  await new Promise(resolve => setTimeout(resolve, 1000))
  
  return Math.random() > 0.1 // 90% success rate for demo
}

export const Route = createFileRoute('/api/application')({
  server: {
    handlers: {
      POST: async ({ request }) => {
        // Verify authentication for job application data
        const auth = await requireAuth(['admin', 'staff'])(request)
        if (!auth.user) {
          // Log failed access attempt
          logAccess(
            { id: 'unknown', email: 'unknown', role: 'guest', permissions: [] },
            'application_api',
            'access',
            false
          )
          
          return json({
            error: auth.error || 'Authentication required for job application data',
            success: false
          }, { status: 401 })
        }
        
        try {
          const formData = await request.formData()
          
          // Extract form data
          const firstName = formData.get('firstName') as string
          const lastName = formData.get('lastName') as string
          const email = formData.get('email') as string
          const phone = formData.get('phone') as string
          const position = formData.get('position') as string
          const experience = parseInt(formData.get('experience') as string)
          const availability = formData.get('availability') as string
          const qualifications = formData.get('qualifications') as string
          const coverLetter = formData.get('coverLetter') as string
          const consent = formData.get('consent') === 'true'
          const cv = formData.get('cv') as File
          
          // Validate form data
          const validatedData = applicationFormSchema.parse({
            firstName,
            lastName,
            email,
            phone,
            position,
            experience,
            availability,
            qualifications,
            coverLetter,
            consent,
            cv
          })
          
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
            return json({
              success: true,
              message: 'Thank you for your application! We will review it and get back to you soon.',
              data: {
                submissionId: `application-${Date.now()}`,
                timestamp: new Date().toISOString()
              }
            })
          } else {
            return json({
              success: false,
              message: 'There was an error submitting your application. Please try again.',
              error: 'Failed to send email notification'
            }, { status: 500 })
          }
        } catch (error) {
          // Application form submission error handled
          
          if (error && typeof error === 'object' && 'errors' in error) {
            return json({
              success: false,
              message: 'Please check your form entries and try again.',
              errors: (error as any).errors
            }, { status: 400 })
          }
          
          return json({
            success: false,
            message: 'There was an error submitting your application. Please try again.',
            error: error instanceof Error ? error.message : 'Unknown error'
          }, { status: 400 })
        } finally {
          // Log successful access
          if (auth.user) {
            logAccess(auth.user, 'application_api', 'process', true)
          }
        }
      }
    }
  }
})