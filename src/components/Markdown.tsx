import * as React from 'react'
import ReactMarkdown from 'react-markdown'
import { Comp } from '../app'
import { Link } from './Link'
import gfm from 'remark-gfm'

export interface MarkdownProps {
  className?: string
  text: string
}

const renderers = {
  link: ({
    href,
    children,
  }: {
    href: string
    children: React.ElementType[]
  }) => {
    return <Link id={href} fromMd children={children} />
  },
}

export const Markdown: Comp<MarkdownProps> = ({ className, text }) => {
  return (
    <ReactMarkdown plugins={[gfm]} renderers={renderers}>
      {text}
    </ReactMarkdown>
  )
}
