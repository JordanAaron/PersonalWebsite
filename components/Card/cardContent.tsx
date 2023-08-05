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
                <div
                  style={{
                    display: 'grid',
                    justifyItems: 'center'
                  }}>
                  <p className={`${styles.descriptionTitle}`}>{content.cardTitle}</p>
                  <RichText content={content.cardDescription.json} />
                </div>
              </div>
            </div>
          ))}
        </Carousel>
      ) : (
        <div key={cardContentEntries[0].cardTitle}>
          <p className={`${styles.descriptionTitle}`}>{cardContentEntries[0].cardTitle}</p>
          <RichText content={cardContentEntries[0].cardDescription.json} />
        </div>
      )}
    </>
  )
}
