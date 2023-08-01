import React, { type ReactNode } from 'react'

import { type Options, documentToReactComponents } from '@contentful/rich-text-react-renderer'
import { type Document, BLOCKS, MARKS } from '@contentful/rich-text-types'

interface Props {
  content: Document
  options?: Options
}

const Bold = ({ children }: any): JSX.Element => <strong>{children}</strong>
const Italic = ({ children }: any): JSX.Element => <i>{children}</i>
const Underlined = ({ children }: any): JSX.Element => <p className="underline">{children}</p>

const Text = ({ children }: any): JSX.Element => <p className="align-center my-3">{children}</p>

const defaultOptions: Options = {
  renderMark: {
    [MARKS.BOLD]: (text: ReactNode) => <Bold>{text}</Bold>,
    [MARKS.ITALIC]: (text: ReactNode) => <Italic>{text}</Italic>,
    [MARKS.UNDERLINE]: (text: ReactNode) => <Underlined>{text}</Underlined>
  },
  renderNode: {
    [BLOCKS.PARAGRAPH]: (node: any, children: any) => <Text>{children}</Text>
  }
}

export const RichText = ({ content, options }: Props): JSX.Element => (
  <>{documentToReactComponents(content, defaultOptions)}</>
)
