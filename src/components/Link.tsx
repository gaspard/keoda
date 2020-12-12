import { Comp, styled, useOvermind } from '../app'
import * as React from 'react'
import { Word } from './Word'

export interface LinkProps {
  className?: string
  popup?: boolean
  name: string
}

const Wrapper = styled.div`
  cursor: pointer;
  border-bottom: 1px solid #397d7d;
  margin-right: 8px;
  & .Ref > .popup {
    display: none;
  }
  &:hover .Ref > .popup {
    display: flex;
  }
`

const Anchor = styled.a`
  color: inherit;
  text-decoration: none;
  color: #546161;
  &:hover {
    color: #397d7d;
  }
`

const Ref = styled.div`
  position: absolute;
  left: 0;
  bottom: 0;
`

export const Link: Comp<LinkProps> = ({ className, name, popup }) => {
  useOvermind()
  return (
    <Wrapper className={className}>
      <Anchor href={`#${name}`}>{name}</Anchor>
      {!popup && (
        <Ref className="Ref">
          <Word name={name} popup />
        </Ref>
      )}
    </Wrapper>
  )
}
