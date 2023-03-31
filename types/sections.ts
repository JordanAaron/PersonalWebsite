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
    profileCard: {
      cardImage: {
        description: string,
        url: string
      },
      cardDescription: string
    }
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