import React from 'react'
import Image from 'next/image'

import { RichText } from '../RichText/richText'
import type { Job } from '../../types/components'

import styles from './workExperienceSection.module.css'

interface Props {
  jobs: Job[]
}

export const WorkExperienceSection = ({ jobs }: Props): JSX.Element => {
  return (
    <section className={styles.container}>
      <p className="text-darkGreen text-2xl lg:text-3xl font-semibold">Work Experience</p>
      {jobs.map((job: Job) => {
        const { companyName, companyLogo, date, jobTitle, description, imageOnLeft } = job

        return (
          <div key={companyName} className={styles.jobContainer}>
            <div className={`${styles.jobDescriptionContainer} text-brightGreen`}>
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
                    <RichText content={description.json} />
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
