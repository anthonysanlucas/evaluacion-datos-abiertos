import { create } from 'zustand'

interface FormState {
  isCalculating: boolean
  isCompletedEvaluation: boolean
  setIsCalculating: (isCalculating: boolean) => void
  setIsCompletedEvaluation: (isCompletedEvaluation: boolean) => void
}

export const useFormStateStore = create<FormState>(set => ({
  isCalculating: false,
  isCompletedEvaluation: false,

  setIsCalculating: (isCalculating: boolean) => set({ isCalculating: isCalculating }),
  setIsCompletedEvaluation: (isCompletedEvaluation: boolean) =>
    set({ isCompletedEvaluation: isCompletedEvaluation })
}))
