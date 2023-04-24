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
        }`
      },
      body: JSON.stringify({ query })
    }
  ).then((response) => response.json())
}

function extractOGImageUrl(fetchResponse) {
  return fetchResponse?.data?.asset?.url
}

export async function getOGImage(id) {
  const entry = await fetchGraphQL(
    `
      query {
        asset(id:"${id}") {
          title
          url
        }
      }
    `
  )
  return extractOGImageUrl(entry)
}

const SiteIntroSectionQuery = `
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

function extractSiteIntroSection(fetchResponse) {
  return fetchResponse?.data?.websiteIntroSectionCollection?.items?.[0]
}

export async function getAboutMeSection() {
  const entry = await fetchGraphQL(
    `
      query {
        websiteIntroSectionCollection(preview: false) {
          items {
            ${SiteIntroSectionQuery}
          }
        }
      }
    `
  )
  return extractSiteIntroSection(entry)
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
