import React from 'react'
import GitHubIcon from '@mui/icons-material/GitHub'
import LinkedInIcon from '@mui/icons-material/LinkedIn'
import EmailIcon from '@mui/icons-material/Email'

import { Card } from '../Card/card'
import type { CardType } from '../../types/components'

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
          <div className={`text-brightGreen text-xl md:text-2xl lg:text-3xl my-4`}>
            <p>{profile}</p>
          </div>
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
