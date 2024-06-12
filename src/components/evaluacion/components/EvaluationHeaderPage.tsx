import { useEffect, useState } from 'react'
import { useQuestionStore } from '@/components/evaluacion/stores/questionStore'

export function EvaluationHeaderPage() {
  const [sectionTitle, setSectionTitle] = useState('')
  const [sectionDescription, setSectionDescription] = useState('')

  const currentSection = useQuestionStore(state => state.currentSection)
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
    <header className="wave-container-white min-h-96 bg-primary py-16">
      <div className="section-container">
        <span className="mb-8 inline-flex h-full items-center justify-center rounded-xl bg-custom-orange px-4 py-2 text-sm font-medium text-white">
          Sección {currentSection + 1} de {maxQuestionSection}
        </span>

        <h2 className="mb-4 text-balance text-2xl font-semibold text-white md:text-5xl">
          {sectionTitle}
        </h2>
        <p className="max-w-4xl text-lg text-zinc-50">{sectionDescription}</p>
        {currentSection > 0 && (
          <p className="mt-4 w-full text-sm text-zinc-50">{maxQuestionsPerSection} preguntas</p>
        )}
      </div>
    </header>
  )
}
