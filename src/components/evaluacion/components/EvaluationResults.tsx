import { useQuestionStore } from '../stores/questionStore'

function EvaluationResults() {
  const totalPoints = useQuestionStore(state => state.totalPoints)

  return (
    <>
      <section className="section-container border-b border-t py-24">
        <p className="mb-8 text-secondary-text">Tu organización está en la fase: </p>
        <p className="mb-8 text-5xl font-semibold text-primary-text">Explorador</p>
        <p className="text-lg text-secondary-text">
          La institución está
          <p className="group relative mx-1 inline-flex w-max text-lg">
            <span className="relative z-10 px-1 group-hover:text-white">empezando el viaje</span>
            <span className="absolute bottom-0 left-0 z-0 h-0.5 w-full bg-primary transition-all group-hover:h-full"></span>
          </p>
          en el mundo de los datos. ¡Sigan adelante! Hay mucho por descubrir y aprender sobre cómo
          los datos pueden transformar la institución y su gestión.
        </p>

        <div className="mt-8">
          <article className="">
            <p className="mb-4 font-medium text-secondary-text">Puntaje total</p>
            <p className="mb-4 inline-flex items-center text-6xl font-semibold text-primary-text">
              {totalPoints}
            </p>
            <p className="font-medium text-secondary-text">Sobre 10</p>
          </article>
        </div>
      </section>
    </>
  )
}

export default EvaluationResults
