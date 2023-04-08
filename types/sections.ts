import { CardType } from "./components"
import { Document } from '@contentful/rich-text-types'

export type AboutMeSectionType = {
  siteIntroTitle: string,
    profileDescription: string,
    contactIconsCollection: {
      items: [{
        entryTitle: string,
        iconImage: {
          description: string,
          url: string
        }
      }]
    },
    profileCard: CardType
}

export type WorkExperienceSectionType = {
  entryTitle: string
  jobsCollection: {
    items: [{
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
    }]
  }
}

export type SkillsSectionType = {
  entryTitle: string
  sectionTitle: string
  skillCardsCollection: {
    items: CardType[]
  }
}