import { useState } from 'react'
import { useQuestionStore } from '../stores/questionStore'

function Question() {
  const currentSection = useQuestionStore(state => state.currentSection)
  const questionsData = useQuestionStore(state => state.questionsData)
  const setQuestionPoint = useQuestionStore(state => state.setQuestionPoint)
  const [selectedOptions, setSelectedOptions] = useState<{ [key: string]: number[] }>({})

  const questions = questionsData[currentSection].questions

  const handleRadioAnswer = (questionId: string, optionValue: number) => {
    console.log('RADIO', questionId, optionValue, 'INDEX')
    setQuestionPoint(questionId, optionValue)
  }

  const handleCheckboxAnswer = (questionId: string, optionValue: number, optionIndex: number) => {
    setSelectedOptions(prevSelectedOptions => {
      const newSelectedOptions = { ...prevSelectedOptions }
      if (!newSelectedOptions[questionId]) {
        newSelectedOptions[questionId] = []
      }

      if (newSelectedOptions[questionId].includes(optionIndex)) {
        newSelectedOptions[questionId] = newSelectedOptions[questionId].filter(
          index => index !== optionIndex
        )
      } else {
        newSelectedOptions[questionId].push(optionIndex)
      }

      // Calcular los puntos seleccionados
      const selectedPoints = newSelectedOptions[questionId].reduce((acc, idx) => {
        return acc + questions.find(q => q.id === questionId).options[idx].value
      }, 0)

      setQuestionPoint(questionId, selectedPoints)

      console.log('CHECKBOX', questionId, optionValue, optionIndex, newSelectedOptions)
      return newSelectedOptions
    })
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
                const isChecked =
                  selectedOptions[question.id] && selectedOptions[question.id].includes(optionIndex)
                return (
                  <li key={question.id + optionIndex + 'option'} className="rounded">
                    <label className="grid cursor-pointer grid-cols-[max-content,1fr] place-content-start place-items-start gap-4 border bg-transparent p-4 hover:bg-zinc-800">
                      <input
                        type={question.type}
                        value={option.value}
                        name={question.id}
                        checked={isChecked}
                        onChange={() => {
                          if (question.type === 'radio') {
                            handleRadioAnswer(question.id, option.value)
                          } else if (question.type === 'checkbox') {
                            handleCheckboxAnswer(question.id, option.value, optionIndex)
                          }
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
