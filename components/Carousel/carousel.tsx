import ArrowLeftIcon from '@mui/icons-material/ArrowLeft'
import ArrowRightIcon from '@mui/icons-material/ArrowRight'
import React, { useState } from 'react'

import styles from './carousel.module.css'

interface Props {
  type: 'button' | 'inputRange'
  carouselContent: Array<string>
  carouselWidth: number
}

export const Carousel = ({ type, carouselContent, carouselWidth }: Props): JSX.Element => {
  const [activeIndex, setActiveIndex] = useState(0)

  const content = carouselContent.map((item, index) => (
    <div
      key={index}
      className={styles.carouselItem}
      style={{
        opacity: `${carouselContent[activeIndex] === item ? '100%' : '0%'}`
      }}>
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
    <>
      {type === 'button' ? (
        <div className={styles.carouselContainer}>
          <button
            onClick={() => {
              updateIndex(activeIndex - 1)
            }}>
            <ArrowLeftIcon />
          </button>
          <div className={styles.carousel} style={{ width: `${carouselWidth}%` }}>
            <div
              className={styles.inner}
              style={{
                width: `${100 * carouselContent.length}%`,
                transform: `translateX(-${activeIndex * 20}%)`,
                transition: '2s'
              }}>
              {content}
            </div>
          </div>
          <button onClick={() => updateIndex(activeIndex + 1)}>
            <ArrowRightIcon />
          </button>
        </div>
      ) : (
        <div className={styles.carouselContainer}>
          <div className={styles.carousel} style={{ width: `${carouselWidth}%` }}>
            <div
              className={styles.inner}
              style={{
                width: `${100 * carouselContent.length}%`,
                transform: `translateX(-${activeIndex * 20}%)`,
                transition: '2s'
              }}>
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
      )}
    </>
  )
}

// const ProjectSectionsCarousel = (): JSX.Element => {
//   return (
//     <div className={styles.carouselContainer}>
//       <div className={styles.carousel} style={{ width: `${carouselWidth}%` }}>
//         <div
//           className={styles.inner}
//           style={{
//             width: `${100 * carouselContent.length}%`,
//             transform: `translateX(-${activeIndex * 20}%)`,
//             transition: '2s'
//           }}>
//           {content}
//         </div>
//       </div>
//       <input
//         type="range"
//         defaultValue={0}
//         min={0}
//         max={content.length - 1}
//         onChange={(e) => {
//           updateIndex(Number(e.currentTarget.value))
//         }}
//       />
//     </div>
//   )
// }
