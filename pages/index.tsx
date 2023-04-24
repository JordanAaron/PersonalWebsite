import React from 'react'
import Head from 'next/head'
import type { GetStaticProps } from 'next'

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

import {
  getAboutMeSection,
  getOGImageById,
  getSkillsSection,
  getWorkExperienceSection
} from '../lib/api'

interface Props {
  preview: boolean
  aboutMeSection: SiteIntroSectionType
  workExperienceSection: WorkExperienceSectionType
  skillsSection: SkillsSectionType
  ogImageUrl: string
}

export default function Index({
  preview,
  aboutMeSection,
  workExperienceSection,
  skillsSection,
  ogImageUrl
}: Props): JSX.Element {
  const { siteIntroTitle: title, profileDescription: profile, profileCard } = aboutMeSection

  return (
    <>
      <Layout preview={preview}>
        <Head>
          <title>{`Jordan Quartey`}</title>
          <meta property="og:image" content={ogImageUrl} />
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
  const ogImageUrl = await getOGImageById('5zCpw4GXeeVskfi69cSviW')

  return {
    props: { preview, aboutMeSection, workExperienceSection, skillsSection, ogImageUrl }
  }
}
