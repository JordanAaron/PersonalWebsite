import Image from "next/image"

import { CardType } from "../../types/components"

import styles from './card.module.css'

type Props = {
  card: CardType
}

export const Card = ({ card }: Props) => {
  const { cardImage, cardTitle,cardDescription } = card

  return (
    <div className={`${styles.container}`}>
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
      <div className={styles.descriptionContainer}>
        <p className={`${styles.descriptionTitle}`}>{cardTitle}</p>
        <p>{cardDescription}</p>
      </div>
    </div>
  )
}