import type { CardWithImageType } from './components'

export interface SiteIntroSectionType {
  siteIntroTitle: string
  profileDescription: string
  profileCard: CardWithImageType
}

export interface Section extends SiteIntroSectionType {
  __typename: string
}
