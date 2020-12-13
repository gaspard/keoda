import classnames from 'classnames'
import * as React from 'react'
import { Comp, styled, useOvermind } from '../app'
import { List } from './List'
import { Phrase } from './Phrase'

export interface LinkProps {
  className?: string
  // from markdown
  fromMd?: boolean
  id: string
}

const Wrapper = styled.span`
  cursor: pointer;
  color: #546161;
  font-style: normal;
  position: relative;
  &.ref {
    color: #2c383c;
    font-weight: bold;
  }
  &:not(.ref) {
    border-bottom: 1px solid #397d7d;
  }
`

const Anchor = styled.a`
  color: inherit;
  text-decoration: none;
  &:hover {
    color: #397d7d;
  }
`

export const Link: Comp<LinkProps> = ({ className, id, fromMd }) => {
  const ctx = useOvermind()
  const [type] = id.split('-')
  if (type === 'phrase') {
    return <Phrase id={id} />
  }
  const entry = ctx.state.keoda.entries[id]
  if (!entry) {
    return null
  }
  let timer: any
  return (
    <Wrapper
      className={classnames('Link', className, { ref: fromMd })}
      onMouseEnter={e => {
        const r = e.currentTarget.getBoundingClientRect()
        if (!ctx.state.keoda.float || ctx.state.keoda.float.hidden) {
          timer = setTimeout(() => {
            ctx.actions.keoda.float({
              id,
              position: { top: r.top + r.height, left: r.left + r.width / 2 },
            })
          }, 500)
        } else {
          ctx.actions.keoda.float({
            id,
            position: { top: r.top + r.height, left: r.left + r.width / 2 },
          })
        }
      }}
      onMouseLeave={e => {
        if (timer) {
          clearTimeout(timer)
          timer = undefined
        }
        setTimeout(() => {
          ctx.actions.keoda.hideFloat({ id })
        }, 500)
      }}
    >
      <Anchor href={`#${id}`}>{entry.name}</Anchor>
    </Wrapper>
  )
}
