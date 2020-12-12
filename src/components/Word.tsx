import { Comp, styled, useOvermind } from '../app'
import classnames from 'classnames'
import * as React from 'react'
import { List } from './List'
import { DEF_KEYS, CompiledWord } from '../conlang/types'

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
  align-items: start;
  width: 450px;
  align-self: top;
  box-shadow: 0 0 10px #0000001f;
  &.selected:not(.popup) > .Name {
    background: #e4d593;
  }
  &.popup {
    position: absolute;
    top: 0;
    left: -15px;
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
  align-self: stretch;
  border-left: 1px solid #7b7b7b;
`

const Definition = styled.div`
  display: flex;
  flex-direction: row;
  padding: 5px;
  &.desc {
    font-style: italic;
    color: #666;
  }
`

const DefType = styled.div`
  cursor: pointer;
  padding: 5px 20px 5px 0;
  font-weight: bold;
  width: 4rem;
  flex-shrink: 0;
  color: red;
  &.selected {
    border-left: 4px solid #8a847a;
    position: relative;
    left: -4px;
  }
  &.etym {
    color: #222;
  }
  &.noun {
    color: #28467d;
  }
  &.verb {
    color: #883ea7;
  }
  &.adj {
    color: #444;
  }
  &.conj {
    color: #b7ec34;
  }
  &.prefix {
    color: #444;
  }
  &.suffix {
    color: #444;
  }
  &.prep {
    color: #944;
  }
  &.pron {
    color: #494;
  }
  &.tens {
    color: #499;
  }
  &.lang {
    color: #444;
  }
  &.posit {
    color: pink;
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
  const { filter } = ctx.state.keoda
  const word = ctx.state.keoda.words[name]
  if (!word) {
    // Should never happen
    return null
  }
  let highKey: string | undefined
  if (filter) {
    const { type, key } = filter
    if (type === 'type') {
      if (!word[key as keyof CompiledWord]) {
        return null
      }
      highKey = key
    } else {
      if (!word.fulltext.includes(key)) {
        return null
      }
    }
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
              <DefType
                className={classnames(key, { selected: key === highKey })}
                onClick={() => ctx.actions.keoda.filter({ type: 'type', key })}
              >
                {key}
              </DefType>
              {key === 'etym' || key === 'see' ? (
                <List className={key} words={word[key]!} popup={popup} />
              ) : (
                <DefText>{word[key]}</DefText>
              )}
            </Definition>
          ) : null
        )}
        {word.desc && <Definition className="desc">{word.desc}</Definition>}
      </Definitions>
    </WordEntry>
  )
}
