import React, { useState } from 'react'
import { useForm, SubmitHandler } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { contactFormSchema, type ContactFormData, submitForm } from '../utils/formUtils'
import FormField from './FormField'

interface ContactFormProps {
  className?: string
  onSuccess?: (response: any) => void
  onError?: (error: string) => void
}

const ContactForm: React.FC<ContactFormProps> = ({ 
  className = '', 
  onSuccess, 
  onError 
}) => {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitMessage, setSubmitMessage] = useState<string | null>(null)

  const {
    register,
    handleSubmit,
    formState: { errors, isDirty, isValid },
    reset,
    watch
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactFormSchema),
    mode: 'onChange'
  })

  const selectedService = watch('service')

  const onSubmit: SubmitHandler<ContactFormData> = async (data) => {
    setIsSubmitting(true)
    setSubmitMessage(null)
    
    try {
      const response = await submitForm('/api/contact', data)
      
      if (response.success) {
        setSubmitMessage('Thank you for your message! We will get back to you soon.')
        reset()
        onSuccess?.(response)
      } else {
        setSubmitMessage('There was an error submitting your form. Please try again.')
        onError?.(response.error || 'Submission failed')
      }
    } catch (error) {
      setSubmitMessage('There was an error submitting your form. Please try again.')
      onError?.('Network error')
    } finally {
      setIsSubmitting(false)
    }
  }

  const serviceOptions = [
    { value: 'personal-care', label: 'Personal Care' },
    { value: 'live-in-care', label: 'Live-in Care' },
    { value: 'supported-living', label: 'Supported Living' },
    { value: 'meal-planning', label: 'Meal Planning & Food Preparation' },
    { value: 'household-tasks', label: 'Household Tasks & Cleaning' },
    { value: 'respite-care', label: 'Respite Care' },
    { value: 'medication-management', label: 'Medication Management' },
    { value: 'companionship', label: 'Companionship Services' },
    { value: 'pet-care', label: 'Pet Care Assistance' },
    { value: 'transport', label: 'Transport Services' },
    { value: 'other', label: 'Other Services' }
  ]

  const urgencyOptions = [
    { value: 'emergency', label: 'Emergency (within 24 hours)' },
    { value: 'urgent', label: 'Urgent (within a week)' },
    { value: 'soon', label: 'Soon (within a month)' },
    { value: 'planning', label: 'Planning ahead' }
  ]

  const contactMethodOptions = [
    { value: 'phone', label: 'Phone Call' },
    { value: 'email', label: 'Email' },
    { value: 'text', label: 'Text Message' }
  ]

  const bestTimeOptions = [
    { value: 'morning', label: 'Morning (9am - 12pm)' },
    { value: 'afternoon', label: 'Afternoon (12pm - 5pm)' },
    { value: 'evening', label: 'Evening (5pm - 8pm)' }
  ]

  return (
    <form 
      onSubmit={handleSubmit(onSubmit)} 
      className={`space-y-6 ${className}`}
      noValidate
    >
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <FormField
          label="Full Name"
          name="name"
          type="text"
          placeholder="Enter your full name"
          required
          error={errors.name?.message}
          touched={!!errors.name}
          {...register('name')}
        />
        
        <FormField
          label="Email Address"
          name="email"
          type="email"
          placeholder="Enter your email address"
          required
          error={errors.email?.message}
          touched={!!errors.email}
          {...register('email')}
        />
        
        <FormField
          label="Phone Number"
          name="phone"
          type="tel"
          placeholder="Enter your phone number"
          required
          error={errors.phone?.message}
          touched={!!errors.phone}
          {...register('phone')}
        />
        
        <FormField
          label="Service Interest"
          name="service"
          type="select"
          placeholder="Select a service"
          options={serviceOptions}
          error={errors.service?.message}
          touched={!!errors.service}
          {...register('service')}
        />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <FormField
          label="Urgency Level"
          name="urgency"
          type="select"
          placeholder="Select urgency"
          options={urgencyOptions}
          error={errors.urgency?.message}
          touched={!!errors.urgency}
          {...register('urgency')}
        />
        
        <FormField
          label="Preferred Contact Method"
          name="contactMethod"
          type="select"
          placeholder="Select method"
          options={contactMethodOptions}
          error={errors.contactMethod?.message}
          touched={!!errors.contactMethod}
          {...register('contactMethod')}
        />
        
        <FormField
          label="Best Time to Contact"
          name="bestTime"
          type="select"
          placeholder="Select time"
          options={bestTimeOptions}
          error={errors.bestTime?.message}
          touched={!!errors.bestTime}
          {...register('bestTime')}
        />
      </div>

      <FormField
        label="Message"
        name="message"
        type="textarea"
        placeholder="Please tell us about your care needs, questions, or any other information you'd like to share..."
        required
        rows={6}
        error={errors.message?.message}
        touched={!!errors.message}
        {...register('message')}
      />

      {submitMessage && (
        <div className={`p-4 rounded-lg ${
          submitMessage.includes('Thank you') 
            ? 'bg-green-50 border border-green-200 text-green-700' 
            : 'bg-red-50 border border-red-200 text-red-700'
        }`}>
          {submitMessage}
        </div>
      )}

      <div className="flex justify-center">
        <button
          type="submit"
          disabled={!isDirty || !isValid || isSubmitting}
          className={`px-8 py-3 rounded-lg font-medium transition-all duration-200 ease-in-out
            ${!isDirty || !isValid || isSubmitting
              ? 'bg-aion-border-light text-aion-text-light cursor-not-allowed'
              : 'bg-aion-coral hover:bg-aion-accent-blue text-white hover:shadow-lg'
            }
            ${isSubmitting ? 'opacity-75' : ''}
          `}
        >
          {isSubmitting ? (
            <span className="flex items-center">
              <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
              </svg>
              Sending...
            </span>
          ) : (
            'Send Message'
          )}
        </button>
      </div>

      <div className="text-center text-sm text-aion-text-light">
        <p>We respect your privacy and will never share your information with third parties.</p>
        <p>Fields marked with * are required.</p>
      </div>
    </form>
  )
}

export default ContactForm