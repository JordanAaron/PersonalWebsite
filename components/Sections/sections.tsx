import type { SiteIntroSectionType } from '../../types/sections'
import { SiteIntroSection } from '../SiteIntroSection/siteIntroSection'
import styles from './sections.module.css'

interface SectionType extends SiteIntroSectionType {
  __typename: string
}

interface Props {
  sections: SectionType[]
}

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
          default:
            return null
        }
      })}
    </div>
  )
}
