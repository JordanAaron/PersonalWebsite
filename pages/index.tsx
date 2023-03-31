import Container from '../components/container'
import Layout from '../components/layout'
import { getAboutMeSection, getWorkExperienceSection } from '../lib/api'
import Head from 'next/head'
import { CMS_NAME } from '../lib/constants'
import { AboutMeSection } from '../components/AboutMeSection/aboutMeSection'
import { AboutMeSectionType, WorkExperienceSectionType } from '../types/sections'

interface Props {
  preview: boolean,
  aboutMeSection: AboutMeSectionType
  workExperienceSection: WorkExperienceSectionType
}

export default function Index({ preview, aboutMeSection, workExperienceSection }: Props) {
  const { 
    siteIntroTitle: title, 
    profileDescription: profile, 
    contactIconsCollection: contactIcons, 
    profileCard
  } = aboutMeSection

  console.log(workExperienceSection)

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
  const workExperienceSection = await getWorkExperienceSection()


  return {
    props: { preview, aboutMeSection, workExperienceSection },
  }
}
