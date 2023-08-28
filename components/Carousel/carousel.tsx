import ArrowLeftIcon from '@mui/icons-material/ArrowLeft'
import ArrowRightIcon from '@mui/icons-material/ArrowRight'
import React, { type Dispatch, type ReactNode, type SetStateAction } from 'react'

import styles from './carousel.module.css'

interface Props {
  children: ReactNode
  inputType: 'button' | 'slider'
  contentSize: number
  carouselTitle?: string // TODO: This probably shouldn't be placed here. Use case only for siteIntroCard content. Fix it
  carouselWidth: number
  activeItem: number
  setActiveItem: Dispatch<SetStateAction<number>>
}

export const Carousel = ({
  children,
  inputType,
  contentSize,
  carouselTitle,
  carouselWidth,
  activeItem,
  setActiveItem
}: Props): JSX.Element => {
  const firstItem = 0
  const lastItem = contentSize - 1

  const updateIndex = (newIndex: number): void => {
    if (newIndex < 0) {
      newIndex = firstItem
    } else if (newIndex >= contentSize) {
      newIndex = lastItem
    }
    setActiveItem(newIndex)
  }

  return (
    <>
      {/* {Boolean(carouselTitle) && (
        <>
          <p className={styles.carouselTitle}>{carouselTitle}</p>
          <hr className={styles.carouselTitleUnderline} />
        </>
      )} */}
      {inputType === 'button' ? (
        <div className={styles.buttonCarouselContainer}>
          <button
            aria-label="Left arrow button"
            style={{
              opacity: `${activeItem === firstItem ? '20%' : '100%'}`,
              cursor: `${activeItem === firstItem ? 'default' : 'pointer'}`,
              transition: '1s'
            }}
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
          <button
            aria-label="Right arrow button"
            style={{
              opacity: `${activeItem === lastItem ? '20%' : '100%'}`,
              cursor: `${activeItem === lastItem ? 'default' : 'pointer'}`,
              transition: '1s'
            }}
            onClick={() => {
              updateIndex(activeItem + 1)
            }}>
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
