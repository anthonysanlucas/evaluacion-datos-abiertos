import { showToastService } from '../services/showToastService'
import { useQuestionStore } from '@/components/evaluacion/stores/questionStore'
import { useEntityStore } from '../stores/entityStore'
import { RocketIcon } from '@/icons/Icons'

export function EvaluationFooterPageInfo() {
  const currentSection = useQuestionStore(state => state.currentSection)
  const nextSection = useQuestionStore(state => state.nextSection)
  const nextQuestion = useQuestionStore(state => state.nextQuestion)
  const questionsData = useQuestionStore(state => state.questionsData)

  const institutionName = useEntityStore(state => state.institutionName)
  const iinstitutionType = useEntityStore(state => state.institutionType)
  const contactEmail = useEntityStore(state => state.contactEmail)
  const responsiblePersonName = useEntityStore(state => state.responsiblePersonName)
  const responsiblePersonLastName = useEntityStore(state => state.responsiblePersonLastName)
  const responsiblePersonRole = useEntityStore(state => state.responsiblePersonRole)

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

    if (responsiblePersonLastName === '') {
      return showToastService('Debes ingresar el apellido de la persona responsable.')
    }

    if (responsiblePersonRole === '') {
      return showToastService('Debes ingresar el rol de la persona responsable.')
    }

    nextSection()
  }

  // const handleNextSection = () => {
  //   const questions = questionsData[currentSection].questions

  //   const whatQuestionIsNotAnswered = questions.findIndex(
  //     (question: Question) => question.questionPoints === null
  //   )

  //   if (whatQuestionIsNotAnswered !== -1) {
  //     return showToastService(
  //       `Debes responder la pregunta <span>${whatQuestionIsNotAnswered + 1}</span> antes de continuar.`
  //     )
  //   }

  //   nextSection()
  // }

  const handleNextSection = () => {
    const questions = questionsData[currentSection].questions

    const unansweredQuestions = questions.reduce((acc, question, index) => {
      if (question.questionPoints === null) {
        acc.push(index + 1) // Agregar 1 para que los índices sean 1-based como en la interfaz de usuario
      }
      return acc
    }, [])

    if (unansweredQuestions.length > 0) {
      return showToastService(
        `Debes responder las preguntas: ${unansweredQuestions.join(', ')}. Antes de continuar.`
      )
    }

    nextSection()
  }

  return (
    <footer className="px-4">
      {currentSection === 0 && (
        <button
          onClick={handleStartEvaluation}
          className="flex h-12 w-full items-center justify-center gap-4 rounded-md border border-transparent bg-accent px-6 font-semibold text-zinc-200 transition-colors hover:border-primary hover:bg-white hover:text-primary focus:outline-none">
          <span>Siguiente</span>

          <RocketIcon className="h-6 w-6" />
        </button>
      )}
      {currentSection > 0 && (
        <button
          onClick={handleNextSection}
          className="h-12 w-full items-center justify-center gap-2 rounded-md border border-zinc-800 bg-accent px-6 font-semibold text-zinc-200 transition-colors hover:bg-white focus:outline-none">
          Siguiente
        </button>
      )}
    </footer>
  )
}

export default EvaluationFooterPageInfo
