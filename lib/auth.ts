// Simple auth helper functions for role-based access control

export type UserRole = 'super_admin' | 'school_admin' | 'district_admin'

export interface User {
  email: string
  role: UserRole
  name: string
  schoolId?: string  // For school admins
  districtId?: string  // For district admins
}

// Get current user from localStorage
export function getCurrentUser(): User | null {
  if (typeof window === 'undefined') return null
  
  const role = localStorage.getItem('userRole') as UserRole
  const email = localStorage.getItem('userEmail')
  const name = localStorage.getItem('userName')
  
  if (!role || !email || !name) return null
  
  return {
    email,
    role,
    name,
    schoolId: localStorage.getItem('schoolId') || undefined,
    districtId: localStorage.getItem('districtId') || undefined,
  }
}

// Check if user has permission
export function hasPermission(requiredRole: UserRole | UserRole[]): boolean {
  const user = getCurrentUser()
  if (!user) return false
  
  const roles = Array.isArray(requiredRole) ? requiredRole : [requiredRole]
  return roles.includes(user.role)
}

// Check if user is super admin
export function isSuperAdmin(): boolean {
  return hasPermission('super_admin')
}

// Check if user is school admin
export function isSchoolAdmin(): boolean {
  return hasPermission('school_admin')
}

// Check if user is district admin
export function isDistrictAdmin(): boolean {
  return hasPermission('district_admin')
}

// Logout user
export function logout() {
  if (typeof window === 'undefined') return
  
  localStorage.removeItem('userRole')
  localStorage.removeItem('userEmail')
  localStorage.removeItem('userName')
  localStorage.removeItem('schoolId')
  localStorage.removeItem('districtId')
  
  window.location.href = '/login'
}




