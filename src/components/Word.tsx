import { Comp, styled, useOvermind } from '../app'
import classnames from 'classnames'
import * as React from 'react'
import { List } from './List'
import { CompiledWord } from '../conlang/types'

const DEF_KEYS: (keyof CompiledWord)[] = [
  'etym',
  'noun',
  'adj',
  'conj',
  'lang',
  'verb',
  'see',
]

export interface WordProps {
  className?: string
  popup?: boolean
  name: string
}

const WordEntry = styled.div`
  position: relative;
  display: flex;
  flex-direction: row;
  font-size: 18px;
  border: 1px solid #444;
  background: #aba89c;
  margin: 14px;
  border-radius: 5px;
  align-items: center;
  width: 450px;
  align-self: center;
  box-shadow: 0 0 10px #0000001f;
  &.selected:not(.popup) .Name {
    background: #e4d593;
  }
  &.popup {
    position: absolute;
    top: 28px;
    left: -38px;
    box-shadow: 8px 8px 20px #00000070;
    z-index: 3;
  }
`

const Name = styled.div`
  transition: background-color 0.8s;
  padding: 12px 0 0 14px;
  border-top-left-radius: 5px;
  border-bottom-left-radius: 5px;
  font-weight: bold;
  background: #d6d3c6;
  align-self: stretch;
  width: 7rem;
  flex-shrink: 0;
  flex-grow: 0;
  color: #333;
  font-size: 1.4rem;
  display: flex;
  flex-direction: row;
  & span {
    align-self: top;
  }
`

const Definitions = styled.div`
  display: flex;
  flex-direction: column;
  padding: 5px;
  border-left: 1px solid #7b7b7b;
`

const Definition = styled.div`
  display: flex;
  flex-direction: row;
  padding: 5px;
`

const DefType = styled.div`
  padding: 5px 20px 5px 0;
  font-weight: bold;
  width: 4rem;
  flex-shrink: 0;
  color: red;
  &.verb {
    color: purple;
  }
  &.noun {
    color: #28467d;
  }
  &.adj {
    color: #287d33;
  }
  &.conj {
    color: yellowgreen;
  }
  &.etym {
    color: #222;
  }
  &.see {
    color: #666;
  }
  text-align: right;
`

const DefText = styled.div`
  padding: 5px;
  color: #333;
  font-style: italic;
`

const ID = styled.a`
  display: block;
  position: absolute;
  top: -20px;
  visibility: hidden;
`

export const Word: Comp<WordProps> = ({ className, name, popup }) => {
  const ctx = useOvermind()
  const word = ctx.state.keoda.words[name]
  if (!word) {
    // Should never happen
    return null
  }
  return (
    <WordEntry
      className={classnames('Word', className, {
        popup,
        selected: name === ctx.state.keoda.selected,
      })}
    >
      {!popup && <ID id={name} />}
      <Name className="Name">
        <span>{word.name}</span>
      </Name>
      <Definitions>
        {DEF_KEYS.map(key =>
          word[key] ? (
            <Definition key={key}>
              <DefType className={key}>{key}</DefType>
              {key === 'etym' || key === 'see' ? (
                <List className={key} words={word[key]!} popup={popup} />
              ) : (
                <DefText>{word[key]}</DefText>
              )}
            </Definition>
          ) : null
        )}
      </Definitions>
    </WordEntry>
  )
}
