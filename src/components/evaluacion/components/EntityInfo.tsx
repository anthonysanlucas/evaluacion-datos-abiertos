import { useEntityStore } from '@/components/evaluacion/stores/entityStore'

export function EntityInfo() {
  const {
    institutionName,
    institutionType,
    contactEmail,
    responsiblePersonName,
    responsiblePersonRole,
    populationServed,
    participationObjective,
    setInstitutionName,
    setInstitutionType,
    setContactEmail,
    setResponsiblePersonName,
    setResponsiblePersonRole,
    setPopulationServed,
    setParticipationObjective
  } = useEntityStore()

  return (
    <>
      <div className="relative">
        <div className="absolute top-0 flex w-full justify-center">
          <label className="sr-only">Nombre de institución</label>
          <div className="h-[1px] animate-border-width rounded bg-gradient-to-r from-[rgba(17,17,17,0)] via-primary to-[rgba(17,17,17,0)] transition-all duration-1000"></div>
        </div>
        <input
          className="block h-12 w-full rounded-md border border-zinc-950 bg-black px-3 py-2 text-zinc-300 placeholder:text-zinc-400 focus:outline-none focus:ring-1 focus:ring-zinc-400 focus:ring-offset-1 focus:ring-offset-zinc-800"
          placeholder="Escriba el nombre de su institución"
          value={institutionName}
          onChange={e => setInstitutionName(e.target.value)}
          required
        />
      </div>

      <div className="relative">
        <div className="absolute top-0 flex w-full justify-center">
          <label className="sr-only">Tipo de su institución</label>
          <div className="h-[1px] animate-border-width rounded bg-gradient-to-r from-[rgba(17,17,17,0)] via-primary to-[rgba(17,17,17,0)] transition-all duration-1000"></div>
        </div>

        <select
          id="institutionType"
          className="block h-12 w-full rounded-md border border-zinc-950 bg-black px-3 py-2 text-zinc-300 placeholder:text-zinc-400 focus:outline-none focus:ring-1 focus:ring-zinc-400 focus:ring-offset-1 focus:ring-offset-zinc-800"
          value={institutionType ?? ''}
          onChange={e => setInstitutionType(e.target.value as 'Parish' | 'Cantonal' | 'Prefecture')}
          required>
          <option value="" disabled>
            Seleccionar tipo de su institución
          </option>
          <option value="Parish">Parroquial</option>
          <option value="Cantonal">Cantonal</option>
          <option value="Prefecture">Prefectura</option>
        </select>
      </div>

      <div className="relative">
        <div className="absolute top-0 flex w-full justify-center">
          <label className="sr-only">Correo electrónico de contacto</label>
          <div className="h-[1px] animate-border-width rounded bg-gradient-to-r from-[rgba(17,17,17,0)] via-primary to-[rgba(17,17,17,0)] transition-all duration-1000"></div>
        </div>
        <input
          className="block h-12 w-full rounded-md border border-zinc-950 bg-black px-3 py-2 text-zinc-300 placeholder:text-zinc-400 focus:outline-none focus:ring-1 focus:ring-zinc-400 focus:ring-offset-1 focus:ring-offset-zinc-800"
          type="email"
          placeholder="Escriba un correo electrónico de contacto de su institución"
          value={contactEmail}
          onChange={e => setContactEmail(e.target.value)}
          required
        />
      </div>

      <div className="relative">
        <div className="absolute top-0 flex w-full justify-center">
          <label className="sr-only">Nombre del responsable que realiza la Autoevaluación</label>
          <div className="h-[1px] animate-border-width rounded bg-gradient-to-r from-[rgba(17,17,17,0)] via-primary to-[rgba(17,17,17,0)] transition-all duration-1000"></div>
        </div>
        <input
          className="block h-12 w-full rounded-md border border-zinc-950 bg-black px-3 py-2 text-zinc-300 placeholder:text-zinc-400 focus:outline-none focus:ring-1 focus:ring-zinc-400 focus:ring-offset-1 focus:ring-offset-zinc-800"
          placeholder="Escriba el nombre del responsable que realiza la autoevaluación"
          value={responsiblePersonName}
          onChange={e => setResponsiblePersonName(e.target.value)}
          required
        />
      </div>

      <div className="relative">
        <div className="absolute top-0 flex w-full justify-center">
          <label className="sr-only">Cargo del responsable que realiza la Autoevaluación</label>
          <div className="h-[1px] animate-border-width rounded bg-gradient-to-r from-[rgba(17,17,17,0)] via-primary to-[rgba(17,17,17,0)] transition-all duration-1000"></div>
        </div>
        <input
          className="block h-12 w-full rounded-md border border-zinc-950 bg-black px-3 py-2 text-zinc-300 placeholder:text-zinc-400 focus:outline-none focus:ring-1 focus:ring-zinc-400 focus:ring-offset-1 focus:ring-offset-zinc-800"
          placeholder="Escriba el cargo del responsable"
          value={responsiblePersonRole}
          onChange={e => setResponsiblePersonRole(e.target.value)}
          required
        />
      </div>

      <div className="relative">
        <div className="absolute top-0 flex w-full justify-center">
          <label className="sr-only">
            ¿Cuál es la población que su institución atiende? (cantidad/estimación aproximada)
          </label>
          <div className="h-[1px] animate-border-width rounded bg-gradient-to-r from-[rgba(17,17,17,0)] via-primary to-[rgba(17,17,17,0)] transition-all duration-1000"></div>
        </div>
        <input
          className="block h-12 w-full rounded-md border border-zinc-950 bg-black px-3 py-2 text-zinc-300 placeholder:text-zinc-400 focus:outline-none focus:ring-1 focus:ring-zinc-400 focus:ring-offset-1 focus:ring-offset-zinc-800"
          type="number"
          placeholder="Indique la cantidad de población que su institución atiende (Estimación aproximada)"
          max={2000000}
          value={populationServed}
          onChange={e => setPopulationServed(parseInt(e.target.value, 10))}
          required
        />
      </div>

      <div className="relative">
        <div className="absolute top-0 flex w-full justify-center">
          <label className="sr-only">
            ¿Cuál es su principal objetivo al participar en esta evaluación de madurez de los datos?
          </label>
          <div className="h-[1px] animate-border-width rounded bg-gradient-to-r from-[rgba(17,17,17,0)] via-primary to-[rgba(17,17,17,0)] transition-all duration-1000"></div>
        </div>
        <input
          className="block h-12 w-full rounded-md border border-zinc-950 bg-black px-3 py-2 text-zinc-300 placeholder:text-zinc-400 focus:outline-none focus:ring-1 focus:ring-zinc-400 focus:ring-offset-1 focus:ring-offset-zinc-800"
          placeholder="Indique su principal objetivo al participar en esta evaluación de madurez de los datos"
          value={participationObjective}
          onChange={e => setParticipationObjective(e.target.value)}
          required
        />
      </div>
    </>
  )
}
