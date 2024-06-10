import { useEffect, useState } from 'react'
import { useQuestionStore } from '@/components/evaluacion/stores/questionStore'

export function EvaluationHeaderPage() {
  const [sectionTitle, setSectionTitle] = useState('')
  const [sectionDescription, setSectionDescription] = useState('')

  const currentSection = useQuestionStore(state => state.currentSection)
  const currentQuestion = useQuestionStore(state => state.currentQuestion)
  const maxQuestionSection = useQuestionStore(state => state.maxSections)

  const maxQuestionsPerSection = useQuestionStore(
    state => state.questionsData[state.currentSection].questions.length
  )
  const questionsData = useQuestionStore(state => state.questionsData)

  useEffect(() => {
    window.scrollTo(0, 0)

    setSectionTitle(questionsData[currentSection].sectionTitle)
    setSectionDescription(questionsData[currentSection].sectionDescription)
  }, [currentSection])

  return (
    <header className="bg-accent rounded-t p-4">
      <span className="mb-8 inline-flex h-full animate-background-shine items-center justify-center rounded bg-[linear-gradient(110deg,#071E2D,45%,#10BCD0,55%,#071E2D)] bg-[length:250%_100%] px-3 py-1 text-xs font-medium text-zinc-300">
        Sección {currentSection + 1} de {maxQuestionSection}
      </span>

      <h2 className="mb-4 text-balance text-3xl font-bold uppercase leading-tight text-white md:text-[40px]">
        {sectionTitle}
      </h2>
      <p className="font-medium text-zinc-300">{sectionDescription}</p>
      {currentSection > 0 && (
        <p className="mt-4 w-full text-xs text-zinc-300">
          Preguntas {currentQuestion + 1} de {maxQuestionsPerSection}
        </p>
      )}
    </header>
  )
}
