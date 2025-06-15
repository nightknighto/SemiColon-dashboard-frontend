import { UserRole } from '../../users/types/User'

export interface LoginDTO {
  status: number
  data: {
    username: string
    role: UserRole
  }
}
