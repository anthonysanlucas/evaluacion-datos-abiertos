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
            <span className="mb-8 inline-block text-sm font-semibold text-secondary-text">
              Pregunta {questionIndex + 1}
            </span>
            <h2 className="mx-auto mb-8 font-medium leading-tight text-primary-text sm:text-2xl lg:mx-0">
              {question.question}
            </h2>

            <ul>
              {question.options.map((option, optionIndex) => {
                const isChecked =
                  selectedOptions[question.id] && selectedOptions[question.id].includes(optionIndex)
                return (
                  <li key={question.id + optionIndex + 'option'} className="rounded">
                    <label className="grid min-h-16 w-full cursor-pointer grid-cols-[max-content,1fr] place-content-center place-items-center gap-4 border bg-transparent p-4 font-medium text-primary-text transition-colors hover:border-custom-orange hover:bg-custom-orange/40 focus:border-custom-orange focus:outline-none focus:ring-0 focus:ring-offset-0">
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
                        className="h-6 w-6 border text-custom-orange accent-custom-orange focus:outline-dashed focus:ring-custom-orange"
                      />
                      <p className="w-full text-lg text-primary-text">{option.text}</p>
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
