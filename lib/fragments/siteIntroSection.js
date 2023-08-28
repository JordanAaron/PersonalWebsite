export const SiteIntroSectionFragment = `
  entryTitle
  siteIntroTitle
  profileDescription
  profileCard {
    entryTitle
    cardImage {
      description
      url
      width
      height
    }
    cardContentEntriesCollection {
      items {
        descriptionHeading
        description {
          json
        }
      }
    }
    cardColor
  }
`
