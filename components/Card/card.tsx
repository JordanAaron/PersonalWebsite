import React from "react"
import Image from "next/image"

import { CardType } from "../../types/components"

import styles from './card.module.css'
import { RichText } from "../RichText/richText"

type Props = {
  card: CardType
}

export const Card = ({ card }: Props) => {
  const { 
    cardImage, 
    cardContentEntriesCollection: cardContentEntries,
    cardColor
  } = card

  const renderCardDescription = (cardColor: string) => {
    switch (cardColor) {
      case 'brightGreen':
        return (
          <div className={`${styles.descriptionContainer} bg-brightGreen ${cardImage ? '' : 'h-full'}`}>
            {cardContentEntries.items.map(( cardContent ) => {
              return (
                <>
                  <p className={`${styles.descriptionTitle}`}>{cardContent.cardTitle}</p>
                  <RichText content={cardContent.cardDescription.json}/> 
                  {/* TODO: clean this content parameter up */}
                </>
              )
            })}
          </div>
        )
      case 'mediumGreen': 
        return (
          <div className={`${styles.descriptionContainer} bg-mediumGreen ${cardImage ? '' : 'h-full'}`}>
            {cardContentEntries.items.map(( cardContent ) => {
              return (
                <>
                  <p className={`${styles.descriptionTitle}`}>{cardContent.cardTitle}</p>
                  <RichText content={cardContent.cardDescription.json}/> 
                  {/* TODO: clean this content parameter up */}
                </>
              )
            })}
          </div>
        )
      case 'darkGreen': 
        return (
          <div className={`${styles.descriptionContainer} bg-darkGreen ${cardImage ? '' : 'h-full'}`}>
            {cardContentEntries.items.map(( cardContent ) => {
              return (
                <>
                  <p className={`${styles.descriptionTitle}`}>{cardContent.cardTitle}</p>
                  <RichText content={cardContent.cardDescription.json}/> 
                  {/* TODO: clean this content parameter up */}
                </>
              )
            })}
          </div>
        )
      default:
        break;
    }
  }

  return (
    <div className={`${styles.container} ${cardImage ? '' : 'w-full h-60 lg:h-72'}`}>
      {cardImage && (
        <div className={`${styles.imageContainer}`} >
            <Image
              src={cardImage?.url}
              alt={cardImage?.description}
              fill
              //TODO: https://nextjs.org/docs/api-reference/next/image#sizes 
            />
        </div>
      )}

      {renderCardDescription(cardColor)}
    </div>
  )
}