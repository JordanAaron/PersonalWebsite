import { Document } from "@contentful/rich-text-types"

type Image = {
  description: string
  url: string
}

export type CardType = {
  entryTitle: string
  cardImage?: Image
  cardTitle: string
  cardDescription: string
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