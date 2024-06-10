import { useEffect, useState } from 'react'
import { useQuestionStore } from '@/components/evaluacion/stores/questionStore'

export function EvaluationHeaderPage() {
  const [sectionTitle, setSectionTitle] = useState('')
  const [sectionDescription, setSectionDescription] = useState('')

  const currentSection = useQuestionStore(state => state.currentSection)
  const questionsData = useQuestionStore(state => state.questionsData)

  useEffect(() => {
    if (currentSection === 0) {
      setSectionTitle('Sobre mi Gobierno Local')
      setSectionDescription(
        'Para iniciar el viaje hacia el mundo de los datos necesitamos la siguiente información sobre su institución.'
      )
    } else {
      setSectionTitle(questionsData[currentSection - 1].sectionTitle)
      setSectionDescription(questionsData[currentSection - 1].sectionDescription)
    }
  }, [currentSection])

  return (
    <header>
      <h2 className="mb-4 text-balance text-3xl font-bold uppercase leading-tight text-zinc-50 md:text-[40px]">
        {sectionTitle}
      </h2>
      <p className="mb-4 font-medium text-zinc-400">{sectionDescription}</p>
    </header>
  )
}
