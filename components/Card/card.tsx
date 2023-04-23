import React from 'react'
import Image from 'next/image'

import type { CardType } from '../../types/components'

import styles from './card.module.css'
import { CardContent } from './cardContent'

interface Props {
  card: CardType
}

// TODO: Look at tailwind styles for responsiveness

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
            // TODO: https://nextjs.org/docs/api-reference/next/image#sizes
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
