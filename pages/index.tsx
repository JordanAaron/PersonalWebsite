import type { GetStaticProps } from 'next'
import Head from 'next/head'
import React from 'react'

import { Carousel } from '../components/Carousel/carousel'
import { Sections } from '../components/Sections/sections'
import { Container } from '../components/container'
import { Layout } from '../components/layout'
import { getOGImageById, getPageDataByID } from '../lib/api'
import type { Section } from '../types/sections'

interface Props {
  preview: boolean
  ogImageUrl: string
  sections: Section[]
}

export default function Index({ preview, ogImageUrl, sections }: Props): JSX.Element {
  return (
    <>
      <Layout preview={preview}>
        <Head>
          <title>{`Jordan Quartey`}</title>
          <meta property="og:image" content={ogImageUrl} />
        </Head>
        <Container>
          <Sections sections={sections} />
          <Carousel
            type=""
            carouselContent={['item 1', 'item 2', 'item 3', 'item 4', 'item 5']}
            contentSize={200}
          />
        </Container>
      </Layout>
    </>
  )
}

export const getStaticProps: GetStaticProps = async ({ preview = false }) => {
  const ogImageUrl = await getOGImageById(process.env.NEXT_PUBLIC_HOME_OG_IMAGE_ID)
  const sections = await getPageDataByID(process.env.HOMEPAGE_ID)

  return {
    props: {
      preview,
      ogImageUrl,
      sections
    }
  }
}
