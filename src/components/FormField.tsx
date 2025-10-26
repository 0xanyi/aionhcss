import React from 'react'

// Custom error type for form fields
interface FormFieldError {
  message?: string
  type?: string
}

interface FormFieldProps {
  label: string
  name: string
  type?: string
  placeholder?: string
  required?: boolean
  disabled?: boolean
  value?: string | number | boolean
  onChange?: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => void
  onBlur?: (e: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => void
  ref?: React.Ref<any>
  error?: FormFieldError | string
  touched?: boolean
  children?: React.ReactNode
  className?: string
  rows?: number
  options?: Array<{ value: string; label: string }>
  helpText?: string
  accept?: string
  multiple?: boolean
}

const FormField: React.FC<FormFieldProps> = React.memo(({
  label,
  name,
  type = 'text',
  placeholder,
  required = false,
  disabled = false,
  value,
  onChange,
  onBlur,
  error,
  touched,
  children,
  className = '',
  rows = 4,
  options,
  helpText,
  accept,
  multiple,
  ref
}) => {
  const hasError = touched && error
  const inputId = `field-${name}`

  const baseInputClasses = `
    w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-aion-coral focus:border-aion-coral 
    transition-all duration-200 ease-in-out text-aion-navy placeholder-aion-text-light
    bg-white border-aion-border-light hover:border-aion-accent-blue
    ${hasError ? 'border-aion-coral focus:ring-aion-coral focus:border-aion-coral' : ''}
    ${disabled ? 'bg-aion-background-light cursor-not-allowed opacity-50' : ''}
  `

  const renderInput = () => {
    switch (type) {
      case 'textarea':
        return (
          <textarea
            id={inputId}
            name={name}
            rows={rows}
            value={value as string}
            onChange={onChange}
            onBlur={onBlur}
            ref={ref}
            placeholder={placeholder}
            required={required}
            disabled={disabled}
            className={`${baseInputClasses} resize-vertical`}
          />
        )
      
      case 'select':
        return (
          <select
            id={inputId}
            name={name}
            value={value as string}
            onChange={onChange}
            onBlur={onBlur}
            ref={ref}
            required={required}
            disabled={disabled}
            className={`${baseInputClasses} cursor-pointer`}
          >
            <option value="">{placeholder || 'Please select...'}</option>
            {options?.map((option) => (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            ))}
          </select>
        )
      
      case 'checkbox':
        return (
          <div className="flex items-center">
            <input
              id={inputId}
              name={name}
              type="checkbox"
              checked={typeof value === 'boolean' ? value : value === 'true' || value === '1'}
              onChange={onChange}
              onBlur={onBlur}
              ref={ref}
              required={required}
              disabled={disabled}
              className="w-4 h-4 text-aion-coral border-aion-border-light rounded focus:ring-aion-coral focus:ring-2"
            />
            <label htmlFor={inputId} className="ml-2 text-aion-text-dark">
              {children}
            </label>
          </div>
        )
      
      case 'radio':
        return (
          <div className="space-y-2">
            {options?.map((option) => (
              <div key={option.value} className="flex items-center">
                <input
                  id={`${inputId}-${option.value}`}
                  name={name}
                  type="radio"
                  value={option.value}
                  checked={value === option.value}
                  onChange={onChange}
                  onBlur={onBlur}
                  ref={ref}
                  required={required}
                  disabled={disabled}
                  className="w-4 h-4 text-aion-coral border-aion-border-light focus:ring-aion-coral"
                />
                <label htmlFor={`${inputId}-${option.value}`} className="ml-2 text-aion-text-dark">
                  {option.label}
                </label>
              </div>
            ))}
          </div>
        )
      
      default:
        return (
          <input
            id={inputId}
            name={name}
            type={type}
            value={value as string}
            onChange={onChange}
            onBlur={onBlur}
            ref={ref}
            placeholder={placeholder}
            required={required}
            disabled={disabled}
            accept={accept}
            multiple={multiple}
            className={baseInputClasses}
          />
        )
    }
  }

  return (
    <div className={`mb-6 ${className}`}>
      {(type !== 'checkbox' && type !== 'radio') && (
        <label htmlFor={inputId} className="block text-sm font-medium text-aion-text-dark mb-2">
          {label} {required && <span className="text-aion-coral">*</span>}
        </label>
      )}
      
      {renderInput()}
      
      {helpText && (
        <p className="mt-1 text-sm text-aion-text-light">{helpText}</p>
      )}
      
      {hasError && (
        <p className="mt-1 text-sm text-aion-coral">
          {typeof error === 'string' ? error : error?.message}
        </p>
      )}
    </div>
  )
})

export default FormField