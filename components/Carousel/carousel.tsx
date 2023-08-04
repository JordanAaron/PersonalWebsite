import ArrowLeftIcon from '@mui/icons-material/ArrowLeft'
import ArrowRightIcon from '@mui/icons-material/ArrowRight'
import React, { Dispatch, ReactNode, SetStateAction } from 'react'

import styles from './carousel.module.css'

interface Props {
  inputType: 'button' | 'slider'
  contentSize: number
  carouselWidth: number
  children: ReactNode
  activeItem: number
  setActiveItem: Dispatch<SetStateAction<number>>
}

export const Carousel = ({
  inputType,
  contentSize,
  carouselWidth,
  children,
  activeItem,
  setActiveItem
}: Props): JSX.Element => {
  const updateIndex = (newIndex: number) => {
    if (newIndex < 0) {
      newIndex = 0
    } else if (newIndex >= contentSize) {
      newIndex = contentSize - 1
    }
    setActiveItem(newIndex)
  }

  return (
    <>
      {inputType === 'button' ? (
        <div className={styles.carouselContainerButton}>
          <button
            onClick={() => {
              updateIndex(activeItem - 1)
            }}>
            <ArrowLeftIcon />
          </button>
          <div className={styles.carousel} style={{ width: `${carouselWidth}%` }}>
            <div
              className={styles.inner}
              style={{
                width: `${100 * contentSize}%`,
                transform: `translateX(-${activeItem * (100 / contentSize)}%)`,
                transition: '2s'
              }}>
              {children}
            </div>
          </div>
          <button onClick={() => updateIndex(activeItem + 1)}>
            <ArrowRightIcon />
          </button>
        </div>
      ) : (
        <div className={styles.carouselContainerSlider}>
          <div className={styles.carousel} style={{ width: `${carouselWidth}%` }}>
            <div
              className={styles.inner}
              style={{
                width: `${100 * contentSize}%`,
                transform: `translateX(-${activeItem * (100 / contentSize)}%)`,
                transition: '2s'
              }}>
              {children}
            </div>
          </div>
          <input
            type="range"
            defaultValue={0}
            min={0}
            max={contentSize - 1}
            onChange={(e) => {
              updateIndex(Number(e.currentTarget.value))
            }}
          />
        </div>
      )}
    </>
  )
}
