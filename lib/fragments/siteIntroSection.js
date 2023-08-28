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
    cardColor
    cardTitle
    cardContentEntriesCollection {
      items {
        descriptionHeading
        description {
          json
        }
      }
    }
  }
`
