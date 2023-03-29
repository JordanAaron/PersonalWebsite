import Image from 'next/image'

import { Card } from '../Card/card'

import styles from './aboutMeSection.module.css'

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
    <section className='pt-10'>
      <p className={`text-2xl font-semibold ${styles.title}`}>{title}</p>
      <div className={`grid grid-cols-4 gap-x-1 my-4`}>
        <div className={`col-span-3 ${styles.profileContainer}`}>
          <p>{profile}</p>
        </div>
        <div className={`col-span-1 justify-self-end`}>
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
        </div>
      </div>
      <Card card={card} />
    </section>
  )
}