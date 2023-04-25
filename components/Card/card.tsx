import React from 'react'
import Image from 'next/image'

import type { CardType } from '../../types/components'

import styles from './card.module.css'
import { CardContent } from './cardContent'

interface Props {
  card: CardType
}

export const Card = ({ card }: Props): JSX.Element => {
  const { cardImage, cardContentEntriesCollection: cardContentEntries, cardColor } = card

  return (
    <div
      className={`
      ${cardImage !== undefined ? 'lg:!max-w-md' : 'w-full h-60 lg:h-72'}
        ${styles.container} 
      `}>
      {cardImage !== undefined && (
        <div className={`${styles.imageContainer}`}>
          <Image
            src={cardImage?.url}
            alt={cardImage?.description}
            fill
            sizes="
              (max-width: 540px) 20rem,
              (max-width: 768px) 25rem,
            "
            priority
          />
        </div>
      )}
      <CardContent
        cardColor={cardColor}
        cardContentEntries={cardContentEntries.items}
        cardImage={cardImage !== undefined}
      />
    </div>
  )
}
