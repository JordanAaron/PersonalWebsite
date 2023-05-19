export const WorkExperienceSectionFragment = `
  entryTitle
  sectionTitle
  jobsCollection {
    items {
      companyName
      jobTitle
      date
      description {
        json
      }
      imageOnLeft
      companyLogo{
        description
        url
      }
    }
  }
`
