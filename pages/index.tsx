import Container from '../components/container'
import Layout from '../components/layout'
import { getAboutMeSection, getSkillsSection, getWorkExperienceSection } from '../lib/api'
import Head from 'next/head'
import { CMS_NAME } from '../lib/constants'
import { AboutMeSection } from '../components/AboutMeSection/aboutMeSection'
import { AboutMeSectionType, SkillsSectionType, WorkExperienceSectionType } from '../types/sections'
import { WorkExperienceSection } from '../components/WorkExperienceSection/workExperienceSection'
import { SkillsSection } from '../components/SkillsSection/skillsSection'

interface Props {
  preview: boolean,
  aboutMeSection: AboutMeSectionType
  workExperienceSection: WorkExperienceSectionType
  skillsSection: SkillsSectionType
}

export default function Index({ preview, aboutMeSection, workExperienceSection, skillsSection }: Props) {
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
          <SkillsSection sectionTitle={skillsSection.sectionTitle} skills={skillsSection.skillCardsCollection.items} />
          <WorkExperienceSection jobs={workExperienceSection.jobsCollection.items}/>
        </Container>
      </Layout>
    </>
  )
}

export async function getStaticProps({ preview = false }) {
  const aboutMeSection = await getAboutMeSection()
  const workExperienceSection = await getWorkExperienceSection()
  const skillsSection = await getSkillsSection()

  return {
    props: { preview, aboutMeSection, workExperienceSection, skillsSection },
  }
}
