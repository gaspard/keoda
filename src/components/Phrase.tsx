import * as React from 'react'
import { Comp, styled, useOvermind } from '../app'
import { getEntry } from '../helpers/getEntry'
import { List } from './List'

export interface PhraseProps {
  className?: string
  type?: 'md' | 'md-open'
  id: string
}

const Wrapper = styled.div`
  position: relative;
  top: -3px;
  display: inline-flex;
  color: #222;
  p > &:first-child {
    margin-left: 10px;
  }
  &:hover .Trad:not(.fix) {
    opacity: 0;
    visibility: hidden;
  }
`

const Trad = styled.div`
  color: #333;
  &:not(.fix) {
    transition: opacity 0.2s ease-in 0s, visibility 0.2s ease-in 0.5s;
    position: absolute;
    opacity: 1;
    visibility: visible;
    top: -36px;
    left: 23px;
    z-index: 2;
    background: #d0cdc2;
    white-space: nowrap;
    padding: 8px 16px 3px;
    border-radius: 4px 4px 0px 0px;
    border-width: 1px;
    border-style: solid;
    border-color: #333 #333 #d0cdc2;
    border-image: initial;
  }
  &.fix {
    margin: 5px 20px;
  }
`

export const Info = styled.div`
  cursor: pointer;
  transform: translate(0, 1px);
  padding-right: 5px;
  opacity: 0.5;
  font-size: 64%;
  filter: grayscale(80%);
  transition: filter 0.3s;
  &:hover {
    opacity: 0.7;
    filter: grayscale(0%);
  }
  &.open {
    opacity: 1;
    filter: grayscale(0%);
  }
`

const GWrap = styled.div`
  display: flex;
  flex-direction: column;
  font-weight: normal;
  font-size: 1rem;
`

export const Phrase: Comp<PhraseProps> = ({ className, type, id }) => {
  const ctx = useOvermind()
  const [open, setOpen] = React.useState(false)
  const phrase = getEntry(ctx, id)
  if (!phrase) {
    return null
  }
  if ((phrase.open && type === 'md') || type === 'md-open') {
    return (
      <Wrapper className={className}>
        <GWrap>
          <Trad className="Trad fix">{phrase.trad}</Trad>
          <List type={type} entries={phrase.words!} glo />
        </GWrap>
      </Wrapper>
    )
  } else {
    return (
      <Wrapper className={className}>
        <Info onClick={() => setOpen(!open)} className={open ? 'open' : ''}>
          ℹ️
        </Info>
        {open ? (
          <GWrap>
            <Trad className="Trad">{phrase.trad}</Trad>
            <List type={type} entries={phrase.words!} glo />
          </GWrap>
        ) : (
          <List type={type} entries={phrase.words!} glo={open} />
        )}
      </Wrapper>
    )
  }
}
