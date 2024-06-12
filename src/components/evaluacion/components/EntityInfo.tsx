import { useEntityStore } from '@/components/evaluacion/stores/entityStore'

export function EntityInfo() {
  const {
    institutionName,
    institutionType,
    contactEmail,
    responsiblePersonName,
    responsiblePersonLastName,
    responsiblePersonRole,
    setInstitutionName,
    setInstitutionType,
    setContactEmail,
    setResponsiblePersonName,
    setResponsiblePersonRole,
    setResponsiblePersonLastName
  } = useEntityStore()

  return (
    <>
      <section>
        <label className="mb-4 block text-2xl font-medium text-primary-text">
          Nombre de la institución
        </label>
        <div className="relative">
          <div className="absolute top-0 flex w-full justify-center">
            <div className="h-[2px] animate-border-width rounded bg-gradient-to-r from-[rgba(17,17,17,0)] via-primary to-[rgba(17,17,17,0)] transition-all duration-1000"></div>
          </div>
          <input
            className="block h-16 w-full rounded border-2 border-zinc-300 bg-white px-3 py-2 font-medium text-primary-text transition-colors placeholder:text-zinc-500 hover:border-primary focus:border-primary focus:outline-none focus:ring-0 focus:ring-offset-0"
            placeholder="Escriba el nombre de su institución"
            value={institutionName}
            onChange={e => setInstitutionName(e.target.value)}
            required
          />
        </div>
      </section>

      <section>
        <label className="mb-4 block text-2xl font-medium text-primary-text">
          Tipo de institución
        </label>
        <div className="relative">
          <div className="absolute top-0 flex w-full justify-center">
            <div className="h-[2px] animate-border-width rounded bg-gradient-to-r from-[rgba(17,17,17,0)] via-primary to-[rgba(17,17,17,0)] transition-all duration-1000"></div>
          </div>

          <select
            id="institutionType"
            className="block h-16 w-full rounded border-2 border-zinc-300 bg-white px-3 py-2 font-medium text-primary-text transition-colors placeholder:text-zinc-500 hover:border-primary focus:border-primary focus:outline-none focus:ring-0 focus:ring-offset-0"
            value={institutionType ?? ''}
            onChange={e =>
              setInstitutionType(e.target.value as 'Parish' | 'Cantonal' | 'Prefecture')
            }
            required>
            <option value="" disabled>
              Seleccionar tipo de su institución
            </option>
            <option value="PARROQUIAL">Gobierno Local Parroquial</option>
            <option value="CANTONAL">Gobierno Local Cantonal</option>
            <option value="PROVINCIAL">Gobierno Local Provincial</option>
            <option value="EJECUTIVA">Entidad de la Función Ejecutiva</option>
            <option value="LEGISLATIVA">Entidad de la Función Legislativa</option>
            <option value="JUDICIAL">Entidad de la Función Judicial</option>
            <option value="TRANSPARENCIA">Entidad de la Función de Transparencia</option>
            <option value="EMPRESA_PUBLICA">Empresa Pública</option>
            <option value="OTRA">Otra</option>
          </select>
        </div>
      </section>

      <section>
        <label className="mb-4 block text-2xl font-medium text-primary-text">
          Correo electrónico
        </label>
        <div className="relative">
          <div className="absolute top-0 flex w-full justify-center">
            <div className="h-[2px] animate-border-width rounded bg-gradient-to-r from-[rgba(17,17,17,0)] via-primary to-[rgba(17,17,17,0)] transition-all duration-1000"></div>
          </div>
          <input
            className="block h-16 w-full rounded border-2 border-zinc-300 bg-white px-3 py-2 font-medium text-primary-text transition-colors placeholder:text-zinc-500 hover:border-primary focus:border-primary focus:outline-none focus:ring-0 focus:ring-offset-0"
            type="email"
            placeholder="Escriba el correo electrónico de contacto de su institución"
            value={contactEmail}
            onChange={e => setContactEmail(e.target.value)}
            required
          />
        </div>
      </section>

      <section>
        <label className="mb-4 block text-2xl font-medium text-primary-text">Tu(s) nombre(s)</label>
        <div className="relative">
          <div className="absolute top-0 flex w-full justify-center">
            <div className="h-[2px] animate-border-width rounded bg-gradient-to-r from-[rgba(17,17,17,0)] via-primary to-[rgba(17,17,17,0)] transition-all duration-1000"></div>
          </div>
          <input
            className="block h-16 w-full rounded border-2 border-zinc-300 bg-white px-3 py-2 font-medium text-primary-text transition-colors placeholder:text-zinc-500 hover:border-primary focus:border-primary focus:outline-none focus:ring-0 focus:ring-offset-0"
            placeholder="Escriba sus nombres"
            value={responsiblePersonName}
            onChange={e => setResponsiblePersonName(e.target.value)}
            required
          />
        </div>
      </section>

      <section>
        <label className="mb-4 block text-2xl font-medium text-primary-text">
          Tu(s) apellido(s)
        </label>
        <div className="relative">
          <div className="absolute top-0 flex w-full justify-center">
            <div className="h-[2px] animate-border-width rounded bg-gradient-to-r from-[rgba(17,17,17,0)] via-primary to-[rgba(17,17,17,0)] transition-all duration-1000"></div>
          </div>
          <input
            className="block h-16 w-full rounded border-2 border-zinc-300 bg-white px-3 py-2 font-medium text-primary-text transition-colors placeholder:text-zinc-500 hover:border-primary focus:border-primary focus:outline-none focus:ring-0 focus:ring-offset-0"
            placeholder="Escriba sus apellidos"
            value={responsiblePersonLastName}
            onChange={e => setResponsiblePersonLastName(e.target.value)}
            required
          />
        </div>
      </section>

      <section>
        <label className="mb-4 block text-2xl font-medium text-primary-text">
          Cargo o área de la entidad en el que te desempeñas
        </label>
        <div className="relative">
          <div className="absolute top-0 flex w-full justify-center">
            <div className="h-[2px] animate-border-width rounded bg-gradient-to-r from-[rgba(17,17,17,0)] via-primary to-[rgba(17,17,17,0)] transition-all duration-1000"></div>
          </div>
          <input
            className="block h-16 w-full rounded border-2 border-zinc-300 bg-white px-3 py-2 font-medium text-primary-text transition-colors placeholder:text-zinc-500 hover:border-primary focus:border-primary focus:outline-none focus:ring-0 focus:ring-offset-0"
            type="text"
            placeholder="Escriba su cargo o área de desempeño en la institución"
            value={responsiblePersonRole}
            onChange={e => setResponsiblePersonRole(e.target.value)}
            required
          />
        </div>
      </section>
    </>
  )
}
