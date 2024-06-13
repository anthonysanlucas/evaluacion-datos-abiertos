import { showToastService } from '../services/showToastService'
import { useQuestionStore } from '@/components/evaluacion/stores/questionStore'
import { useEntityStore } from '../stores/entityStore'
import { RocketIcon } from '@/icons/Icons'
import { useFormStateStore } from '../stores/formStateStore'

export function EvaluationFooterPageInfo() {
  const currentSection = useQuestionStore(state => state.currentSection)
  const questionsData = useQuestionStore(state => state.questionsData)
  const maxSections = useQuestionStore(state => state.maxSections)
  const nextSection = useQuestionStore(state => state.nextSection)
  const setPointsPerSection = useQuestionStore(state => state.setPointsPerSection)
  const setTotalPoints = useQuestionStore(state => state.setTotalPoints)

  const setIsCompletedEvaluation = useFormStateStore(state => state.setIsCompletedEvaluation)
  const setIsCalculating = useFormStateStore(state => state.setIsCalculating)

  const institutionName = useEntityStore(state => state.institutionName)
  const iinstitutionType = useEntityStore(state => state.institutionType)
  const contactEmail = useEntityStore(state => state.contactEmail)
  const responsiblePersonName = useEntityStore(state => state.responsiblePersonName)
  const responsiblePersonLastName = useEntityStore(state => state.responsiblePersonLastName)
  const responsiblePersonRole = useEntityStore(state => state.responsiblePersonRole)

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

  const handleNextSection = () => {
    const questions = questionsData[currentSection].questions

    const unansweredQuestions = questions.reduce((acc, question, index) => {
      if (question.questionPoints === null) {
        acc.push(index + 1)
      }
      return acc
    }, [])

    if (unansweredQuestions.length > 0) {
      return showToastService(
        `Debes responder las pregunta${unansweredQuestions.length > 1 ? 's' : ''}: ${unansweredQuestions.join(', ')}.`
      )
    }

    if (currentSection === maxSections - 1) {
      setIsCalculating(true)

      let pointsTwo = 0
      let pointsThree = 0
      let pointsFour = 0

      questionsData.forEach((section: Section, index: number) => {
        if (index == 0) return

        section.questions.forEach((question: Question) => {
          if (index == 1) {
            pointsTwo += question.questionPoints
          }

          if (index == 2) {
            pointsThree += question.questionPoints
          }

          if (index == 3) {
            pointsFour += question.questionPoints
          }
        })

        setPointsPerSection(index, section.sectionPoints)
        setTotalPoints(pointsTwo + pointsThree + pointsFour)
      })

      setTimeout(() => {
        setIsCalculating(false)

        setIsCompletedEvaluation(true)
      }, 2000)

      return
    }

    nextSection()
  }

  return (
    <footer className="section-container my-8">
      <button
        onClick={currentSection === 0 ? handleStartEvaluation : handleNextSection}
        className="group ml-auto flex h-12 w-full select-none items-center justify-center gap-2 rounded-xl bg-primary px-6 font-semibold text-white transition-all hover:bg-custom-orange focus:outline-none sm:max-w-60 sm:hover:w-64">
        <span>{currentSection === maxSections - 1 ? 'Finalizar' : 'Siguiente'}</span>
        <RocketIcon className="h-6 w-6 transition-transform ease-in-out group-hover:translate-x-2" />
      </button>
    </footer>
  )
}

export default EvaluationFooterPageInfo
