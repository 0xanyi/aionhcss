import { createFileRoute } from '@tanstack/react-router'
import { json } from '@tanstack/react-start'
import { assessmentFormSchema } from '../../utils/formUtils'
import { requireAuth, logAccess } from '../../utils/auth'

// Mock email service function
const sendEmail = async (_to: string, _subject: string, _html: string): Promise<boolean> => {
  // In a real implementation, this would integrate with an email service like SendGrid, Mailgun, etc.
  // Email processing would happen here in production
  
  // Simulate async email sending
  await new Promise(resolve => setTimeout(resolve, 1000))
  
  return Math.random() > 0.1 // 90% success rate for demo
}

export const Route = createFileRoute('/api/assessment')({
  server: {
    handlers: {
      POST: async ({ request }) => {
        // Verify authentication for healthcare data access
        const auth = await requireAuth(['admin', 'staff'])(request)
        if (!auth.user) {
          // Log failed access attempt
          logAccess(
            { id: 'unknown', email: 'unknown', role: 'guest', permissions: [] },
            'assessment_api',
            'access',
            false
          )
          
          return json({
            error: auth.error || 'Authentication required for patient data access',
            success: false
          }, { status: 401 })
        }
        
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
            return json({
              success: true,
              message: 'Thank you for your assessment request! Our care team will contact you within 24 hours.',
              data: {
                submissionId: `assessment-${Date.now()}`,
                timestamp: new Date().toISOString()
              }
            })
          } else {
            return json({
              success: false,
              message: 'There was an error submitting your assessment. Please try again.',
              error: 'Failed to send email notification'
            }, { status: 500 })
          }
        } catch (error) {
          // Assessment form submission error handled
          
          if (error && typeof error === 'object' && 'errors' in error) {
            return json({
              success: false,
              message: 'Please check your form entries and try again.',
              errors: (error as any).errors
            }, { status: 400 })
          }
          
          return json({
            success: false,
            message: 'There was an error submitting your assessment. Please try again.',
            error: error instanceof Error ? error.message : 'Unknown error'
          }, { status: 400 })
        } finally {
          // Log successful access
          if (auth.user) {
            logAccess(auth.user, 'assessment_api', 'process', true)
          }
        }
      }
    }
  }
})
