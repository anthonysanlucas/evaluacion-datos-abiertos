import { create } from 'zustand'

interface Entity {
  institutionName: string
  institutionType: 'Parish' | 'Cantonal' | 'Prefecture' | null
  contactEmail: string
  responsiblePersonName: string
  responsiblePersonRole: string
  populationServed: number
  participationObjective: string
}

interface EntityStore extends Entity {
  setInstitutionName: (name: string) => void
  setInstitutionType: (type: 'Parish' | 'Cantonal' | 'Prefecture') => void
  setContactEmail: (email: string) => void
  setResponsiblePersonName: (name: string) => void
  setResponsiblePersonRole: (role: string) => void
  setPopulationServed: (population: number) => void
  setParticipationObjective: (objective: string) => void
}

export const useEntityStore = create<EntityStore>(set => ({
  institutionName: '',
  institutionType: null,
  contactEmail: '',
  responsiblePersonName: '',
  responsiblePersonRole: '',
  populationServed: null,
  participationObjective: '',
  setInstitutionName: name => set({ institutionName: name }),
  setInstitutionType: type => set({ institutionType: type }),
  setContactEmail: email => set({ contactEmail: email }),
  setResponsiblePersonName: name => set({ responsiblePersonName: name }),
  setResponsiblePersonRole: role => set({ responsiblePersonRole: role }),
  setPopulationServed: population => set({ populationServed: population }),
  setParticipationObjective: objective => set({ participationObjective: objective })
}))
