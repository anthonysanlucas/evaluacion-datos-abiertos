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

  pointsPerSection: number[]
  totalPoints: number

  nextSection: () => void
  setPointsPerSection: (section: number, points: number) => void
  setQuestionPoint: (questionId: string, points: number) => void
  setTotalPoints: (points: number) => void
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

interface BlogPostEntry {
  id: string
  title: string
  description: string
  date: string
  tags: string[]
  imageUrl: string
  postUrl: string
}
