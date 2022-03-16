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
  font-weight: 500;
  color: #333;
`

const Nsfw = styled(WritButton)`
  top: 60px;
  &.nsfw {
    background: #bfb370;
  }
`

export const App: Comp<AppProps> = ({ className }) => {
  const ctx = useOvermind()
  const { lexicon } = ctx.state.zulapa
  const { writ, nsfw } = ctx.state.zulapa
  return (
    <React.Fragment>
      <WritButton
        className={writ ? '' : 'writ'}
        onClick={() => ctx.actions.zulapa.toggle({ key: 'writ' })}
      >
        {writ ? 'latin' : 'తేలుగు'}
      </WritButton>
      <Nsfw
        className={nsfw ? 'nsfw' : ''}
        onClick={() => ctx.actions.zulapa.toggle({ key: 'nsfw' })}
      >
        🍑
      </Nsfw>
      <Float />
      <Wrapper
        style={{ ['--nsfw']: nsfw ? 'block' : 'none' } as React.CSSProperties}
        className={className}
      >
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
