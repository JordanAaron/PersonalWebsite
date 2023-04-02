import { CardType } from "./components"

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
      imageOnLeft: boolean
    }]
  }
}