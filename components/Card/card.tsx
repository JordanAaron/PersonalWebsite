import Image from "next/image"

import { CardType } from "../../types/components"

import styles from './card.module.css'

type Props = {
  card: CardType
}

export const Card = ({ card }: Props) => {
  const { cardImage, cardTitle, cardDescription, cardColor } = card

  const renderCardDescription = (cardColor: string) => {
    switch (cardColor) {
      case 'brightGreen':
        return (
          <div className={`${styles.descriptionContainer} bg-brightGreen ${cardImage ? '' : 'h-full'}`}>
            <p className={`${styles.descriptionTitle}`}>{cardTitle}</p>
            <p>{cardDescription}</p>
          </div>
        )
      case 'mediumGreen': 
        return (
          <div className={`${styles.descriptionContainer} bg-mediumGreen ${cardImage ? '' : 'h-full'}`}>
            <p className={`${styles.descriptionTitle}`}>{cardTitle}</p>
            <p>{cardDescription}</p>
          </div>
        )
      case 'darkGreen': 
        return (
          <div className={`${styles.descriptionContainer} bg-darkGreen ${cardImage ? '' : 'h-full'}`}>
            <p className={`${styles.descriptionTitle}`}>{cardTitle}</p>
            <p>{cardDescription}</p>
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