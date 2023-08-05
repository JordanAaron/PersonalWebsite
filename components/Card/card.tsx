import Image from 'next/image'
import React from 'react'

import type { CardType } from '../../types/components'
import styles from './card.module.css'
import { CardContent } from './cardContent'

interface Props {
  card: CardType
}

// Tailwind doesn't allow for dynamic values to be used in classes so I've created a CardConfig to hold the colors as an alternative
interface CardConfig {
  brightGreen: { color: string }
  mediumGreen: { color: string }
  darkGreen: { color: string }
  moderateCyan: { color: string }
  pastelCyan: { color: string }
  paleCyan: { color: string }
}

const cardConfig: CardConfig = {
  brightGreen: {
    color: 'bg-brightGreen'
  },
  mediumGreen: {
    color: 'bg-mediumGreen'
  },
  darkGreen: {
    color: 'bg-darkGreen'
  },
  moderateCyan: {
    color: 'bg-moderateCyan'
  },
  pastelCyan: {
    color: 'bg-pastelCyan'
  },
  paleCyan: {
    color: 'bg-paleCyan'
  }
}

export const Card = ({ card }: Props): JSX.Element => {
  const {
    cardImage,
    cardContentEntriesCollection: { items: cardContentEntries },
    cardColor
  } = card

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
      <div
        className={`
        ${styles.descriptionContainer}  
        ${cardConfig[`${cardColor}` as keyof CardConfig].color}
        ${cardImage !== undefined ? 'text-center' : 'h-full p-4'} 
      `}>
        <CardContent cardContentEntries={cardContentEntries} />
      </div>
    </div>
  )
}
