import { useState } from 'react'
import { useQuestionStore } from '../stores/questionStore'

function Question() {
  const currentSection = useQuestionStore(state => state.currentSection)
  const questionsData = useQuestionStore(state => state.questionsData)
  const setQuestionPoint = useQuestionStore(state => state.setQuestionPoint)
  const [answerIndex, setAnswerIndex] = useState<number | null>(null)
  const [points, setPoints] = useState(0)

  const questions = questionsData[currentSection].questions

  const handleRadioAnswer = (questionId: string, optionValue: number) => {
    console.log('RADIO', questionId, optionValue, 'INDEX')

    setQuestionPoint(questionId, optionValue)
  }

  const handleCheckboxAnswer = (questionId: string, optionValue: number, optionIndex: number) => {
    // La validacion deberia ser si el valor de la respuesta es igual al valor de una de las opciones seleccionadas por lo que points deberia ser un array

    if (answerIndex == null) {
      console.log('IS NULL')

      setAnswerIndex(optionIndex)

      setPoints(optionValue)

      setQuestionPoint(questionId, points)

      return
    }

    if (answerIndex === optionIndex) {
      console.log('IS EQUAL')

      setAnswerIndex(null)

      setPoints(0)

      setQuestionPoint(questionId, points)

      return
    }

    if (answerIndex !== optionIndex) {
      console.log('IS NOT EQUAL')

      setAnswerIndex(optionIndex)

      setPoints(points + optionValue)

      setQuestionPoint(questionId, points)

      return
    }

    console.log('CHECKBOX', questionId, optionValue, 'INDEX', optionIndex)
  }

  return (
    <>
      {questions.map((question, questionIndex) => {
        return (
          <div key={question.id + 'question'}>
            <span className="mb-4 inline-block font-semibold text-zinc-600">
              Pregunta {questionIndex + 1}
            </span>
            <h2 className="mx-auto mb-4 text-2xl font-bold leading-tight text-zinc-900 lg:mx-0">
              {question.question}
            </h2>

            <ul>
              {question.options.map((option, optionIndex) => {
                return (
                  <li key={question.id + optionIndex + 'option'} className="rounded">
                    <label className="grid cursor-pointer grid-cols-[max-content,1fr] place-content-start place-items-start gap-4 border bg-transparent p-4 hover:bg-zinc-800">
                      <input
                        type={question.type}
                        value={option.value}
                        name={question.id}
                        onChange={() => {
                          question.type === 'radio' && handleRadioAnswer(question.id, option.value)

                          question.type === 'checkbox' &&
                            handleCheckboxAnswer(question.id, option.value, optionIndex)
                        }}
                        className="h-6 w-6 border-gray-600 bg-gray-700 accent-red-500 focus:outline-dashed"
                      />
                      <span className="text-lg text-gray-900">{option.text}</span>
                    </label>
                  </li>
                )
              })}
            </ul>
          </div>
        )
      })}
    </>
  )
}

export default Question
