/**
 * Healthcare Compliance and Privacy Management
 * Implements GDPR-compliant consent management and audit logging for healthcare data
 */

import { User } from './auth'

// Healthcare data classification
export enum HealthcareDataType {
  PERSONAL_INFO = 'personal_information',
  HEALTH_CONDITIONS = 'health_conditions',
  CONTACT_DETAILS = 'contact_details',
  ASSESSMENT_DATA = 'assessment_data',
  CARE_PREFERENCES = 'care_preferences',
  EMERGENCY_CONTACT = 'emergency_contact'
}

// Consent purposes for different types of data processing
export enum ConsentPurpose {
  CONTACT_COMMUNICATION = 'contact_communication',
  CARE_ASSESSMENT = 'care_assessment',
  CARE_DELIVERY = 'care_delivery',
  MARKETING_COMMUNICATION = 'marketing_communication',
  DATA_ANALYTICS = 'data_analytics',
  THIRD_PARTY_SHARING = 'third_party_sharing'
}

// Consent status tracking
export interface ConsentRecord {
  id: string
  userId: string
  dataType: HealthcareDataType
  purpose: ConsentPurpose
  consentGiven: boolean
  consentTimestamp: Date
  withdrawalTimestamp?: Date
  version: string // Consent form version
  ipAddress: string
  userAgent: string
}

// Audit log entry for healthcare data access
export interface HealthcareAuditLog {
  id: string
  timestamp: Date
  userId: string
  userRole: User['role']
  action: 'access' | 'modify' | 'delete' | 'create' | 'export'
  resourceType: HealthcareDataType
  resourceId?: string
  dataClassification: 'public' | 'internal' | 'confidential' | 'restricted'
  purpose: string
  success: boolean
  ipAddress: string
  userAgent: string
  retentionPeriod: number // days
  legalBasis: 'consent' | 'legitimate_interest' | 'vital_interests' | 'public_task'
  additionalInfo?: Record<string, any>
}

// Consent form configuration
export interface ConsentFormConfig {
  version: string
  effectiveDate: Date
  dataTypes: Array<{
    type: HealthcareDataType
    description: string
    purposes: ConsentPurpose[]
    mandatory: boolean
    retentionPeriod: number // days
  }>
  thirdParties: Array<{
    name: string
    purpose: string
    dataTypes: HealthcareDataType[]
  }>
  userRights: string[]
  contactInfo: {
    dpo: string
    email: string
    phone: string
  }
}

// In-memory storage (in production, use secure database)
const consentRecords = new Map<string, ConsentRecord[]>()
const auditLogs: HealthcareAuditLog[] = []
const dataRetentionRules = new Map<HealthcareDataType, number>()

// Default data retention periods (GDPR compliance)
dataRetentionRules.set(HealthcareDataType.PERSONAL_INFO, 2555) // 7 years
dataRetentionRules.set(HealthcareDataType.HEALTH_CONDITIONS, 2555) // 7 years
dataRetentionRules.set(HealthcareDataType.CONTACT_DETAILS, 1825) // 5 years
dataRetentionRules.set(HealthcareDataType.ASSESSMENT_DATA, 2555) // 7 years
dataRetentionRules.set(HealthcareDataType.CARE_PREFERENCES, 1825) // 5 years
dataRetentionRules.set(HealthcareDataType.EMERGENCY_CONTACT, 1825) // 5 years

/**
 * Record user consent for specific data types and purposes
 */
export function recordConsent(
  userId: string,
  consents: Array<{
    dataType: HealthcareDataType
    purpose: ConsentPurpose
    consentGiven: boolean
  }>,
  ipAddress: string,
  userAgent: string,
  version: string = '1.0'
): string {
  const records: ConsentRecord[] = []
  
  consents.forEach(({ dataType, purpose, consentGiven }) => {
    const record: ConsentRecord = {
      id: `consent_${Date.now()}_${Math.random().toString(36).substring(2)}`,
      userId,
      dataType,
      purpose,
      consentGiven,
      consentTimestamp: new Date(),
      version,
      ipAddress,
      userAgent
    }
    
    records.push(record)
  })
  
  // Store consent records
  const existingRecords = consentRecords.get(userId) || []
  consentRecords.set(userId, [...existingRecords, ...records])
  
  // Log consent action
  logHealthcareAudit({
    userId,
    userRole: 'patient', // Default for consent actions
    action: 'create',
    resourceType: consents[0]?.dataType || HealthcareDataType.PERSONAL_INFO,
    dataClassification: 'confidential',
    purpose: 'consent_management',
    success: true,
    ipAddress,
    userAgent,
    retentionPeriod: dataRetentionRules.get(HealthcareDataType.PERSONAL_INFO) || 1825,
    legalBasis: 'consent',
    additionalInfo: { consentType: 'initial', recordsCount: records.length }
  })
  
  return records[0]?.id || ''
}

/**
 * Get current consent status for a user
 */
export function getUserConsent(userId: string): ConsentRecord[] {
  return consentRecords.get(userId) || []
}

/**
 * Check if user has given consent for specific data type and purpose
 */
export function hasConsent(
  userId: string,
  dataType: HealthcareDataType,
  purpose: ConsentPurpose
): boolean {
  const userConsents = getUserConsent(userId)
  
  const relevantConsent = userConsents.find(
    record => 
      record.dataType === dataType && 
      record.purpose === purpose && 
      record.consentGiven &&
      !record.withdrawalTimestamp
  )
  
  return !!relevantConsent
}

/**
 * Withdraw consent for specific data type and purpose
 */
export function withdrawConsent(
  userId: string,
  dataType: HealthcareDataType,
  purpose: ConsentPurpose,
  ipAddress: string,
  userAgent: string
): boolean {
  const userConsents = getUserConsent(userId)
  
  // Find active consent record
  const consentRecord = userConsents.find(
    record => 
      record.dataType === dataType && 
      record.purpose === purpose && 
      record.consentGiven &&
      !record.withdrawalTimestamp
  )
  
  if (consentRecord) {
    consentRecord.withdrawalTimestamp = new Date()
    
    // Update storage
    consentRecords.set(userId, userConsents)
    
    // Log withdrawal
    logHealthcareAudit({
      userId,
      userRole: 'patient',
      action: 'modify',
      resourceType: dataType,
      dataClassification: 'confidential',
      purpose: 'consent_withdrawal',
      success: true,
      ipAddress,
      userAgent,
      retentionPeriod: dataRetentionRules.get(dataType) || 1825,
      legalBasis: 'consent',
      additionalInfo: { 
        withdrawalType: 'granular',
        originalConsentId: consentRecord.id 
      }
    })
    
    return true
  }
  
  return false
}

/**
 * Log healthcare data access for audit trail
 */
export function logHealthcareAudit(logEntry: Omit<HealthcareAuditLog, 'id' | 'timestamp'>): string {
  const auditLog: HealthcareAuditLog = {
    ...logEntry,
    id: `audit_${Date.now()}_${Math.random().toString(36).substring(2)}`,
    timestamp: new Date()
  }
  
  auditLogs.push(auditLog)
  
  // In production, send to secure logging service
  console.log('Healthcare Audit Log:', JSON.stringify(auditLog))
  
  return auditLog.id
}

/**
 * Get audit logs for a specific user or resource
 */
export function getAuditLogs(filters: {
  userId?: string
  resourceType?: HealthcareDataType
  action?: HealthcareAuditLog['action']
  startDate?: Date
  endDate?: Date
}): HealthcareAuditLog[] {
  let filteredLogs = [...auditLogs]
  
  if (filters.userId) {
    filteredLogs = filteredLogs.filter(log => log.userId === filters.userId)
  }
  
  if (filters.resourceType) {
    filteredLogs = filteredLogs.filter(log => log.resourceType === filters.resourceType)
  }
  
  if (filters.action) {
    filteredLogs = filteredLogs.filter(log => log.action === filters.action)
  }
  
  if (filters.startDate) {
    filteredLogs = filteredLogs.filter(log => log.timestamp >= filters.startDate!)
  }
  
  if (filters.endDate) {
    filteredLogs = filteredLogs.filter(log => log.timestamp <= filters.endDate!)
  }
  
  return filteredLogs.sort((a, b) => b.timestamp.getTime() - a.timestamp.getTime())
}

/**
 * Check if data retention period has expired
 */
export function isDataRetentionExpired(
  dataType: HealthcareDataType,
  createdAt: Date
): boolean {
  const retentionPeriod = dataRetentionRules.get(dataType) || 1825 // Default 5 years
  const expiryDate = new Date(createdAt.getTime() + (retentionPeriod * 24 * 60 * 60 * 1000))
  
  return new Date() > expiryDate
}

/**
 * Generate data retention report
 */
export function generateRetentionReport(): {
  dataType: HealthcareDataType
  totalRecords: number
  expiredRecords: number
  retentionPeriod: number
}[] {
  const report: Record<HealthcareDataType, {
    totalRecords: number
    expiredRecords: number
    createdAt: Date[]
  }> = {
    [HealthcareDataType.PERSONAL_INFO]: { totalRecords: 0, expiredRecords: 0, createdAt: [] },
    [HealthcareDataType.HEALTH_CONDITIONS]: { totalRecords: 0, expiredRecords: 0, createdAt: [] },
    [HealthcareDataType.CONTACT_DETAILS]: { totalRecords: 0, expiredRecords: 0, createdAt: [] },
    [HealthcareDataType.ASSESSMENT_DATA]: { totalRecords: 0, expiredRecords: 0, createdAt: [] },
    [HealthcareDataType.CARE_PREFERENCES]: { totalRecords: 0, expiredRecords: 0, createdAt: [] },
    [HealthcareDataType.EMERGENCY_CONTACT]: { totalRecords: 0, expiredRecords: 0, createdAt: [] }
  }
  
  // Analyze audit logs to determine record counts (simplified)
  auditLogs.forEach(log => {
    if (log.action === 'create') {
      const dataType = log.resourceType
      if (report[dataType]) {
        report[dataType].totalRecords++
        report[dataType].createdAt.push(log.timestamp)
        
        if (isDataRetentionExpired(dataType, log.timestamp)) {
          report[dataType].expiredRecords++
        }
      }
    }
  })
  
  return Object.entries(report).map(([dataType, stats]) => ({
    dataType: dataType as HealthcareDataType,
    totalRecords: stats.totalRecords,
    expiredRecords: stats.expiredRecords,
    retentionPeriod: dataRetentionRules.get(dataType as HealthcareDataType) || 1825
  }))
}

/**
 * Create default consent form configuration
 */
export const DEFAULT_CONSENT_CONFIG: ConsentFormConfig = {
  version: '1.0',
  effectiveDate: new Date('2024-01-01'),
  dataTypes: [
    {
      type: HealthcareDataType.PERSONAL_INFO,
      description: 'Basic personal information such as name, date of birth, and address',
      purposes: [ConsentPurpose.CARE_DELIVERY, ConsentPurpose.CARE_ASSESSMENT],
      mandatory: true,
      retentionPeriod: 2555
    },
    {
      type: HealthcareDataType.HEALTH_CONDITIONS,
      description: 'Information about health conditions, medications, and care needs',
      purposes: [ConsentPurpose.CARE_DELIVERY, ConsentPurpose.CARE_ASSESSMENT],
      mandatory: true,
      retentionPeriod: 2555
    },
    {
      type: HealthcareDataType.CONTACT_DETAILS,
      description: 'Contact information including phone numbers and email addresses',
      purposes: [ConsentPurpose.CONTACT_COMMUNICATION],
      mandatory: true,
      retentionPeriod: 1825
    },
    {
      type: HealthcareDataType.ASSESSMENT_DATA,
      description: 'Care assessment information and care preferences',
      purposes: [ConsentPurpose.CARE_ASSESSMENT, ConsentPurpose.CARE_DELIVERY],
      mandatory: false,
      retentionPeriod: 2555
    },
    {
      type: HealthcareDataType.CARE_PREFERENCES,
      description: 'Preferences regarding care delivery and communication methods',
      purposes: [ConsentPurpose.CARE_DELIVERY],
      mandatory: false,
      retentionPeriod: 1825
    },
    {
      type: HealthcareDataType.EMERGENCY_CONTACT,
      description: 'Emergency contact information for care coordination',
      purposes: [ConsentPurpose.CARE_DELIVERY],
      mandatory: false,
      retentionPeriod: 1825
    }
  ],
  thirdParties: [
    {
      name: 'Healthcare Providers',
      purpose: 'Coordinated care delivery',
      dataTypes: [
        HealthcareDataType.PERSONAL_INFO,
        HealthcareDataType.HEALTH_CONDITIONS,
        HealthcareDataType.CARE_PREFERENCES
      ]
    },
    {
      name: 'Emergency Services',
      purpose: 'Emergency care coordination',
      dataTypes: [
        HealthcareDataType.PERSONAL_INFO,
        HealthcareDataType.HEALTH_CONDITIONS,
        HealthcareDataType.EMERGENCY_CONTACT
      ]
    }
  ],
  userRights: [
    'Right to access your personal data',
    'Right to rectify inaccurate personal data',
    'Right to erasure (right to be forgotten)',
    'Right to restrict processing',
    'Right to data portability',
    'Right to object to processing',
    'Right to withdraw consent at any time'
  ],
  contactInfo: {
    dpo: 'Data Protection Officer',
    email: 'privacy@aionhealthcare.co.uk',
    phone: '0800 123 4567'
  }
}

/**
 * Validate consent form submission
 */
export function validateConsentSubmission(data: {
  userId: string
  consents: Record<HealthcareDataType, Record<ConsentPurpose, boolean>>
  ipAddress: string
  userAgent: string
}): { valid: boolean; errors: string[] } {
  const errors: string[] = []
  
  // Check mandatory consents
  DEFAULT_CONSENT_CONFIG.dataTypes
    .filter(config => config.mandatory)
    .forEach(config => {
      const hasMandatoryConsent = config.purposes.some(
        purpose => data.consents[config.type]?.[purpose]
      )
      
      if (!hasMandatoryConsent) {
        errors.push(`Consent required for ${config.description}`)
      }
    })
  
  // Validate IP address format (basic)
  if (!/^(\d{1,3}\.){3}\d{1,3}$|^[a-fA-F0-9:]+$/.test(data.ipAddress)) {
    errors.push('Invalid IP address format')
  }
  
  return {
    valid: errors.length === 0,
    errors
  }
}
