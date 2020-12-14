import * as React from 'react'
import { Comp, styled, useOvermind } from '../app'
import { List } from './List'

export interface PhraseProps {
  className?: string
  id: string
}

const Wrapper = styled.div`
  position: relative;
  display: inline-flex;
  color: #222;
  &:hover .Trad {
    opacity: 0;
    visibility: hidden;
  }
`

const Trad = styled.div`
  transition: opacity 0.2s ease-in 0s, visibility 0.2s ease-in 0.5s;
  position: absolute;
  opacity: 1;
  visibility: visible;
  top: -32px;
  left: 23px;
  z-index: 2;
  color: #333;
  background: #d0cdc2;
  white-space: nowrap;
  padding: 8px 16px 3px;
  border-radius: 4px 4px 0px 0px;
  border-width: 1px;
  border-style: solid;
  border-color: #333 #333 #d0cdc2;
  border-image: initial;
  font-style: normal;
`

const Info = styled.div`
  cursor: pointer;
  font-style: normal;
  transform: translate(0, -1px);
  opacity: 0.5;
  font-size: 64%;
  filter: grayscale(80%);
  transition: filter 0.3s;
  &:hover {
    opacity: 0.7;
    filter: grayscale(0%);
  }
  &.glo {
    opacity: 1;
    filter: grayscale(0%);
  }
`

const GWrap = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 5px;
`

export const Phrase: Comp<PhraseProps> = ({ className, id }) => {
  const ctx = useOvermind()
  const [glo, setGlo] = React.useState(false)
  const { entries } = ctx.state.keoda
  const phrase = ctx.state.keoda.phrases[id]
  return (
    <Wrapper className={className}>
      <Info onClick={() => setGlo(!glo)} className={glo ? 'glo' : ''}>
        ℹ️
      </Info>
      {glo ? (
        <GWrap>
          <Trad className="Trad">{phrase.phrase}</Trad>
          <List phrase entries={phrase.see!} glo={glo} />
        </GWrap>
      ) : (
        <List phrase entries={phrase.see!} glo={glo} />
      )}
    </Wrapper>
  )
}
