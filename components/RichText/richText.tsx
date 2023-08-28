import { type Options, documentToReactComponents } from '@contentful/rich-text-react-renderer'
import { BLOCKS, type Document, MARKS } from '@contentful/rich-text-types'
import React, { type ReactNode } from 'react'

import styles from './richText.module.css'

interface Props {
  content: Document
  options?: Options
}

const defaultOptions: Options = {
  renderMark: {
    [MARKS.BOLD]: (text: ReactNode) => <strong>{text}</strong>,
    [MARKS.ITALIC]: (text: ReactNode) => <i>{text}</i>,
    [MARKS.UNDERLINE]: (text: ReactNode) => <u>{text}</u>
  },
  renderNode: {
    [BLOCKS.PARAGRAPH]: (node, children) => <p>{children}</p>,
    [BLOCKS.UL_LIST]: (node, children) => <ul className={styles.unorderedList}>{children}</ul>,
    [BLOCKS.LIST_ITEM]: (node, children) => <li>{children}</li>
  }
}

export const RichText = ({ content, options }: Props): JSX.Element => {
  return <>{documentToReactComponents(content, options ?? defaultOptions)}</>
}
