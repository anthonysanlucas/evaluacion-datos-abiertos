import { EntityInfo } from './components/EntityInfo'
import { Toaster } from 'react-hot-toast'
import EvaluationFooterPageInfo from './components/EvaluationFooterPage'
import { EvaluationHeaderPage } from './components/EvaluationHeaderPage'
import { useQuestionStore } from '@/components/evaluacion/stores/questionStore'
import Question from './components/Questions'

export function Evaluation() {
  const currentSection = useQuestionStore(state => state.currentSection)
  const isCompleted = useQuestionStore(state => state.isCompletedEvaluation)

  return (
    <section className="section-container flex min-h-screen w-full items-center justify-center rounded py-8 md:px-8">
      {!isCompleted && (
        <div className="mx-auto w-full max-w-3xl bg-zinc-100 pb-8">
          <EvaluationHeaderPage />

          <section className="space-y-8 px-4 py-8">
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
