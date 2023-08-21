export enum InterviewCriteriaEnum {
  COMMITMENT = 'Commitment',
  TEAMWORK = 'Teamwork',
  TIME_MANAGEMENT = 'Time Management',
  COMMUNICATION_SKILLS = 'Communication Skills',
  FLEXIBILITY = 'Flexibility',
  ETHICS = 'Ethics',
  LEADERSHIP = 'Leadership',
  STRESS_MANAGEMENT = 'Stress Management',
  PROBLEM_SOLVING = 'Problem Solving',
  EAGER_TO_LEARN = 'Eager To Learn',
}

export type InterviewCriteriaObject = Partial<
  Record<
    InterviewCriteriaEnum,
    {
      rating: 1 | 2 | 3 | 4 | 5
      note?: string
      _id: string
    }
  >
>

export type InterviewObject = {
  interviewNotes: InterviewCriteriaObject
  interviewerId: {
    _id: string
    phone: string
    role: string
    username: string
  }
  date: Date
}
