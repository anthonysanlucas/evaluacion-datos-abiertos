import { EntityInfo } from './components/EntityInfo'
import { Toaster } from 'react-hot-toast'
import EvaluationFooterPageInfo from './components/EvaluationFooterPage'
import { EvaluationHeaderPage } from './components/EvaluationHeaderPage'
import { EvaluationSectionBagde } from './components/EvaluationSectionBagde'
import { useQuestionStore } from '@/components/evaluacion/stores/questionStore'
import Question from './components/Question'

export function Evaluation() {
  const currentSection = useQuestionStore(state => state.currentSection)
  const isCompleted = useQuestionStore(state => state.isCompletedEvaluation)

  return (
    <section className="section-container flex min-h-screen w-full items-center justify-center">
      {!isCompleted && (
        <div className="mx-auto w-full max-w-3xl rounded bg-white/5 px-4 py-8 backdrop-blur-2xl">
          <EvaluationSectionBagde />

          <EvaluationHeaderPage />

          <section className="space-y-4">
            {currentSection === 0 && <EntityInfo />}
            {currentSection > 0 && <Question />}
          </section>

          <EvaluationFooterPageInfo />
        </div>
      )}

      {isCompleted && (
        <>
          <h2 className="text-center text-3xl font-bold text-zinc-50">
            ¡Gracias por completar la evaluación!
          </h2>
        </>
      )}
      <Toaster />
    </section>
  )
}

export default Evaluation
