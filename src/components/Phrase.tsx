import * as React from 'react'
import { Comp, styled, useOvermind } from '../app'
import { getEntry } from '../helpers/getEntry'
import { List } from './List'

export interface PhraseProps {
  className?: string
  id: string
}

const Wrapper = styled.div`
  position: relative;
  top: -3px;
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
  top: -37px;
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
  transform: translate(0, 1px);
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
  font-weight: normal;
  font-size: 1rem;
`

export const Phrase: Comp<PhraseProps> = ({ className, id }) => {
  const ctx = useOvermind()
  const [glo, setGlo] = React.useState(false)
  const phrase = getEntry(ctx, id)
  if (!phrase) {
    return null
  }
  return (
    <Wrapper className={className}>
      <Info onClick={() => setGlo(!glo)} className={glo ? 'glo' : ''}>
        ℹ️
      </Info>
      {glo ? (
        <GWrap>
          <Trad className="Trad">{phrase.trad}</Trad>
          <List phrase entries={phrase.words!} glo={glo} />
        </GWrap>
      ) : (
        <List phrase entries={phrase.words!} glo={glo} />
      )}
    </Wrapper>
  )
}
