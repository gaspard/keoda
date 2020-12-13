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

export const App: Comp<AppProps> = ({ className }) => {
  const ctx = useOvermind()
  const { lexicon } = ctx.state.keoda
  return (
    <React.Fragment>
      <Float />
      <Wrapper className={className}>
        {lexicon.map(name => (
          <Entry key={name} id={name} />
        ))}
      </Wrapper>
    </React.Fragment>
  )
}
