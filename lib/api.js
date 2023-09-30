import { SiteIntroSectionFragment } from './fragments'

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

export async function getOGImageById(id) {
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

function extractPageData(fetchResponse) {
  return fetchResponse?.data?.page?.sectionsCollection?.items
}

export async function getPageDataById(id) {
  const entry = await fetchGraphQL(
    `
    query {
      page(id: "${id}") {
        sectionsCollection {
          items {
            __typename
            ... on WebsiteIntroSection {
              ${SiteIntroSectionFragment}
            }
          }
        }
      }
    }
  `
  )

  return extractPageData(entry)
}
