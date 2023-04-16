import React from 'react'
import Image from 'next/image'

import { Card } from '../Card/card'
import type { CardType, Icon } from '../../types/components'

import styles from './siteIntroSection.module.css'

interface Props {
  title: string
  profile: string
  contactIcons: Icon[]
  card: CardType
}

export const SiteIntroSection = ({ title, profile, contactIcons, card }: Props): JSX.Element => {
  return (
    <section className={styles.container}>
      <div className={styles.introContentLayout}>
        <div>
          <p className={`text-darkGreen lg:text-6xl font-semibold`}>{title}</p>
          <div className={`text-brightGreen lg:text-3xl my-4`}>
            <p>{profile}</p>
          </div>
        </div>
        <div className={`${styles.icons} justify-self-end my-auto`}>
          {contactIcons.map((icon: Icon) => {
            const {
              entryTitle,
              iconImage: { description, url }
            } = icon
            return (
              <div key={entryTitle} style={{ position: 'relative', width: '50px', height: '50px' }}>
                <Image
                  src={url}
                  alt={description}
                  fill
                  // TODO: https://nextjs.org/docs/api-reference/next/image#sizes
                />
              </div>
            )
          })}
        </div>
      </div>
      <div className={styles.card}>
        <Card card={card} />
      </div>
    </section>
  )
}
