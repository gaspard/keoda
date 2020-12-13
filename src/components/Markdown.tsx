import * as React from 'react'
import ReactMarkdown from 'react-markdown'
import { ContextReplacementPlugin } from 'webpack'
import { Comp, useOvermind } from '../app'
import { Link } from './Link'
import { List } from './List'

export interface MarkdownProps {
  className?: string
  text: string
}

const renderers = {
  link: ({ href }: { href: string }) => <Link id={href} fromMd />,
}

export const Markdown: Comp<MarkdownProps> = ({ className, text }) => {
  const ctx = useOvermind()
  // {text}
  return <ReactMarkdown renderers={renderers}>{text}</ReactMarkdown>
}
