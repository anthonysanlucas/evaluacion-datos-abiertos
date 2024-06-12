import { useQuestionStore } from '../stores/questionStore'

function EvaluationResults() {
  const totalPoints = useQuestionStore(state => state.totalPoints)

  return (
    <>
      <div className="mb-5 flex items-center">
        <p className="inline-flex items-center rounded bg-blue-100 p-1.5 font-semibold text-blue-800 dark:bg-blue-200 dark:text-blue-800">
          {totalPoints}
        </p>
        <p className="ms-2 font-medium text-gray-900 dark:text-white">Avanzado</p>
      </div>
    </>
  )
}

export default EvaluationResults
