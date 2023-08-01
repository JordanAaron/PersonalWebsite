import React, { useState } from 'react'

import styles from './carousel.module.css'

interface Props {
  type: string
  carouselContent: Array<string>
  contentSize: number
}

export const Carousel = ({ type, carouselContent }: Props): JSX.Element => {
  const [activeIndex, setActiveIndex] = useState(0)

  const content = carouselContent.map((item, index) => (
    <div
      key={index}
      className={styles.carouselItem}
      style={{ opacity: `${carouselContent[activeIndex] === item ? '100%' : '40%'}` }}>
      {item}
    </div>
  ))

  const updateIndex = (newIndex: number) => {
    if (newIndex < 0) {
      newIndex = 0
    } else if (newIndex >= content.length) {
      newIndex = content.length - 1
    }
    setActiveIndex(newIndex)
  }

  return (
    <div className={styles.carouselContainer}>
      <div className={styles.carousel}>
        <div
          className={styles.inner}
          style={{ transform: `translateX(-${activeIndex * 200}px)`, transition: '1s' }}>
          {content}
        </div>
      </div>
      <input
        type="range"
        defaultValue={0}
        min={0}
        max={content.length - 1}
        onChange={(e) => {
          updateIndex(Number(e.currentTarget.value))
        }}
      />
    </div>
  )
}
