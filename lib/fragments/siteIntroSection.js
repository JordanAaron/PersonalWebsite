export const SiteIntroSectionFragment = `
  entryTitle
  siteIntroTitle
  profileDescription
  profileCard {
    entryTitle
    cardImage {
      description
      url
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
