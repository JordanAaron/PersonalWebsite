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
    <section className={styles.container}>
      <div className={styles.introContentLayout}>
        <div>
          <p className={`text-darkGreen text-2xl font-semibold`}>{title}</p>
          <div className={`text-brightGreen my-4`}>
            <p>{profile}</p>
          </div>
        </div>
        <div className={`${styles.icons} justify-self-end my-auto`}>
          {contactIcons.map((icon: Icon) => {
            const  { entryTitle, iconImage: { description, url }} = icon
            return (
              <div style={{position: 'relative', width: '50px', height: '50px'}}> {/*TODO: move this to a css file  */}
                <Image 
                  key={entryTitle} 
                  src={url} 
                  alt={description}
                  fill 
                />
              </div>
            )
          })}
        </div>
      </div>
      <div className={styles.card}>
      <Card card={card} />
      </div>
    </section>
  )
}