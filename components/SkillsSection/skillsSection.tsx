import { CardType } from "../../types/components"
import { Card } from "../Card/card"

type Props = {
  sectionTitle: string
  skills: CardType[]
}

export const SkillsSection = ({ sectionTitle, skills }: Props) => {
  return(
    <div>
      <p>{sectionTitle}</p>
      {skills.map((skillCard: CardType) => {
        return(
          <Card card={skillCard}/>
        )
      })}
    </div>
  )
}