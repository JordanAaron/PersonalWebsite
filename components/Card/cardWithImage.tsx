import Image from 'next/image'
import React from 'react'

import type { CardWithImageType } from '../../types/components'
import { CardContent } from './cardContent'
import styles from './cardWithImage.module.css'

interface Props {
  card: CardWithImageType
}

export const CardWithImage = ({ card }: Props): JSX.Element => {
  const {
    cardImage,
    cardColor,
    cardTitle,
    cardContentEntriesCollection: { items: cardContentEntries }
  } = card

  return (
    <div className={styles.container}>
      <div>
        <Image
          src={cardImage.url}
          alt={cardImage.description}
          width={cardImage.width}
          height={cardImage.height}
          priority
          quality={30}
          sizes="(max-width: 768px) 33vw"
        />
      </div>
      <div className={`${CardColorConfig[`${cardColor}` as keyof CardColorConfigType].color}`}>
        {Boolean(cardTitle) && (
          <>
            <p className={styles.cardTitle}>{cardTitle}</p>
            <hr className={styles.cardTitleUnderline} />
          </>
        )}
        <CardContent cardContentEntries={cardContentEntries} />
      </div>
    </div>
  )
}

// Tailwind doesn't allow for dynamic values to be used in classes so I've created a CardConfig to hold the colors as an alternative

interface CardColorConfigType {
  brightGreen: { color: string }
  mediumGreen: { color: string }
  darkGreen: { color: string }
  moderateCyan: { color: string }
  pastelCyan: { color: string }
  paleCyan: { color: string }
}

const CardColorConfig: CardColorConfigType = {
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
