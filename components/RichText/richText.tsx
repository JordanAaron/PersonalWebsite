import { documentToReactComponents } from "@contentful/rich-text-react-renderer"
import { Document, BLOCKS, MARKS } from "@contentful/rich-text-types"

type Props = {
  content: Document
  options?: {
    renderMark: {}
    renderNode: {}
  }
}

type OptionsType = {
  renderMark: {}
  renderNode: {}
}

const Bold = ({ children }: any) => <strong>{children}</strong>;
const Italic = ({ children }: any) => <i>{children}</i>
const Underlined = ({ children }: any) => <p className="underline">{children}</p>

const Text = ({ children }: any) => <p className="align-center my-4">{children}</p>;

const defaultOptions: OptionsType = {
  renderMark: {
    [MARKS.BOLD]: (text: string) => <Bold>{text}</Bold>,
    [MARKS.ITALIC]: (text: string) => <Italic>{text}</Italic>,
    [MARKS.UNDERLINE]: (text: string) => <Underlined>{text}</Underlined>
  },
  renderNode: {
    [BLOCKS.PARAGRAPH]: (node: any, children: any) => <Text>{children}</Text>,
  },
};

export const RichText = ({ content, options }: Props) => <>{documentToReactComponents(content, defaultOptions)}</>
