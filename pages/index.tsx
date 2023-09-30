import type { GetStaticProps } from 'next'
import Head from 'next/head'
import React from 'react'

import { Sections } from '../components/Sections/sections'
import { Container } from '../components/container'
import { Layout } from '../components/layout'
import { getOGImageById, getPageDataById } from '../lib/api'
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
        </Container>
      </Layout>
    </>
  )
}

export const getStaticProps: GetStaticProps = async ({ preview = false }) => {
  const ogImageUrl = await getOGImageById(process.env.NEXT_PUBLIC_HOME_OG_IMAGE_ID)
  const sections = await getPageDataById(process.env.HOMEPAGE_ID)

  return {
    props: {
      preview,
      ogImageUrl,
      sections
    }
  }
}
