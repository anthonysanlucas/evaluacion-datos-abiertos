import { EntityInfo } from './components/EntityInfo'
import { Toaster } from 'react-hot-toast'
import { EvaluationHeaderPage } from './components/EvaluationHeaderPage'
import { useQuestionStore } from '@/components/evaluacion/stores/questionStore'
import PageLoader from '@/components/loaders/pageLoader/PageLoader'
import EvaluationFooterPageInfo from './components/EvaluationFooterPage'
import Question from './components/Questions'
import { useFormStateStore } from './stores/formStateStore'

export function Evaluation() {
  const currentSection = useQuestionStore(state => state.currentSection)

  const isCompletedEvaluation = useFormStateStore(state => state.isCompletedEvaluation)
  const isCalculating = useFormStateStore(state => state.isCalculating)

  return (
    <>
      <section className="section-container flex min-h-screen w-full items-center justify-center rounded py-8 md:px-8">
        {!isCompletedEvaluation && (
          <div className="mx-auto w-full max-w-3xl bg-zinc-100 pb-8">
            <EvaluationHeaderPage />

            <section className="space-y-8 px-4 py-8">
              {currentSection === 0 && <EntityInfo />}
              {currentSection > 0 && <Question />}
            </section>

            <EvaluationFooterPageInfo />
          </div>
        )}

        {isCompletedEvaluation && (
          <>
            <h2 className="text-center text-3xl font-bold text-zinc-50">
              ¡Gracias por completar la evaluación!
            </h2>
          </>
        )}
        <Toaster />
      </section>

      {isCalculating && <PageLoader />}
    </>
  )
}

export default Evaluation
