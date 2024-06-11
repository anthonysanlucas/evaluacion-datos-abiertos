import { create } from 'zustand'
import { questionsData } from '@/data/questionData'

export const useQuestionStore = create<QuestionStore>(set => ({
  currentSection: 1,
  currentQuestion: 0,

  questionsData: questionsData,

  maxSections: questionsData.length,

  isCompletedEvaluation: false,

  setCurrentSection: (section: number) => set({ currentSection: section }),

  setQuestionPoint (questionId: string, points: number) {
    set(state => {
      const questionIndex = state.questionsData[state.currentSection].questions.findIndex(
        (question: Question) => question.id === questionId
      )
    
      state.questionsData[state.currentSection].questions[questionIndex].questionPoints = points
    
      return state;
    })
  },

  // Move to the next section if the current section is not the last one
  nextSection: () =>
    set(state => {
      if (state.currentSection < state.maxSections) {
        return { currentSection: state.currentSection + 1 }
      }
    }),

  // Move to the next questions if the current question is not the last one in the current section
  /* 
    Saber en qué sección me encuentro actualmente
    Saber en qué pregunta me encuentro actualmente
    Saber si estoy en la última pregunta de la sección
    Saber si estoy en la última sección
    Si estoy en la última pregunta de la sección y no estoy en la última sección entonces pasar a la siguiente sección
    Si estoy en la última pregunta de la última sección entonces ir al componente de resultado de la evaluación
  */

  nextQuestion: () =>
    set(state => {
      let totalQuestionsPerSection = state.questionsData[state.currentSection].questions.length

      if (state.currentSection < state.maxSections - 1) {
        if (state.currentQuestion === totalQuestionsPerSection - 1) {
          return { currentSection: state.currentSection + 1, currentQuestion: 0 }
        }
      }

      if (
        state.currentSection === state.maxSections - 1 &&
        state.currentQuestion === totalQuestionsPerSection - 1
      ) {
        return { isCompletedEvaluation: true, currentSection: 0, currentQuestion: 0 }
      }

      return { currentQuestion: state.currentQuestion + 1 }
    })
}))
