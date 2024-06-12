import CircleChart from '@/components/charts/circleChart/CircleChart'
import { useQuestionStore } from '../stores/questionStore'

const chartsColors = ['#000', '#EF8E7D', '#1458E4', '#F8D45C']
const chartsSections = ['', 'Propósito', 'Práctica', 'Personal']
const excludeSections = [0]

function EvaluationResults() {
  const totalPoints = useQuestionStore(state => state.totalPoints)
  const pointsPerSection = useQuestionStore(state => state.pointsPerSection)

  return (
    <>
      <section className="section-container border-b border-t py-24">
        <p className="mb-8 text-secondary-text">Tu institución está en el nivel: </p>
        <p className="mb-8 text-4xl font-semibold text-primary-text md:text-8xl">Comprometido</p>
        <p className="mb-8 max-w-5xl text-lg text-secondary-text">
          La institución está
          <p className="group relative mx-1 inline-flex w-max text-lg">
            <span className="relative z-10 px-1 group-hover:text-white">
              claramente comprometida
            </span>
            <span className="absolute bottom-0 left-0 z-0 h-0.5 w-full bg-primary transition-all group-hover:h-full"></span>
          </p>
          con los datos y eso es inspirador. Están dando pasos significativos para integrarlos en su
          gestión y entender cómo pueden mejorar los procesos y toma de decisiones.
        </p>

        <div className="grid max-w-5xl grid-cols-[max-content,1fr]">
          <article className="max-w-max border-r pr-8">
            <p className="mb-4 text-sm font-medium text-secondary-text">Promedio total</p>
            <p className="mb-4 inline-flex items-center text-8xl font-semibold text-primary-text">
              {totalPoints}
            </p>
            <p className="text-sm font-medium text-secondary-text">Sobre 10</p>
          </article>

          <section className="grid grid-cols-3 place-content-center place-items-center">
            {pointsPerSection
              .map((points, index) => ({ points, index }))
              .filter(item => !excludeSections.includes(item.index))
              .map(({ points, index }) => {
                return (
                  <article key={index} className="text-center">
                    <CircleChart
                      color={chartsColors[index]}
                      percentage={40}
                      size={100}
                      text={chartsSections[index]}
                    />
                  </article>
                )
              })}
          </section>
        </div>
      </section>
    </>
  )
}

export default EvaluationResults
