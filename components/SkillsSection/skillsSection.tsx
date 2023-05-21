import React from 'react'

import type { CardType } from '../../types/components'
import { Card } from '../Card/card'

import styles from './skillsSection.module.css'

interface Props {
  sectionTitle: string
  skills: CardType[]
}

export const SkillsSection = ({ sectionTitle, skills }: Props): JSX.Element => {
  return (
    <section>
      <p className={styles.sectionTitle}>{sectionTitle}</p>
      <div className={styles.skillCardsContainer}>
        {skills.map((skillCard: CardType) => {
          return <Card key={skillCard.entryTitle} card={skillCard} />
        })}
      </div>
    </section>
  )
}
