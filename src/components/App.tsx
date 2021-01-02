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
  &.active {
    background: #e4d593;
  }
  border: 1px solid #444;
  border-radius: 5px;
  font-size: 18px;
  box-shadow: 0px 0px 6px #00000050;
  font-weight: bold;
  color: #333;
  padding: 3px 8px 0;
`

export const App: Comp<AppProps> = ({ className }) => {
  const ctx = useOvermind()
  const { lexicon } = ctx.state.keoda
  return (
    <React.Fragment>
      <WritButton
        onClick={ctx.actions.keoda.writToggle}
        className={ctx.state.keoda.writ ? 'active' : ''}
      >
        కేఓదా
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
