import Container from '../components/container'
import Layout from '../components/layout'
import { getAboutMeSection } from '../lib/api'
import Head from 'next/head'
import { CMS_NAME } from '../lib/constants'
import { AboutMeSection } from '../components/AboutMeSection/aboutMeSection'

interface Props {
  preview: boolean,
  aboutMeSection: {
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
}

export default function Index({ preview, aboutMeSection }: Props) {
  const { 
    siteIntroTitle: title, 
    profileDescription: profile, 
    contactIconsCollection: contactIcons, 
    profileCard
  } = aboutMeSection


  return (
    <>
      <Layout preview={preview}>
        <Head>
          <title>{`Next.js Blog Example with ${CMS_NAME}`}</title>
        </Head> 
        <Container>
          <AboutMeSection 
            title={title}
            profile={profile}
            contactIcons={contactIcons.items}
            card={profileCard}
          />
        </Container>
      </Layout>
    </>
  )
}

export async function getStaticProps({ preview = false }) {
  const aboutMeSection = await getAboutMeSection()
  console.log(aboutMeSection)
  return {
    props: { preview, aboutMeSection },
  }
}
