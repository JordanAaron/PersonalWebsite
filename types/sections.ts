import type { Document } from '@contentful/rich-text-types'

import type { CardType } from './components'

export interface SiteIntroSectionType {
  siteIntroTitle: string
  profileDescription: string
  profileCard: CardType
}

export interface WorkExperienceSectionType {
  entryTitle: string
  sectionTitle: string
  jobsCollection: {
    items: [
      {
        companyName: string
        companyLogo: {
          description: string
          url: string
        }
        date: string
        jobTitle: string
        jobDescription: string
        description: {
          json: Document
        }
        imageOnLeft: boolean
      } // TODO: Update this with the Job type in the components types but be vigilant because these types seem to be different
    ]
  }
}

export interface SkillsSectionType {
  entryTitle: string
  sectionTitle: string
  skillCardsCollection: {
    items: CardType[]
  }
}

export interface Section
  extends SiteIntroSectionType,
    SkillsSectionType,
    WorkExperienceSectionType {
  __typename: string
}
