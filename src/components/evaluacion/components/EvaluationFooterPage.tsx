import { showToastService } from '../services/showToastService'
import { useQuestionStore } from '@/components/evaluacion/stores/questionStore'
import { useEntityStore } from '../stores/entityStore'
import { questionsData } from '@/data/questionData'
import { RocketIcon } from '@/icons/Icons'

export function EvaluationFooterPageInfo() {
  const currentSection = useQuestionStore(state => state.currentSection)
  const currentQuestion = useQuestionStore(state => state.currentQuestion)
  const nextSection = useQuestionStore(state => state.nextSection)
  const nextQuestion = useQuestionStore(state => state.nextQuestion)

  const institutionName = useEntityStore(state => state.institutionName)
  const iinstitutionType = useEntityStore(state => state.institutionType)
  const contactEmail = useEntityStore(state => state.contactEmail)
  const responsiblePersonName = useEntityStore(state => state.responsiblePersonName)
  const responsiblePersonRole = useEntityStore(state => state.responsiblePersonRole)
  const populationServed = useEntityStore(state => state.populationServed)
  const participationObjective = useEntityStore(state => state.participationObjective)

  const maxQuestionsPerSection = questionsData[currentSection].questions.length

  const handleStartEvaluation = () => {
    if (institutionName === '') {
      return showToastService('Debes ingresar el nombre de tu institución.')
    }

    if (iinstitutionType === null) {
      return showToastService('Debes ingresar el tipo de tu institución.')
    }

    if (contactEmail === '') {
      return showToastService('Debes ingresar el correo electrónico de contacto.')
    }

    // valid the regex for email
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(contactEmail)) {
      return showToastService('Debes ingresar un correo válido.  Ejemplo: hola@institucion.com')
    }

    if (responsiblePersonName === '') {
      return showToastService('Debes ingresar el nombre de la persona responsable.')
    }

    if (responsiblePersonRole === '') {
      return showToastService('Debes ingresar el rol de la persona responsable.')
    }

    if (populationServed === null) {
      return showToastService('Debes ingresar la población a la que sirve tu institución.')
    }

    if (participationObjective === '') {
      return showToastService('Debes ingresar el objetivo de participación.')
    }

    nextSection()
  }

  const handleNextQuestionOrSection = () => {
    // validate if the question is answered

    nextQuestion()
  }

  return (
    <footer className="mt-8 grid place-items-end gap-4 sm:grid-cols-2">
      <section className="flex w-full items-center justify-start gap-x-4 text-zinc-400">
        {currentSection > 0 && (
          <small>
            Preguntas {currentQuestion + 1} de {maxQuestionsPerSection}
          </small>
        )}
      </section>

      <section className="grid max-w-max gap-4">
        {currentSection === 0 && (
          <button
            onClick={handleStartEvaluation}
            className="flex h-12 items-center justify-center gap-2 rounded-md border border-zinc-800 bg-black px-6 font-semibold text-zinc-200 transition-colors hover:bg-zinc-800 focus:outline-none">
            <span>Iniciar el viaje</span>

            <RocketIcon className="h-6 w-6 text-zinc-300" />
          </button>
        )}
        {currentSection > 0 && (
          <button
            onClick={handleNextQuestionOrSection}
            className="h-12 items-center justify-center gap-2 rounded-md border border-zinc-800 bg-black px-6 font-semibold text-zinc-200 transition-colors hover:bg-zinc-800 focus:outline-none">
            Siguiente
          </button>
        )}
      </section>
    </footer>
  )
}

export default EvaluationFooterPageInfo
