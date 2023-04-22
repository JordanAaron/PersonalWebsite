import React from 'react'
import Head from 'next/head'

import { Container } from '../components/container'
import { Layout } from '../components/layout'
import { SiteIntroSection } from '../components/SiteIntroSection/siteIntroSection'
import { SkillsSection } from '../components/SkillsSection/skillsSection'
import { WorkExperienceSection } from '../components/WorkExperienceSection/workExperienceSection'
import type {
  SiteIntroSectionType,
  SkillsSectionType,
  WorkExperienceSectionType
} from '../types/sections'

import { getAboutMeSection, getSkillsSection, getWorkExperienceSection } from '../lib/api'
import type { GetStaticProps } from 'next'

interface Props {
  preview: boolean
  aboutMeSection: SiteIntroSectionType
  workExperienceSection: WorkExperienceSectionType
  skillsSection: SkillsSectionType
}

export default function Index({
  preview,
  aboutMeSection,
  workExperienceSection,
  skillsSection
}: Props): JSX.Element {
  const { siteIntroTitle: title, profileDescription: profile, profileCard } = aboutMeSection

  return (
    <>
      <Layout preview={preview}>
        <Head>
          <title>{`Jordan Quartey`}</title>
          <meta property="og:image" content="https://jordanquartey.com/api/og" />
        </Head>
        <Container>
          <SiteIntroSection title={title} profile={profile} card={profileCard} />
          <SkillsSection
            sectionTitle={skillsSection.sectionTitle}
            skills={skillsSection.skillCardsCollection.items}
          />
          <WorkExperienceSection jobs={workExperienceSection.jobsCollection.items} />
        </Container>
      </Layout>
    </>
  )
}

export const getStaticProps: GetStaticProps = async ({ preview = false }) => {
  const aboutMeSection = await getAboutMeSection()
  const workExperienceSection = await getWorkExperienceSection()
  const skillsSection = await getSkillsSection()

  return {
    props: { preview, aboutMeSection, workExperienceSection, skillsSection }
  }
}
