import { useQuestionStore } from '@/components/evaluacion/stores/questionStore'

export function EvaluationSectionBagde() {
  const currentSection = useQuestionStore(state => state.currentSection)
  const maxQuestionSection = useQuestionStore(state => state.maxSections)

  return (
    <span className="mb-8 inline-flex h-full animate-background-shine items-center justify-center rounded border border-zinc-800 bg-[linear-gradient(110deg,#0e0e0e,45%,#000,55%,#0e0e0e)] bg-[length:250%_100%] px-3 py-1 text-xs font-medium text-zinc-300">
      Sección {currentSection + 1} de {maxQuestionSection}
    </span>
  )
}
