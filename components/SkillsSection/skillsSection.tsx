import { CardType } from "../../types/components"
import { Card } from "../Card/card"

import styles from './skillsSection.module.css'

type Props = {
  sectionTitle: string
  skills: CardType[]
}

export const SkillsSection = ({ sectionTitle, skills }: Props) => {
  return(
    <section className={styles.container}>
      <p className="text-darkGreen text-2xl font-semibold my-8">{sectionTitle}</p>
      <div className={styles.skillCardsContainer} >
        {skills.map((skillCard: CardType) => {
          return(
            <Card key={skillCard.entryTitle} card={skillCard}/>
          )
        })}
      </div>
    </section>
  )
}