import { create } from 'zustand'
import { questionsData } from '@/data/questionData'

export const useQuestionStore = create<QuestionStore>(set => ({
  currentSection: 0,
  currentQuestion: 0,

  questionsData: questionsData,
  maxSections: questionsData.length,

  pointsPerSection: [0, 0, 0, 0],
  totalPoints: 0,

  setCurrentSection: (section: number) => set({ currentSection: section }),
  setPointsPerSection: (section: number, points: number) => {
    set(state => {
      state.pointsPerSection[section] = points

      return state
    })
  },
  setQuestionPoint(questionId: string, points: number) {
    set(state => {
      const questionIndex = state.questionsData[state.currentSection].questions.findIndex(
        (question: Question) => question.id === questionId
      )

      state.questionsData[state.currentSection].questions[questionIndex].questionPoints = points

      return state
    })
  },
  nextSection: () =>
    set(state => {
      if (state.currentSection < state.maxSections) {
        return { currentSection: state.currentSection + 1 }
      }
    }),

  setTotalPoints(points: number) {
    set(state => {
      state.totalPoints = points

      return state
    })
  }
}))
