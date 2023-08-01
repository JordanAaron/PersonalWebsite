import React from 'react'
import Image from 'next/image'

import { RichText } from '../RichText/richText'
import type { Job } from '../../types/components'

import styles from './workExperienceSection.module.css'

interface Props {
  sectionTitle: string
  jobs: Job[]
}

export const WorkExperienceSection = ({ sectionTitle, jobs }: Props): JSX.Element => {
  return (
    <section>
      <p className={styles.sectionTitle}>{sectionTitle}</p>

      {jobs.map((job: Job) => {
        const { companyName, companyLogo, date, jobTitle, description, imageOnLeft } = job

        return (
          <div key={companyName} className={styles.jobContainer}>
            <div className={`${styles.jobDescriptionContainer} text-vibrantCyan`}>
              {imageOnLeft ? (
                <>
                  <div className={`${styles.jobImage} relative lg:w-full h-32 lg:h-auto`}>
                    <Image src={companyLogo.url} alt={companyLogo.description} fill priority />
                  </div>
                  <div className={`${styles.jobDetails}`}>
                    <p>{jobTitle}</p>
                    <p>{companyName}</p>
                    <p>{date}</p>
                  </div>
                  <br />
                  <div className={`${styles.jobDescription}`}>
                    <hr />
                    <div className={styles.descriptionText}>
                      <RichText content={description.json} />
                    </div>
                  </div>
                </>
              ) : (
                // TODO: Fix this right side version
                <>
                  <div className={`${styles.jobDetails} text-brightGreen`}>
                    <p>{jobTitle}</p>
                    <p>{companyName}</p>
                    <p>{date}</p>
                  </div>
                  <div style={{ position: 'relative', width: '100px', height: '100px' }}>
                    <Image src={companyLogo.url} alt={companyLogo.description} fill priority />
                  </div>
                </>
              )}
            </div>
          </div>
        )
      })}
    </section>
  )
}
