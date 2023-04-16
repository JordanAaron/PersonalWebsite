// Tailwind doesn't allow for dynamic values to be used in classes so this function is a temp solution to use values passed in from contentful

import React from 'react'

import type { CardContent as CardContentType } from '../../types/components'

import styles from './card.module.css'
import { RichText } from '../RichText/richText'

interface Props {
  cardColor: string
  cardContentEntries: {
    items: CardContentType[]
  }
  cardImage: boolean
}

export const CardContent = ({ cardColor, cardContentEntries, cardImage }: Props): JSX.Element => {
  switch (cardColor) {
    case 'brightGreen':
      return (
        <>
          {cardContentEntries.items.map((cardContent): JSX.Element => {
            return (
              <div
                key={cardContent.cardTitle}
                className={`${styles.descriptionContainer} bg-brightGreen ${
                  cardImage ? '' : 'h-full'
                }`}>
                <p className={`${styles.descriptionTitle}`}>{cardContent.cardTitle}</p>
                <RichText content={cardContent.cardDescription.json} />
                {/* TODO: clean this content parameter up */}
              </div>
            )
          })}
        </>
      )
    case 'mediumGreen':
      return (
        <>
          {cardContentEntries.items.map(
            (cardContent): JSX.Element => (
              <div
                key={cardContent.cardTitle}
                className={`${styles.descriptionContainer} bg-mediumGreen ${
                  cardImage ? '' : 'h-full'
                }`}>
                <p className={`${styles.descriptionTitle}`}>{cardContent.cardTitle}</p>
                <RichText content={cardContent.cardDescription.json} />
                {/* TODO: clean this content parameter up */}
              </div>
            )
          )}
        </>
      )
    case 'darkGreen':
      return (
        <>
          {cardContentEntries.items.map(
            (cardContent): JSX.Element => (
              <div
                key={cardContent.cardTitle}
                className={`${styles.descriptionContainer} bg-darkGreen ${
                  cardImage ? '' : 'h-full'
                }`}>
                <p className={`${styles.descriptionTitle}`}>{cardContent.cardTitle}</p>
                <RichText content={cardContent.cardDescription.json} />
                {/* TODO: clean this content parameter up */}
              </div>
            )
          )}
        </>
      )
    default:
      throw new Error("Color doesn't exist")
  }
}
