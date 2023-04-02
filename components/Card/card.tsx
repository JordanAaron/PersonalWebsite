import Image from "next/image"

import { CardType } from "../../types/components"

import styles from './card.module.css'

type Props = {
  card: CardType
}

export const Card = ({ card }: Props) => {
  // const { cardImage: { url, description }, cardDescription } = card
  const { cardImage, cardTitle,cardDescription } = card

  return (
    <div className={`${styles.container}`}>
      <div className={`${styles.imageContainer}`} >
        {cardImage && (
          <Image
            src={cardImage?.url}
            alt={cardImage?.description}
            fill
            //TODO: https://nextjs.org/docs/api-reference/next/image#sizes 
          />
        )}
      </div>
      <div className={styles.descriptionContainer}>
          <p className={`${styles.descriptionTitle}`}>Hobbies/Interests</p> 
          <p>{cardTitle}</p>
          <p>{cardDescription}</p>
      </div>
    </div>
  )
}