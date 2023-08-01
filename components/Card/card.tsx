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
      className={`${
        cardImage !== undefined ? styles.containerWithImage : styles.containerNoImage
      }`}>
      {cardImage !== undefined && (
        <div className={styles.imageContainer}>
          <Image
            src={cardImage?.url}
            alt={cardImage?.description}
            width={cardImage?.width}
            height={cardImage?.height}
            priority
            quality={30}
            sizes="(max-width: 768px) 33vw"
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
