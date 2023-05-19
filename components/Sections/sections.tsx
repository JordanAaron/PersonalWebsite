import type {
  SiteIntroSectionType,
  SkillsSectionType,
  WorkExperienceSectionType
} from '../../types/sections'

import { SiteIntroSection } from '../SiteIntroSection/siteIntroSection'
import { SkillsSection } from '../SkillsSection/skillsSection'
import { WorkExperienceSection } from '../WorkExperienceSection/workExperienceSection'

import styles from './sections.module.css'

interface SectionType extends SiteIntroSectionType, SkillsSectionType, WorkExperienceSectionType {
  __typename: string
}

interface Props {
  sections: SectionType[]
}

// TODO: You need to filter the data you're pulling through into their rightful sections

export const Sections = ({ sections }: Props): JSX.Element => {
  return (
    <div className={styles.container}>
      {sections.map((section) => {
        switch (section.__typename) {
          case 'WebsiteIntroSection':
            return (
              <div key={section.__typename} className={styles.sectionWrapper}>
                <SiteIntroSection
                  title={section.siteIntroTitle}
                  profile={section.profileDescription}
                  card={section.profileCard}
                />
              </div>
            )
          case 'SkillsSection':
            return (
              <div key={section.__typename} className={styles.sectionWrapper}>
                <SkillsSection
                  sectionTitle={section.sectionTitle}
                  skills={section.skillCardsCollection.items}
                />
              </div>
            )
          case 'WorkExperienceSection':
            return (
              <div key={section.__typename} className={styles.sectionWrapper}>
                <WorkExperienceSection
                  sectionTitle={section.sectionTitle}
                  jobs={section.jobsCollection.items}
                />
              </div>
            )
          default:
            return null
        }
      })}
    </div>
  )
}
