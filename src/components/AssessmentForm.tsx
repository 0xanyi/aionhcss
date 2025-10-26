import React, { useState } from 'react'
import { useForm, SubmitHandler } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { assessmentFormSchema, type AssessmentFormData, submitForm } from '../utils/formUtils'
import FormField from './FormField'

interface AssessmentFormProps {
  className?: string
  onSuccess?: (response: any) => void
  onError?: (error: string) => void
}

const AssessmentForm: React.FC<AssessmentFormProps> = ({ 
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
  } = useForm<AssessmentFormData>({
    resolver: zodResolver(assessmentFormSchema),
    mode: 'onChange'
  })

  const selectedCareTypes = watch('careType') || []

  const onSubmit: SubmitHandler<AssessmentFormData> = async (data) => {
    setIsSubmitting(true)
    setSubmitMessage(null)
    
    try {
      const response = await submitForm('/api/assessment', data)
      
      if (response.success) {
        setSubmitMessage('Thank you for your assessment request! Our care team will contact you within 24 hours.')
        reset()
        onSuccess?.(response)
      } else {
        setSubmitMessage('There was an error submitting your assessment. Please try again.')
        onError?.(response.error || 'Submission failed')
      }
    } catch (error) {
      setSubmitMessage('There was an error submitting your assessment. Please try again.')
      onError?.('Network error')
    } finally {
      setIsSubmitting(false)
    }
  }

  const careTypeOptions = [
    { value: 'personal-care', label: 'Personal Care' },
    { value: 'live-in-care', label: 'Live-in Care' },
    { value: 'supported-living', label: 'Supported Living' },
    { value: 'meal-planning', label: 'Meal Planning & Food Preparation' },
    { value: 'household-tasks', label: 'Household Tasks & Cleaning' },
    { value: 'respite-care', label: 'Respite Care' },
    { value: 'medication-management', label: 'Medication Management' },
    { value: 'companionship', label: 'Companionship Services' },
    { value: 'pet-care', label: 'Pet Care Assistance' },
    { value: 'transport', label: 'Transport Services' }
  ]

  const urgencyOptions = [
    { value: 'emergency', label: 'Emergency (within 24 hours)' },
    { value: 'urgent', label: 'Urgent (within a week)' },
    { value: 'soon', label: 'Soon (within a month)' },
    { value: 'planning', label: 'Planning ahead' }
  ]

  const budgetOptions = [
    { value: 'under-1000', label: 'Under £1,000 per month' },
    { value: '1000-2000', label: '£1,000 - £2,000 per month' },
    { value: '2000-3000', label: '£2,000 - £3,000 per month' },
    { value: 'over-3000', label: 'Over £3,000 per month' },
    { value: 'not-sure', label: 'Not sure / Need guidance' }
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
          name="fullName"
          type="text"
          placeholder="Enter your full name"
          required
          error={errors.fullName?.message}
          touched={!!errors.fullName}
          onChange={register('fullName').onChange}
          onBlur={register('fullName').onBlur}
          ref={register('fullName').ref}
        />
        
        <FormField
          label="Age"
          name="age"
          type="number"
          placeholder="Enter your age"
          required
          error={errors.age?.message}
          touched={!!errors.age}
          onChange={register('age', { valueAsNumber: true }).onChange}
          onBlur={register('age', { valueAsNumber: true }).onBlur}
          ref={register('age', { valueAsNumber: true }).ref}
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
      </div>

      <FormField
        label="Care Types Needed"
        name="careType"
        type="checkbox"
        required
        error={errors.careType?.message}
        touched={!!errors.careType}
        onChange={register('careType').onChange}
        onBlur={register('careType').onBlur}
        ref={register('careType').ref}
      >
        <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
          {careTypeOptions.map((option) => (
            <label key={option.value} className="flex items-center">
              <input
                type="checkbox"
                value={option.value}
                checked={selectedCareTypes.includes(option.value)}
                onChange={(e) => {
                  const currentValues = selectedCareTypes || []
                  if (e.target.checked) {
                    register('careType').onChange({
                      target: { value: [...currentValues, option.value] }
                    })
                  } else {
                    register('careType').onChange({
                      target: { value: currentValues.filter(v => v !== option.value) }
                    })
                  }
                }}
                className="w-4 h-4 text-aion-coral border-aion-border-light rounded focus:ring-aion-coral focus:ring-2"
              />
              <span className="ml-2 text-aion-text-dark">{option.label}</span>
            </label>
          ))}
        </div>
      </FormField>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <FormField
          label="Urgency Level"
          name="urgency"
          type="select"
          placeholder="Select urgency"
          options={urgencyOptions}
          error={errors.urgency?.message}
          touched={!!errors.urgency}
          onChange={register('urgency').onChange}
          onBlur={register('urgency').onBlur}
          ref={register('urgency').ref}
        />
        
        <FormField
          label="Budget Range"
          name="budget"
          type="select"
          placeholder="Select budget"
          options={budgetOptions}
          error={errors.budget?.message}
          touched={!!errors.budget}
          onChange={register('budget').onChange}
          onBlur={register('budget').onBlur}
          ref={register('budget').ref}
        />
      </div>

      <FormField
        label="Health Conditions (Optional)"
        name="healthConditions"
        type="textarea"
        placeholder="Please describe any health conditions, medications, or special needs..."
        rows={4}
        error={errors.healthConditions?.message}
        touched={!!errors.healthConditions}
        onChange={register('healthConditions').onChange}
        onBlur={register('healthConditions').onBlur}
        ref={register('healthConditions').ref}
      />

      <FormField
        label="Current Support (Optional)"
        name="currentSupport"
        type="textarea"
        placeholder="Please describe any current care support or services you're receiving..."
        rows={4}
        error={errors.currentSupport?.message}
        touched={!!errors.currentSupport}
        onChange={register('currentSupport').onChange}
        onBlur={register('currentSupport').onBlur}
        ref={register('currentSupport').ref}
      />

      <FormField
        label="Additional Information (Optional)"
        name="message"
        type="textarea"
        placeholder="Any other information you'd like us to know about your care needs..."
        rows={4}
        error={errors.message?.message}
        touched={!!errors.message}
        onChange={register('message').onChange}
        onBlur={register('message').onBlur}
        ref={register('message').ref}
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
              Submitting...
            </span>
          ) : (
            'Submit Assessment'
          )}
        </button>
      </div>

      <div className="text-center text-sm text-aion-text-light">
        <p>This assessment helps us understand your care needs and provide appropriate recommendations.</p>
        <p>Fields marked with * are required.</p>
      </div>
    </form>
  )
}

export default AssessmentForm