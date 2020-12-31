import classnames from 'classnames'
import * as React from 'react'
import { Comp, styled, useOvermind } from '../app'
import { CompiledEntry, DEF_KEYS } from '../conlang/types'
import { getEntry } from '../helpers/getEntry'
import { Link } from './Link'
import { List } from './List'
import { Markdown } from './Markdown'

export interface EntryProps {
  className?: string
  popup?: boolean
  id: string
}

const Wrapper = styled.div`
  position: relative;
  display: flex;
  font-size: 18px;
  border: 1px solid #444;
  background: #aba89c;
  margin: 14px;
  border-radius: 5px;
  align-items: start;
  align-self: top;
  box-shadow: 0 0 10px #0000001f;
  &:not(.phrase) {
    flex-direction: row;
    width: 450px;
  }
  &.phrase {
    flex-direction: column;
    width: auto;
  }
  &.card {
    min-width: 600px;
    flex-grow: 1;
  }
  &.selected:not(.popup) > .Name {
    background: #e4d593;
  }
  &.popup {
    box-shadow: 8px 8px 20px #00000070;
    margin: 0;
    top: 30px;
    left: -25px;
    z-index: 3;
  }
`

const ArrowUp = styled.div`
  width: 15px;
  height: 15px;
  border: 1px solid rgb(68, 68, 68);
  border-width: 1px 1px 0 0;
  background: rgb(214, 211, 198);
  transform: rotate(-45deg);
  top: -9px;
  left: 15px;
  position: absolute;
`

const Name = styled.div`
  transition: background-color 0.8s;
  border-top-left-radius: 5px;
  font-weight: bold;
  background: #d6d3c6;
  align-self: stretch;
  flex-shrink: 0;
  flex-grow: 0;
  color: #333;
  display: flex;
  flex-direction: row;
  &:not(.phrase) {
    width: 7rem;
    border-bottom-left-radius: 5px;
    padding: 12px 0 0 14px;
    font-size: 1.4rem;
  }
  &.phrase {
    border-top-right-radius: 5px;
    padding: 12px;
    line-height: 1.3rem;
    display: block;
  }
  & span {
    align-self: top;
  }
`

const Definitions = styled.div`
  .phrase & {
    border-left: none;
    border-top: 1px solid #7b7b7b;
  }
  display: flex;
  flex-grow: 1;
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
    border-top: 1px solid #888;
    line-height: 1.6rem;
    font-style: italic;
    color: #555;
    display: block;
    align-self: stretch;
    h1 {
      font-size: 1.6rem;
      font-style: normal;
      color: #444;
      margin-top: 2rem;
    }
    h2 {
      font-size: 1.2rem;
      font-style: normal;
      color: inherit;
      margin-top: 2rem;
    }
    blockquote {
      font-family: 'Times New Roman', Times, serif;
      padding: 0.5em 10px;
      border-radius: 2px;
      position: relative;
      & p:first-child {
        margin-top: 10px;
      }
      & p:not(:last-child) {
        font-size: 1.9rem;
        line-height: 2rem;
      }
      & p:last-child {
        text-align: right;
        margin-top: -1.5rem;
        margin-bottom: 0;
      }
      &:before {
        position: absolute;
        font-weight: bold;
        top: 22px;
        left: -33px;
        opacity: 0.8;
        content: open-quote;
        font-size: 4em;
      }
    }
    code {
      color: #222;
      font-style: normal;
      font-size: 90%;
      font-family: 'Fira Code', Courier, monospace;
      background: #bfbcb1;
      padding: 3px 5px;
      display: inline-block;
      border-radius: 2px;
    }
    em {
      font-weight: bold;
    }
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
    color: #149a32;
  }
  &.det {
    color: #9a1432;
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
  &.deriv {
    color: #666;
  }
  &.see {
    color: #666;
  }
  &.phrase {
    color: #666;
  }
  text-align: right;
`

const DefText = styled.div`
  padding: 5px;
  color: #333;
  font-style: italic;
`

export const ID = styled.a`
  display: block;
  position: absolute;
  top: -20px;
  visibility: hidden;
`

export const Entry: Comp<EntryProps> = ({ className, id, popup }) => {
  const ctx = useOvermind()
  const { filter } = ctx.state.keoda
  const entry = getEntry(ctx, id)
  if (!entry) {
    // Should never happen
    return null
  }
  let highKey: string | undefined
  if (filter) {
    const { type, key } = filter
    if (type === 'type') {
      if (!entry[key as keyof CompiledEntry]) {
        return null
      }
      highKey = key
    } else {
      if (!entry.fulltext.includes(key)) {
        return null
      }
    }
  }
  return (
    <Wrapper
      className={classnames(entry.type, className, {
        popup,
        selected: id === ctx.state.keoda.selected,
      })}
    >
      {popup ? <ArrowUp /> : <ID id={id} />}
      {entry.type === 'phrase' ? (
        <Name className="Name phrase">
          <Link id={id} fromMd />
        </Name>
      ) : (
        <Name className="Name">
          <span>{entry.name}</span>
        </Name>
      )}
      <Definitions>
        {DEF_KEYS.map(key =>
          entry[key] ? (
            <Definition key={key}>
              <DefType
                className={classnames(key, { selected: key === highKey })}
                onClick={() => ctx.actions.keoda.filter({ type: 'type', key })}
              >
                {key}
              </DefType>
              {key === 'etym' || key === 'see' || key === 'deriv' ? (
                <List className={key} entries={entry[key]!} />
              ) : (
                <DefText>{entry[key]}</DefText>
              )}
            </Definition>
          ) : null
        )}
        {entry.desc && (
          <Definition className="desc">
            <Markdown text={entry.desc} />
          </Definition>
        )}
        {entry.phrases && (
          <Definition className="desc">
            <List className="phrases" entries={entry.phrases} />
          </Definition>
        )}
      </Definitions>
    </Wrapper>
  )
}
