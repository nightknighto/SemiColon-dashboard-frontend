import { UserRole } from '../../users/types/User'

export interface LoginDTO {
  status: number
  data: {
    token: string
    username: string
    role: UserRole
  }
}
