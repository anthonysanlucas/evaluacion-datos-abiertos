import { create } from 'zustand'

interface Entity {
  institutionName: string
  institutionType: 'Parish' | 'Cantonal' | 'Prefecture' | null
  contactEmail: string
  responsiblePersonName: string
  responsiblePersonLastName: string
  responsiblePersonRole: string
}

interface EntityStore extends Entity {
  setInstitutionName: (name: string) => void
  setInstitutionType: (type: 'Parish' | 'Cantonal' | 'Prefecture') => void
  setContactEmail: (email: string) => void
  setResponsiblePersonName: (name: string) => void
  setResponsiblePersonLastName: (role: string) => void
  setResponsiblePersonRole: (population: string) => void
}

export const useEntityStore = create<EntityStore>(set => ({
  institutionName: '',
  institutionType: null,
  contactEmail: '',
  responsiblePersonName: '',
  responsiblePersonLastName: '',
  responsiblePersonRole: '',
  setInstitutionName: name => set({ institutionName: name }),
  setInstitutionType: type => set({ institutionType: type }),
  setContactEmail: email => set({ contactEmail: email }),
  setResponsiblePersonName: name => set({ responsiblePersonName: name }),
  setResponsiblePersonLastName: lastname => set({ responsiblePersonLastName: lastname }),
  setResponsiblePersonRole: role => set({ responsiblePersonRole: role })
}))
