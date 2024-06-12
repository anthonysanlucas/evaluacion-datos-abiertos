import { EntityInfo } from './components/EntityInfo'
import { Toaster } from 'react-hot-toast'
import { EvaluationHeaderPage } from './components/EvaluationHeaderPage'
import { useQuestionStore } from '@/components/evaluacion/stores/questionStore'
import PageLoader from '@/components/loaders/pageLoader/PageLoader'
import EvaluationFooterPageInfo from './components/EvaluationFooterPage'
import Question from './components/Questions'
import { useFormStateStore } from './stores/formStateStore'
import EvaluationResults from './components/EvaluationResults'

export function Evaluation() {
  const currentSection = useQuestionStore(state => state.currentSection)

  const isCompletedEvaluation = useFormStateStore(state => state.isCompletedEvaluation)
  const isCalculating = useFormStateStore(state => state.isCalculating)

  return (
    <>
      {!isCompletedEvaluation && (
        <section className="relative flex min-h-screen w-full items-center justify-center">
          <div className="mx-auto w-full pb-8">
            <EvaluationHeaderPage />

            <section className="section-container space-y-16 py-8">
              {currentSection === 0 && <EntityInfo />}
              {currentSection > 0 && <Question />}
            </section>

            <EvaluationFooterPageInfo />
          </div>
          <Toaster />
        </section>
      )}

      {isCompletedEvaluation && <EvaluationResults />}

      {isCalculating && <PageLoader />}
    </>
  )
}

export default Evaluation
