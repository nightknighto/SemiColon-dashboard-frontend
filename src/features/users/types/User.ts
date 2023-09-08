export interface User {
  _id: string
  username: string
  phone: string
  role: UserRole
  active: boolean
}

export type UserRole = 'admin' | 'hr' | 'member'
