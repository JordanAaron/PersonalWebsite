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
        cardTitle
        cardDescription {
          json
        }
      }
    }
    cardColor
  }
`
