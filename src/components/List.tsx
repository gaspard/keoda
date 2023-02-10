import classnames from 'classnames'
import * as React from 'react'
import { COLORS, Comp, styled, useOvermind } from '../app'
import { getEntry } from '../helpers/getEntry'
import { Link, LinkProps } from './Link'
import { Markdown } from './Markdown'

export interface DerivedProps {
  className?: string
  type?: 'md' | 'md-open'
  glo?: boolean
  entries: string[]
}

export const ListWrapper = styled.div`
  flex-wrap: wrap;
  display: flex;
  align-self: flex-start;
  flex-direction: row;
  &.phrase.etym.glo {
    align-self: stretch;
    border: none;
    background: ${COLORS.list_bg};
    padding: 0;
    border-radius: 0;
    border-bottom: 1px solid ${COLORS.glo_border};
  }
  &.etym a {
    color: #222;
    font-weight: 500;
  }
  &.phrase {
    margin: 0;
  }
  &.phrases {
    flex-direction: column;
  }
  &.phrases > *:not(:first-child) {
    margin-top: 5px;
  }
  &.phrase.glo {
    display: flex;
    flex-direction: row;
    background: ${COLORS.phrase_glo_bg};
    border-radius: 4px;
    border: 1px solid ${COLORS.glo_border};
    padding: 5px;
  }
  & .Link:not(:last-child) {
    margin-right: 10px;
  }
  & .Link.Link a {
    color: inherit;
  }
`

const Detail = styled.div`
  display: flex;
  flex-direction: column;
  margin-right: 15px;
  margin: 8px 15px;
  & > p {
    font-family: Monaco;
    font-size: 0.9rem;
    margin-top: 6px;
    font-size: 0.8rem;
    color: ${COLORS.glo_color};
  }
  &&.noun strong {
    color: ${COLORS.noun_color};
  }
  &&.noun em,
  &&.adj strong,
  &&.adj em {
    font-style: italic;
    font-weight: normal;
    color: ${COLORS.adj_color};
  }
  &&.verb strong {
    color: ${COLORS.verb_color};
  }
  &&.verb em,
  &&.adv strong,
  &&.adv em {
    font-style: italic;
    font-weight: normal;
    color: ${COLORS.adv_color};
  }
`

const Aspect = styled.div`
  font-family: Monaco;
  font-size: 0.9rem;
  margin-top: 6px;
  &.writ {
    font-family: 'Telugu';
    font-size: 110%;
    color: ${COLORS.writ_color};
  }
  &.name {
    color: ${COLORS.name_color};
  }
  &.glo {
    font-size: 0.8rem;
  }
  &.phon {
    position: relative;
    left: -8px;
  }
  color: ${COLORS.aspect_color};
`

export const GlossAndLink: Comp<LinkProps> = props => {
  const ctx = useOvermind()
  const { writ } = ctx.state.zulapa
  const entry = getEntry(ctx, props.id)
  if (!entry) {
    return null
  }
  return (
    <Detail className={entry.cla}>
      <Link {...props} />
      <Aspect className="phon">{entry.phon}</Aspect>
      <Aspect className={writ ? 'name' : 'writ'}>
        {writ ? entry.name : entry.writ}
      </Aspect>
      <Markdown text={entry.glo!} type="md" />
    </Detail>
  )
}

export const List: Comp<DerivedProps> = ({ className, entries, type, glo }) => {
  return (
    <ListWrapper
      className={classnames(className, { phrase: type !== undefined, glo })}
    >
      {entries.map(key =>
        glo ? (
          <GlossAndLink id={key} type={type} />
        ) : (
          <Link id={key} type={type} />
        )
      )}
    </ListWrapper>
  )
}
