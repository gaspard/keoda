import * as React from 'react'
import { Comp, styled } from '../app'
import { Link } from './Link'

export interface DerivedProps {
  className?: string
  popup?: boolean
  words: string[]
}

const Wrapper = styled.div`
  flex-wrap: wrap;
  padding-left: 5px;
  display: flex;
  flex-direction: row;
  align-self: center;
  &.etym a {
    color: #222;
    font-weight: bold;
  }
`

export const List: Comp<DerivedProps> = ({ className, words, popup }) => {
  return (
    <Wrapper className={className}>
      {words.map((key, idx) => (
        <Link key={idx} name={key} popup={popup} />
      ))}
    </Wrapper>
  )
}
