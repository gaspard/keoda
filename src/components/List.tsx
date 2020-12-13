import * as React from 'react'
import classnames from 'classnames'
import { Comp, styled } from '../app'
import { Link } from './Link'

export interface DerivedProps {
  className?: string
  phrase?: boolean
  entries: string[]
}

export const ListWrapper = styled.div`
  flex-wrap: wrap;
  padding-left: 5px;
  display: flex;
  flex-direction: row;
  align-self: center;
  &.etym a {
    color: #222;
    font-weight: bold;
  }
  &.phrase {
    display: inline-block;
    margin: 0;
  }
  & .Link:not(:last-child) {
    margin-right: 8px;
  }
`

export const List: Comp<DerivedProps> = ({ className, entries, phrase }) => {
  return (
    <ListWrapper className={classnames(className, { phrase })}>
      {entries.map((key, idx) => (
        <Link key={idx} id={key} fromMd={phrase} />
      ))}
    </ListWrapper>
  )
}
