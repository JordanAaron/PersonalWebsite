import EmailIcon from '@mui/icons-material/Email'
import GitHubIcon from '@mui/icons-material/GitHub'
import LinkedInIcon from '@mui/icons-material/LinkedIn'
import React from 'react'

import type { CardType } from '../../types/components'
import { Card } from '../Card/card'
import styles from './siteIntroSection.module.css'

interface Props {
  title: string
  profile: string
  card: CardType
}

export const SiteIntroSection = ({ title, profile, card }: Props): JSX.Element => {
  return (
    <section className={styles.container}>
      <div className={styles.introContentLayout}>
        <div>
          <p className={styles.title}>{title}</p>
          <p className={styles.description}>{profile}</p>
        </div>
        <div className={`${styles.iconsContainer} my-auto justify-self-end	`}>
          <a href="https://github.com/JordanAaron" target="_blank" rel="noreferrer">
            <GitHubIcon className={styles.icon} sx={{ fontSize: 50 }} />
          </a>
          <a href="https://www.linkedin.com/in/jordanquartey" target="_blank" rel="noreferrer">
            <LinkedInIcon className={styles.icon} sx={{ fontSize: 50 }} />
          </a>
          <a href="mailto:jaquartey@hotmail.com" rel="noreferrer">
            <EmailIcon className={styles.icon} sx={{ fontSize: 50 }} />
          </a>
        </div>
      </div>
      <Card card={card} />
    </section>
  )
}
