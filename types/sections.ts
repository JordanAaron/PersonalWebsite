import type { CardType } from './components'
import type { Document } from '@contentful/rich-text-types'

export interface SiteIntroSectionType {
  siteIntroTitle: string
  profileDescription: string
  contactIconsCollection: {
    items: [
      {
        entryTitle: string
        iconImage: {
          description: string
          url: string
        }
      }
    ]
  }
  profileCard: CardType
}

export interface WorkExperienceSectionType {
  entryTitle: string
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
      }
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
