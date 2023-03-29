import Image from "next/image"

import { CardType } from "../AboutMeSection/aboutMeSection"

import styles from './card.module.css'

type Props = {
  card: CardType
}

export const Card = ({ card }: Props) => {
  const { cardImage: { url, description }, cardDescription } = card
  return (
    <div className={`my-10`}>
      <div className={styles.imageContainer} >
        <Image
          src={url}
          alt={description}
          fill
        />
      </div>
      <div className={styles.descriptionContainer}>
        {/* TODO: Create an entry in contentful for a card description title */}
          <p style={{fontSize: "1.5rem", marginBottom: "1rem"}}>Hobbies/Interests</p> 
          <p>{cardDescription}</p>
      </div>
    </div>
  )
}