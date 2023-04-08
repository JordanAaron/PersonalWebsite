async function fetchGraphQL(query, preview = false) {
  return fetch(
    `https://graphql.contentful.com/content/v1/spaces/${process.env.CONTENTFUL_SPACE_ID}`,
    {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${
          preview
            ? process.env.CONTENTFUL_PREVIEW_ACCESS_TOKEN
            : process.env.CONTENTFUL_ACCESS_TOKEN
        }`,
      },
      body: JSON.stringify({ query }),
    }
  ).then((response) => response.json())
}

const AboutMeSectionQuery = `
  entryTitle
  siteIntroTitle
  profileDescription
  contactIconsCollection {
    items{
      entryTitle
      iconImage {
        description
        url
      }
    }
  }
  profileCard{
    entryTitle
    cardImage {
      description
      url
    }
    cardTitle
    cardDescription
    cardColor
  }
`

function extractAboutMeSection(fetchResponse) {
  return fetchResponse?.data?.websiteIntroSectionCollection?.items?.[0]
}

export async function getAboutMeSection() {
  const entry = await fetchGraphQL(
    `
      query {
        websiteIntroSectionCollection(preview: false) {
          items {
            ${AboutMeSectionQuery}
          }
        }
      }
    `
  )
  return extractAboutMeSection(entry)
}

const WorkExperienceSectionQuery = `
  entryTitle
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

function extractWorkExperienceSection(fetchResponse) {
  return fetchResponse?.data?.workExperienceSectionCollection?.items?.[0]
}

export async function getWorkExperienceSection() {
  const entry = await fetchGraphQL(
    `
    query{
      workExperienceSectionCollection(preview: false) {
        items {
          ${WorkExperienceSectionQuery}
        }
      }
    }
    `
  )

  return extractWorkExperienceSection(entry)
}

const SkillsSectionQuery = `
  entryTitle
  sectionTitle
  skillCardsCollection {
    items {
      entryTitle
      cardTitle
      cardDescription
      cardColor
    }
  }
` 

function extractSkillsSection(fetchResponse) {
  return fetchResponse?.data?.skillsSectionCollection?.items?.[0]
}

export async function getSkillsSection() {
  const entry = await fetchGraphQL(
    `
      query{
        skillsSectionCollection(preview: false) {
          items {
            ${SkillsSectionQuery}
          }
        }
      }
    `
  )

  return extractSkillsSection(entry)
}
