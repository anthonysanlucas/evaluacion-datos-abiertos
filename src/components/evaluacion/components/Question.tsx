import { questionsData } from '@/data/questionData'
import { useQuestionStore } from '../stores/questionStore'

function Question() {
  const currentQuestion = useQuestionStore(state => state.currentQuestion)
  const currentSection = useQuestionStore(state => state.currentSection)

  console.log(currentSection, currentQuestion)

  const question: Question = questionsData[currentSection].questions[currentQuestion]

  console.log(question)

  return (
    <div className="text-white">
      <h2 className="mb-4 text-4xl font-semibold">{question.question}</h2>
      <h1>{question.type}</h1>

      <ul>
        {question.options.map((option, index) => (
          <li key={question.id + `${index}`} className="rounded">
            <label className="grid cursor-pointer grid-cols-[max-content,1fr] place-content-start place-items-start gap-4 bg-zinc-900 p-4 hover:bg-zinc-800">
              <input
                type={question.type}
                value={option.value}
                name="bordered-radio"
                className="h-6 w-6 border-gray-600 bg-gray-700 accent-red-500 focus:outline-dashed"
              />
              <span className="text-lg text-gray-300">{option.text}</span>
            </label>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default Question
