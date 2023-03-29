import Image from "next/image"
import { CardType } from "../AboutMeSection/aboutMeSection"

type Props = {
  card: CardType
}

export const Card = ({ card }: Props) => {
  const { cardImage: { url, description }, cardDescription } = card
  return (
    <>
      <Image
        src={url}
        alt={description}
        width={300}
        height={200}
      />
      <p>{cardDescription}</p>
    </>
  )
}