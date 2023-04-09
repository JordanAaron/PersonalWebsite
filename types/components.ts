import { Document } from "@contentful/rich-text-types"

type Image = {
  description: string
  url: string
}

type CardContent = {
  cardTitle: string
  cardDescription: {
    json: Document
  }
}

export type CardType = {
  entryTitle: string
  cardImage?: Image
  cardContentEntriesCollection: {
    items: CardContent[]
  }
  cardColor: string
}

export type Job = {
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