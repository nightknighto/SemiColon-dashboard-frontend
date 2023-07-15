import { InterviewObject } from './InterviewNotes'

export interface Participant {
  createdAt: string
  email: string
  firstPrefKnowledge: string
  firstPrefReason: string
  firstPreference: string
  name: string
  pastExperience: string
  phone: string
  updatedAt?: string
  __v?: number
  _id: string
  acceptanceStatus: StatusEnum | ''
  year: string
  collegeId: string
  emailedStatus: boolean
  InterviewerNote?: InterviewObject
}

export enum StatusEnum {
  ACCEPTED = 'accepted',
  REJECTED = 'rejected',
  PENDING = 'pending',
  EMAILED = 'emailed',
  FILTERED = 'filtered',
  SCHEDULED = 'scheduled',
}
