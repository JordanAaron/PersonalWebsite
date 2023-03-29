import Image from 'next/image'
import { Card } from '../Card/card'

type Image = {
  description: string
  url: string
}

type Icon = {
  entryTitle: string
  iconImage: Image
}

export type CardType = {
  cardImage: Image
  cardDescription: string
} //TODO: Move this to a generic location

type Props = {
  title: string
  profile: string
  contactIcons: Icon[]
  card: CardType
}

export const AboutMeSection = ({ title, profile, contactIcons, card }: Props) => {
  return (
    <section>
      <p className='sm:underline'>{title}</p>
      <p>{profile}</p>
      {contactIcons.map((icon: Icon) => {
        const  { entryTitle, iconImage: { description, url }} = icon
        return (
          <Image 
            key={entryTitle} 
            src={url} 
            alt={description} 
            width={50} 
            height={50}
          />
        )
      })}
      <Card card={card} />
    </section>
  )
}