// Tailwind doesn't allow for dynamic values to be used in classes so I've created a CardConfig to hold the colors as an alternative

import React from 'react'
import Carousel from 'react-bootstrap/Carousel'

import type { CardContent as CardContentType } from '../../types/components'

import styles from './card.module.css'
import { RichText } from '../RichText/richText'

interface Props {
  cardColor: string
  cardContentEntries: CardContentType[]
  cardImage: boolean
}

interface CardConfig {
  brightGreen: { color: string }
  mediumGreen: { color: string }
  darkGreen: { color: string }
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
  }
}

export const CardContent = ({ cardColor, cardContentEntries, cardImage }: Props): JSX.Element => {
  const hasMultipleEntries = cardContentEntries.length > 1

  return (
    <>
      {hasMultipleEntries ? (
        <Carousel indicators={false} interval={null}>
          {cardContentEntries.map((cardContent: CardContentType) => {
            return (
              <Carousel.Item key={cardContent.cardTitle}>
                <div
                  className={`
                    ${styles.descriptionContainer}  
                    ${cardConfig[`${cardColor}` as keyof CardConfig].color} 
                    ${cardImage ? 'h-60' : 'h-full'}`}>
                  <div
                    style={{
                      display: 'grid',
                      justifyItems: 'center'
                    }}>
                    <p className={`${styles.descriptionTitle}`}>{cardContent.cardTitle}</p>
                    <RichText content={cardContent.cardDescription.json} />
                  </div>
                </div>
              </Carousel.Item>
            )
          })}
        </Carousel>
      ) : (
        <div
          key={cardContentEntries[0].cardTitle}
          className={`
            ${styles.descriptionContainer} 
            ${cardConfig[`${cardColor}` as keyof CardConfig].color} 
            ${cardImage ? '' : 'h-full'}`}>
          <p className={`${styles.descriptionTitle}`}>{cardContentEntries[0].cardTitle}</p>
          <RichText content={cardContentEntries[0].cardDescription.json} />
        </div>
      )}
    </>
  )
}
