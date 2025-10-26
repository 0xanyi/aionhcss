import React, { useState } from 'react'
import { useForm, SubmitHandler } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { applicationFormSchema, type ApplicationFormData, submitForm } from '../utils/formUtils'
import FormField from './FormField'

interface ApplicationFormProps {
  className?: string
  onSuccess?: (response: any) => void
  onError?: (error: string) => void
}

const ApplicationForm: React.FC<ApplicationFormProps> = ({ 
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
  } = useForm<ApplicationFormData>({
    resolver: zodResolver(applicationFormSchema),
    mode: 'onChange'
  })

  const selectedPosition = watch('position')

  const onSubmit: SubmitHandler<ApplicationFormData> = async (data) => {
    setIsSubmitting(true)
    setSubmitMessage(null)
    
    try {
      // Create FormData for file upload
      const formData = new FormData()
      Object.keys(data).forEach(key => {
        const value = data[key as keyof ApplicationFormData]
        if (value instanceof File) {
          formData.append(key, value)
        } else if (value !== undefined) {
          formData.append(key, value as string)
        }
      })
      
      const response = await submitForm('/api/application', formData)
      
      if (response.success) {
        setSubmitMessage('Thank you for your application! We will review it and get back to you soon.')
        reset()
        onSuccess?.(response)
      } else {
        setSubmitMessage('There was an error submitting your application. Please try again.')
        onError?.(response.error || 'Submission failed')
      }
    } catch (error) {
      setSubmitMessage('There was an error submitting your application. Please try again.')
      onError?.('Network error')
    } finally {
      setIsSubmitting(false)
    }
  }

  const positionOptions = [
    { value: 'care-worker', label: 'Care Worker' },
    { value: 'senior-care-assistant', label: 'Senior Care Assistant' },
    { value: 'care-coordinator', label: 'Care Coordinator' },
    { value: 'admin-support', label: 'Administrative Support' },
    { value: 'manager', label: 'Manager' },
    { value: 'nurse', label: 'Registered Nurse' },
    { value: 'therapist', label: 'Therapist' },
    { value: 'other', label: 'Other Position' }
  ]

  const availabilityOptions = [
    { value: 'full-time', label: 'Full-time (35+ hours/week)' },
    { value: 'part-time', label: 'Part-time (20-34 hours/week)' },
    { value: 'flexible', label: 'Flexible/On-call' }
  ]

  return (
    <form 
      onSubmit={handleSubmit(onSubmit)} 
      className={`space-y-6 ${className}`}
      noValidate
      encType="multipart/form-data"
    >
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <FormField
          label="First Name"
          name="firstName"
          type="text"
          placeholder="Enter your first name"
          required
          error={errors.firstName?.message}
          touched={!!errors.firstName}
          onChange={register('firstName').onChange}
          onBlur={register('firstName').onBlur}
          ref={register('firstName').ref}
        />
        
        <FormField
          label="Last Name"
          name="lastName"
          type="text"
          placeholder="Enter your last name"
          required
          error={errors.lastName?.message}
          touched={!!errors.lastName}
          onChange={register('lastName').onChange}
          onBlur={register('lastName').onBlur}
          ref={register('lastName').ref}
        />
        
        <FormField
          label="Email Address"
          name="email"
          type="email"
          placeholder="Enter your email address"
          required
          error={errors.email?.message}
          touched={!!errors.email}
          onChange={register('email').onChange}
          onBlur={register('email').onBlur}
          ref={register('email').ref}
        />
        
        <FormField
          label="Phone Number"
          name="phone"
          type="tel"
          placeholder="Enter your phone number"
          required
          error={errors.phone?.message}
          touched={!!errors.phone}
          onChange={register('phone').onChange}
          onBlur={register('phone').onBlur}
          ref={register('phone').ref}
        />
        
        <FormField
          label="Position Applying For"
          name="position"
          type="select"
          placeholder="Select position"
          options={positionOptions}
          error={errors.position?.message}
          touched={!!errors.position}
          onChange={register('position').onChange}
          onBlur={register('position').onBlur}
          ref={register('position').ref}
        />
        
        <FormField
          label="Years of Experience"
          name="experience"
          type="number"
          placeholder="0"
          required
          error={errors.experience?.message}
          touched={!!errors.experience}
          onChange={register('experience', { valueAsNumber: true }).onChange}
          onBlur={register('experience', { valueAsNumber: true }).onBlur}
          ref={register('experience', { valueAsNumber: true }).ref}
        />
        
        <FormField
          label="Availability"
          name="availability"
          type="select"
          placeholder="Select availability"
          options={availabilityOptions}
          error={errors.availability?.message}
          touched={!!errors.availability}
          onChange={register('availability').onChange}
          onBlur={register('availability').onBlur}
          ref={register('availability').ref}
        />
        
        <FormField
          label="CV/Resume"
          name="cv"
          type="file"
          required
          accept=".pdf,.doc,.docx"
          error={errors.cv?.message}
          touched={!!errors.cv}
          onChange={register('cv').onChange}
          onBlur={register('cv').onBlur}
          ref={register('cv').ref}
        />
      </div>

      <FormField
        label="Qualifications & Experience"
        name="qualifications"
        type="textarea"
        placeholder="Please describe your qualifications, certifications, and relevant experience..."
        required
        rows={6}
        error={errors.qualifications?.message}
        touched={!!errors.qualifications}
        onChange={register('qualifications').onChange}
        onBlur={register('qualifications').onBlur}
        ref={register('qualifications').ref}
      />

      <FormField
        label="Cover Letter (Optional)"
        name="coverLetter"
        type="textarea"
        placeholder="Please tell us why you're interested in working with Aion Health Care..."
        rows={4}
        error={errors.coverLetter?.message}
        touched={!!errors.coverLetter}
        onChange={register('coverLetter').onChange}
        onBlur={register('coverLetter').onBlur}
        ref={register('coverLetter').ref}
      />

      <FormField
        label="Consent"
        name="consent"
        type="checkbox"
        required
        error={errors.consent?.message}
        touched={!!errors.consent}
        onChange={register('consent').onChange}
        onBlur={register('consent').onBlur}
        ref={register('consent').ref}
      >
        I consent to the processing of my personal data for recruitment purposes. <a href="/privacy" className="text-aion-coral hover:underline">Privacy Policy</a>
      </FormField>

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
              Submitting...
            </span>
          ) : (
            'Submit Application'
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

export default ApplicationForm