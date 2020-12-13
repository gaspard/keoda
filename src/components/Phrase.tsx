import * as React from 'react'
import { Comp, styled, useOvermind } from '../app'
import { List } from './List'

export interface PhraseProps {
  className?: string
  id: string
}

const Wrapper = styled.div`
  position: relative;
  display: inline-block;
  color: #222;
`

const Trad = styled.div`
  transition: opacity 0.2s ease-in, visibility 0.2s ease-in 0.5s;
  position: absolute;
  opacity: 0;
  top: -25px;
  left: 20px;
  z-index: 2;
  &.Gloss {
    top: 20px;
  }
  visibility: hidden;
  color: #333;
  background: #dccc90;
  white-space: nowrap;
  padding: 1px 8px;
  border-radius: 6px;
  box-shadow: 4px 4px 8px #00000040;
`

const TradWrap = styled.div`
  display: inline-block;
  font-style: normal;
  &:hover > .Trad {
    visibility: visible;
    opacity: 1;
  }
  & > span {
    cursor: pointer;
    display: inline-block;
    transform: translate(0, -1px);
    opacity: 0.5;
    font-size: 64%;
    filter: grayscale(80%);
    transition: filter 0.3s;
    &:hover {
      opacity: 0.8;
      filter: grayscale(0%);
    }
  }
`

export const Phrase: Comp<PhraseProps> = ({ className, id }) => {
  const ctx = useOvermind()
  const { entries } = ctx.state.keoda
  const phrase = ctx.state.keoda.phrases[id]
  return (
    <Wrapper className={className}>
      <TradWrap>
        <span>ℹ️</span>
        <Trad className="Trad">{phrase.phrase}</Trad>
        <Trad className="Trad Gloss">
          {phrase.see!.map(id => entries[id].glo).join(' ')}
        </Trad>
      </TradWrap>
      <List phrase entries={phrase.see!} />
    </Wrapper>
  )
}
