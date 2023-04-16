import type { Document } from '@contentful/rich-text-types'

interface Image {
  description: string
  url: string
}

export interface Icon {
  entryTitle: string
  iconImage: Image
}

export interface CardContent {
  cardTitle: string
  cardDescription: {
    json: Document
  }
}

export interface CardType {
  entryTitle: string
  cardImage?: Image
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
