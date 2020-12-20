import * as React from 'react'
import classnames from 'classnames'
import { Comp, styled, useOvermind } from '../app'
import { Link, LinkProps } from './Link'
import { getEntry } from '../helpers/getEntry'

export interface DerivedProps {
  className?: string
  phrase?: boolean
  glo?: boolean
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
  &.phrase.glo {
    display: flex;
    flex-direction: row;
    background: #d0cdc2;
    border-radius: 4px;
    border: 1px solid #333;
    padding: 5px;
  }
  & .Link:not(:last-child) {
    margin-right: 8px;
  }
`

const Glo = styled.div`
  display: flex;
  flex-direction: column;
  margin-right: 15px;
  margin: 8px 15px;
`

const Gloss = styled.div`
  font-style: normal;
`

export const GlossAndLink: Comp<LinkProps> = props => {
  const ctx = useOvermind()
  const entry = getEntry(ctx, props.id)
  if (!entry) {
    return null
  }
  return (
    <Glo>
      <Link {...props} />
      <Gloss>{entry.glo}</Gloss>
    </Glo>
  )
}

export const List: Comp<DerivedProps> = ({
  className,
  entries,
  phrase,
  glo,
}) => {
  return (
    <ListWrapper className={classnames(className, { phrase, glo })}>
      {entries.map(key =>
        glo ? (
          <GlossAndLink id={key} fromMd={phrase} />
        ) : (
          <Link id={key} fromMd={phrase} />
        )
      )}
    </ListWrapper>
  )
}
