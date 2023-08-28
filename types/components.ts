import type { Document } from '@contentful/rich-text-types'
import type { ImageProps } from 'next/image'

interface Image extends ImageProps {
  description: string
  url: string
}

export interface CardContent {
  descriptionHeading: string
  description: {
    json: Document
  }
}

export interface CardType {
  entryTitle: string
  cardImage?: Image
  cardTitle?: string
  cardContentEntriesCollection: {
    items: CardContent[]
  }
  cardColor: string
}

export interface Job {
  companyName: string
  companyLogo: {
    description: string
    url: string
  }
  date: string
  jobTitle: string
  description: {
    json: Document
  }
  imageOnLeft: boolean
}
