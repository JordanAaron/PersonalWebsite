import React, { useState } from 'react'

import type { CardContent as CardContentType } from '../../types/components'
import { Carousel } from '../Carousel/carousel'
import { RichText } from '../RichText/richText'
import styles from './cardContent.module.css'

interface Props {
  cardContentEntries: CardContentType[]
}

export const CardContent = ({ cardContentEntries }: Props): JSX.Element => {
  const hasMultipleEntries = cardContentEntries.length > 1

  const [activeCard, setActiveCard] = useState(0)

  return (
    <>
      {hasMultipleEntries ? (
        <Carousel
          inputType="button"
          contentSize={cardContentEntries.length}
          carouselWidth={100}
          activeItem={activeCard}
          setActiveItem={setActiveCard}>
          {cardContentEntries.map((content, index) => (
            <div
              key={index}
              style={{
                opacity: `${cardContentEntries[activeCard] === content ? '100%' : '0%'}`,
                width: `${100 / cardContentEntries.length}%`,
                transition: '1s'
              }}>
              <p className={`${styles.descriptionHeading}`}>{content.descriptionHeading}</p>
              <RichText content={content.description.json} />
            </div>
          ))}
        </Carousel>
      ) : (
        <div>
          <p className={`${styles.descriptionHeading}`}>
            {cardContentEntries[0].descriptionHeading}
          </p>
          <RichText content={cardContentEntries[0].description.json} />
        </div>
      )}
    </>
  )
}
