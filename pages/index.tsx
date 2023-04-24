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

import {
  getAboutMeSection,
  getOGImage,
  getSkillsSection,
  getWorkExperienceSection
} from '../lib/api'
import type { GetStaticProps } from 'next'

interface Props {
  preview: boolean
  aboutMeSection: SiteIntroSectionType
  workExperienceSection: WorkExperienceSectionType
  skillsSection: SkillsSectionType
  ogImageUrl: string | null
}

export default function Index({
  preview,
  aboutMeSection,
  workExperienceSection,
  skillsSection,
  ogImageUrl = null
}: Props): JSX.Element {
  const { siteIntroTitle: title, profileDescription: profile, profileCard } = aboutMeSection

  return (
    <>
      <Layout preview={preview}>
        <Head>
          <title>{`Jordan Quartey`}</title>
          {ogImageUrl !== undefined && ogImageUrl !== null && (
            <meta property="og:image" content={ogImageUrl} />
          )}
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
  const ogImageUrl = await getOGImage(process.env.HOME_OG_IMAGE_ID)

  return {
    props: { preview, aboutMeSection, workExperienceSection, skillsSection, ogImageUrl }
  }
}
