import React, { useState } from 'react'

import type { CardContent as CardContentType } from '../../types/components'
import { Carousel } from '../Carousel/carousel'
import { RichText } from '../RichText/richText'
import styles from './card.module.css'

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
          carouselTitle="Some things about me" // TODO: change this to cms
          carouselWidth={100}
          activeItem={activeCard}
          setActiveItem={setActiveCard}>
          {cardContentEntries.map((content, index) => (
            <div
              key={index}
              className={styles.carouselItem}
              style={{
                opacity: `${cardContentEntries[activeCard] === content ? '100%' : '0%'}`,
                width: `${100 / cardContentEntries.length}%`,
                transition: '1s'
              }}>
              <div className={`${styles.descriptionContainer}`}>
                <p className={`${styles.descriptionHeading}`}>{content.descriptionHeading}</p>
                <RichText content={content.description.json} />
              </div>
            </div>
          ))}
        </Carousel>
      ) : (
        <div key={cardContentEntries[0].descriptionHeading}>
          <p className={`${styles.descriptionHeading}`}>
            {cardContentEntries[0].descriptionHeading}
          </p>
          <RichText content={cardContentEntries[0].description.json} />
        </div>
      )}
    </>
  )
}
