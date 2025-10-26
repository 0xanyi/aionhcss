/**
 * Authentication and Authorization Utilities for Healthcare Data Protection
 * Implements secure access controls for patient data handling
 */

// Types for authentication
interface User {
  id: string
  email: string
  role: 'admin' | 'staff' | 'patient'
  permissions: string[]
}

interface AuthToken {
  user: User
  issuedAt: number
  expiresAt: number
}

// Authentication configuration
const AUTH_CONFIG = {
  // Token expiry time (2 hours for healthcare data access)
  TOKEN_EXPIRY: 2 * 60 * 60 * 1000,
  
  // Rate limiting per user per minute (healthcare data protection)
  RATE_LIMIT_PER_MINUTE: 5,
  
  // Block suspicious requests after multiple failures
  MAX_FAILED_ATTEMPTS: 5,
  BLOCK_DURATION: 15 * 60 * 1000 // 15 minutes
}

// In-memory storage for demo purposes
// In production, use secure database storage
const activeTokens = new Map<string, AuthToken>()
const failedAttempts = new Map<string, { count: number; lastAttempt: number }>()
const blockedIPs = new Map<string, number>()

/**
 * Create authentication middleware for API routes
 */
export function createAuthMiddleware(allowedRoles: User['role'][] = ['admin', 'staff']) {
  return async (request: Request): Promise<{ user: User | null; error: string | null }> => {
    try {
      // Get client IP for rate limiting and blocking
      const clientIP = request.headers.get('x-forwarded-for') || 
                      request.headers.get('x-real-ip') || 
                      'unknown'
      
      // Check if IP is blocked
      const blockedUntil = blockedIPs.get(clientIP)
      if (blockedUntil && Date.now() < blockedUntil) {
        return { 
          user: null, 
          error: 'IP temporarily blocked due to too many failed attempts' 
        }
      }
      
      // Check rate limiting
      if (isRateLimited(clientIP)) {
        return { 
          user: null, 
          error: 'Rate limit exceeded. Please try again later.' 
        }
      }
      
      // Get authorization header
      const authHeader = request.headers.get('authorization')
      if (!authHeader || !authHeader.startsWith('Bearer ')) {
        recordFailedAttempt(clientIP)
        return { user: null, error: 'Missing or invalid authorization header' }
      }
      
      const token = authHeader.substring(7)
      const authData = validateToken(token)
      
      if (!authData) {
        recordFailedAttempt(clientIP)
        return { user: null, error: 'Invalid or expired token' }
      }
      
      // Check user role permissions
      if (!allowedRoles.includes(authData.user.role)) {
        return { 
          user: null, 
          error: 'Insufficient permissions for this resource' 
        }
      }
      
      // Clear failed attempts on successful auth
      failedAttempts.delete(clientIP)
      
      return { user: authData.user, error: null }
    } catch (error) {
      return { 
        user: null, 
        error: 'Authentication error occurred' 
      }
    }
  }
}

/**
 * Generate authentication token
 */
export function generateToken(user: User): string {
  const token = `token_${Date.now()}_${Math.random().toString(36).substring(2)}`
  
  const authData: AuthToken = {
    user,
    issuedAt: Date.now(),
    expiresAt: Date.now() + AUTH_CONFIG.TOKEN_EXPIRY
  }
  
  activeTokens.set(token, authData)
  
  // Clean up expired tokens periodically
  setTimeout(() => {
    activeTokens.delete(token)
  }, AUTH_CONFIG.TOKEN_EXPIRY)
  
  return token
}

/**
 * Validate authentication token
 */
export function validateToken(token: string): AuthToken | null {
  const authData = activeTokens.get(token)
  
  if (!authData) {
    return null
  }
  
  // Check if token is expired
  if (Date.now() > authData.expiresAt) {
    activeTokens.delete(token)
    return null
  }
  
  return authData
}

/**
 * Check if IP is rate limited
 */
function isRateLimited(clientIP: string): boolean {
  // In a real implementation, use Redis or similar for distributed rate limiting
  // For demo purposes, this is a simplified check
  const attempts = failedAttempts.get(clientIP)
  
  if (!attempts) {
    return false
  }
  
  // Reset counter if more than a minute has passed
  const now = Date.now()
  if (now - attempts.lastAttempt > 60000) {
    failedAttempts.delete(clientIP)
    return false
  }
  
  return attempts.count >= AUTH_CONFIG.RATE_LIMIT_PER_MINUTE
}

/**
 * Record failed authentication attempt
 */
function recordFailedAttempt(clientIP: string): void {
  const now = Date.now()
  const attempts = failedAttempts.get(clientIP) || { count: 0, lastAttempt: now }
  
  attempts.count += 1
  attempts.lastAttempt = now
  failedAttempts.set(clientIP, attempts)
  
  // Block IP if too many failed attempts
  if (attempts.count >= AUTH_CONFIG.MAX_FAILED_ATTEMPTS) {
    blockedIPs.set(clientIP, now + AUTH_CONFIG.BLOCK_DURATION)
    
    // Clean up failed attempts for blocked IP
    setTimeout(() => {
      failedAttempts.delete(clientIP)
      blockedIPs.delete(clientIP)
    }, AUTH_CONFIG.BLOCK_DURATION)
  }
}

/**
 * Create a demo user for testing
 */
export function createDemoUser(email: string, role: User['role'] = 'staff'): User {
  return {
    id: `user_${Date.now()}`,
    email,
    role,
    permissions: role === 'admin' 
      ? ['read', 'write', 'delete', 'admin']
      : role === 'staff'
      ? ['read', 'write']
      : ['read']
  }
}

/**
 * Log access for audit trail (Healthcare compliance)
 */
export function logAccess(user: User, resource: string, action: string, success: boolean): void {
  const logEntry = {
    timestamp: new Date().toISOString(),
    userId: user.id,
    userEmail: user.email,
    userRole: user.role,
    resource,
    action,
    success,
    ip: 'redacted_for_demo' // In production, include actual IP
  }
  
  // In production, send to secure logging service
  console.log('Healthcare Access Log:', JSON.stringify(logEntry))
}

/**
 * Middleware function for protected routes
 */
export function requireAuth(allowedRoles?: User['role'][]) {
  return createAuthMiddleware(allowedRoles)
}

/**
 * Create protected route handler
 */
export function createProtectedRoute(
  handler: (ctx: any, user: User) => Promise<Response>,
  allowedRoles: User['role'][] = ['admin', 'staff']
) {
  return async (ctx: any): Promise<Response> => {
    const auth = await requireAuth(allowedRoles)(ctx.request)
    
    if (!auth.user) {
      // Log failed access attempt
      logAccess(
        { id: 'unknown', email: 'unknown', role: 'guest', permissions: [] },
        'protected_route',
        'access',
        false
      )
      
      return new Response(
        JSON.stringify({ 
          error: auth.error || 'Authentication required',
          success: false 
        }),
        { 
          status: 401,
          headers: { 'Content-Type': 'application/json' }
        }
      )
    }
    
    return handler(ctx, auth.user)
  }
}
