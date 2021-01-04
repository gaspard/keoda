import classnames from 'classnames'
import * as React from 'react'
import { Comp, styled, useOvermind } from '../app'
import { getEntry } from '../helpers/getEntry'
import { List } from './List'
import { Phrase } from './Phrase'

export interface LinkProps {
  className?: string
  // from markdown
  fromMd?: boolean
  id: string
}

// TODO: Merge with Anchor
const Wrapper = styled.span`
  cursor: pointer;
  color: #546161;
  font-style: normal;
  align-self: start;
  &.ref {
    color: #2c383c;
    font-weight: bold;
  }
  &.high,
  &.ref.high {
    border-bottom: 2px solid orange;
  }
`

const Anchor = styled.a`
  color: inherit;
  .Title &.writ {
    font-size: 130%;
  }
  &.writ {
    font-family: 'Telugu';
    font-size: 110%;
    font-weight: normal;
  }
  &:not(.out) {
    text-decoration: none;
  }
  &:hover {
    color: #397d7d;
  }
`

export const Link: Comp<LinkProps> = ({ className, id, fromMd, children }) => {
  const ctx = useOvermind()
  const { writ } = ctx.state.keoda
  if (id.startsWith('http') || id.startsWith('mailto')) {
    return (
      <Anchor href={id} children={children} className="out" target="_blank" />
    )
  }
  const [type] = id.split('-')
  if (type === 'phrase') {
    return <Phrase id={id} fromMd={fromMd} />
  }
  const entry = getEntry(ctx, id)
  if (!entry) {
    return null
  }
  const ref = entry.alt || id
  let timer: any
  return (
    <Wrapper
      className={classnames('Link', className, {
        ref: fromMd,
        high: ref === ctx.state.keoda.selected,
      })}
      onMouseEnter={e => {
        const r = e.currentTarget.getBoundingClientRect()
        if (!ctx.state.keoda.float || ctx.state.keoda.float.hidden) {
          timer = setTimeout(() => {
            ctx.actions.keoda.float({
              id: ref,
              position: { top: r.top + r.height, left: r.left + r.width / 2 },
            })
          }, 500)
        } else {
          ctx.actions.keoda.float({
            id: ref,
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
          ctx.actions.keoda.hideFloat({ id: ref })
        }, 500)
      }}
    >
      <Anchor href={`#${ref}`} className={writ ? 'writ' : ''}>
        {writ ? entry.writ : entry.name}
      </Anchor>
    </Wrapper>
  )
}
