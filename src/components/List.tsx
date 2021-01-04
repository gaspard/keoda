import * as React from 'react'
import classnames from 'classnames'
import { Comp, styled, useOvermind } from '../app'
import { Link, LinkProps } from './Link'
import { getEntry } from '../helpers/getEntry'
import { Markdown } from './Markdown'

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
    margin: 0;
  }
  &.phrases {
    flex-direction: column;
  }
  &.phrases > * {
    margin: 5px 0;
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
    margin-right: 12px;
  }
`

const Detail = styled.div`
  display: flex;
  flex-direction: column;
  margin-right: 15px;
  margin: 8px 15px;
  & > p {
    font-style: normal;
    font-family: Monaco;
    font-size: 0.9rem;
    margin-top: 6px;
    font-size: 0.8rem;
    color: #777;
    & strong {
      color: #222;
    }
  }
`

const Aspect = styled.div`
  font-style: normal;
  font-family: Monaco;
  font-size: 0.9rem;
  margin-top: 6px;
  &.writ {
    font-family: 'Telugu';
    font-size: 110%;
    opacity: 0.4;
  }
  &.name {
    opacity: 0.4;
  }
  &.glo {
    font-size: 0.8rem;
  }
  &.phon {
    position: relative;
    left: -8px;
  }
  color: #565656;
`

export const GlossAndLink: Comp<LinkProps> = props => {
  const ctx = useOvermind()
  const { writ } = ctx.state.keoda
  const entry = getEntry(ctx, props.id)
  if (!entry) {
    return null
  }
  return (
    <Detail>
      <Link {...props} />
      <Aspect className="phon">{entry.phon}</Aspect>
      <Aspect className={writ ? 'name' : 'writ'}>
        {writ ? entry.name : entry.writ}
      </Aspect>
      <Markdown text={entry.glo!} />
    </Detail>
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
