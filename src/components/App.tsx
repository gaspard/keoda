import { Comp, styled, useOvermind } from '../app'
import * as React from 'react'
import { Entry } from './Entry'
import { Float } from './Float'

export interface AppProps {
  className?: string
}

const Wrapper = styled.div`
  /* styles here */
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-around;
`

const WritButton = styled.div`
  position: fixed;
  cursor: pointer;
  top: 4px;
  right: 5px;
  display: block;
  z-index: 99;
  background: #aba89d;
  padding: 3px 8px 6px;
  &.writ {
    padding-bottom: 4px;
  }
  border: 1px solid #444;
  border-radius: 5px;
  font-size: 18px;
  box-shadow: 0px 0px 6px #00000050;
  font-weight: bold;
  color: #333;
`

export const App: Comp<AppProps> = ({ className }) => {
  const ctx = useOvermind()
  const { lexicon } = ctx.state.keoda
  const { writ } = ctx.state.keoda
  return (
    <React.Fragment>
      <WritButton
        className={writ ? '' : 'writ'}
        onClick={ctx.actions.keoda.writToggle}
      >
        {writ ? 'latin' : 'తేలుగు'}
      </WritButton>
      <Float />
      <Wrapper className={className}>
        {lexicon.card.map(id => (
          <Entry key={id} id={id} />
        ))}
        {lexicon.word.map(id => (
          <Entry key={id} id={id} />
        ))}
        {lexicon.phrase.map(id => (
          <Entry key={id} id={id} />
        ))}
      </Wrapper>
    </React.Fragment>
  )
}
