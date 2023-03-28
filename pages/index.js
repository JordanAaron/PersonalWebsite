import Container from '../components/container'
import Layout from '../components/layout'
import { getAboutMeSection, getAllPostsForHome } from '../lib/api'
import Head from 'next/head'
import { CMS_NAME } from '../lib/constants'
import Image from 'next/image'

export default function Index({ preview, aboutMeSection }) {
  const { 
    siteIntroTitle: title, 
    profileDescription: profile, 
    contactIconsCollection: contactIcons, 
    profileCard: { cardImage, cardDescription } 
  } = aboutMeSection


  return (
    <>
      <Layout preview={preview}>
        <Head>
          <title>{`Next.js Blog Example with ${CMS_NAME}`}</title>
        </Head> 
        <Container>
          <p>{title}</p>
          <p>{profile}</p>
          {contactIcons.items.map(item => {
            const  { entryTitle, icon: { description, url }} = item
            return (
              <Image 
                key={entryTitle} 
                alt={description} 
                src={url} 
                width={50} 
                height={50}
              />
            )
          })}
          <Image 
            src={cardImage.url} 
            alt={cardImage.descritpion} 
            width={300} 
            height={200}
          />
          <p>{cardDescription}</p>
        </Container>
      </Layout>
    </>
  )
}

export async function getStaticProps({ preview = false }) {
  const aboutMeSection = await getAboutMeSection()
  return {
    props: { preview, aboutMeSection },
  }
}
