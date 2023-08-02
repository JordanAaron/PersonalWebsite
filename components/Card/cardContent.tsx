// Tailwind doesn't allow for dynamic values to be used in classes so I've created a CardConfig to hold the colors as an alternative
import React from 'react'
import BSCarousel from 'react-bootstrap/Carousel'

import type { CardContent as CardContentType } from '../../types/components'
import { Carousel } from '../Carousel/carousel'
import { RichText } from '../RichText/richText'
import styles from './card.module.css'

interface Props {
  cardColor: string
  cardContentEntries: CardContentType[]
  cardImage: boolean
}

interface CardConfig {
  brightGreen: { color: string }
  mediumGreen: { color: string }
  darkGreen: { color: string }
  moderateCyan: { color: string }
  pastelCyan: { color: string }
  paleCyan: { color: string }
}

const cardConfig: CardConfig = {
  brightGreen: {
    color: 'bg-brightGreen'
  },
  mediumGreen: {
    color: 'bg-mediumGreen'
  },
  darkGreen: {
    color: 'bg-darkGreen'
  },
  moderateCyan: {
    color: 'bg-moderateCyan'
  },
  pastelCyan: {
    color: 'bg-pastelCyan'
  },
  paleCyan: {
    color: 'bg-paleCyan'
  }
}

export const CardContent = ({ cardColor, cardContentEntries, cardImage }: Props): JSX.Element => {
  const hasMultipleEntries = cardContentEntries.length > 1

  return (
    <>
      {hasMultipleEntries ? (
        // <BSCarousel indicators={false} interval={null}>
        //   {cardContentEntries.map((cardContent: CardContentType) => {
        //     return (
        //       <BSCarousel.Item key={cardContent.cardTitle}>
        //         <div
        //           className={`
        //             ${styles.descriptionContainer}
        //             ${cardConfig[`${cardColor}` as keyof CardConfig].color}
        //             ${cardImage ? 'h-60' : 'h-full'}
        //             py-2 px-12`}>
        //           <div
        //             style={{
        //               display: 'grid',
        //               justifyItems: 'center'
        //             }}>
        //             <p className={`${styles.descriptionTitle}`}>{cardContent.cardTitle}</p>
        //             <RichText content={cardContent.cardDescription.json} />
        //           </div>
        //         </div>
        //       </BSCarousel.Item>
        //     )
        //   })}
        // </BSCarousel>
        <div className={`bg-moderateCyan`}>
          <Carousel
            type="button"
            carouselContent={['item 1', 'item 2', 'item 3', 'item 4', 'item 5']}
            carouselWidth={100}
          />
        </div>
      ) : (
        <div
          key={cardContentEntries[0].cardTitle}
          className={`
            ${styles.descriptionContainer} 
            ${cardConfig[`${cardColor}` as keyof CardConfig].color} 
            ${cardImage ? '' : 'h-full'}
            p-4`}>
          <p className={`${styles.descriptionTitle}`}>{cardContentEntries[0].cardTitle}</p>
          <RichText content={cardContentEntries[0].cardDescription.json} />
        </div>
      )}
    </>
  )
}
