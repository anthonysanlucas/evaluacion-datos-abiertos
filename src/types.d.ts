interface Option {
  text: string
  value: number
}

interface Question {
  id: string
  question: string
  options: Option[]
  type: 'radio' | 'checkbox' | 'text'
  questionPoints: number | null
}

interface Section {
  section: number
  sectionTitle: string
  sectionDescription: string
  sectionPoints: number
  questions: Question[]
}

type QuestionsData = Section[]

interface QuestionStore {
  currentSection: number
  currentQuestion: number

  questionsData: any

  maxSections: number

  isCompletedEvaluation: boolean

  nextSection: () => void
  nextQuestion: () => void
}

interface Entity {
  institutionName: string
  institutionType: 'Parroquial' | 'Cantonal' | 'Prefectura' | null
  contactEmail: string
  responsiblePersonName: string
  responsiblePersonRole: string
  populationServed: number
  participationObjective: string
}
