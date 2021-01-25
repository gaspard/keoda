import classnames from 'classnames'
import * as React from 'react'
import { Comp, styled, useOvermind } from '../app'
import { CompiledEntry, DEF_KEYS } from '../conlang/types'
import { getEntry } from '../helpers/getEntry'
import { Link } from './Link'
import { List } from './List'
import { Markdown } from './Markdown'
import { GWrap, Info } from './Phrase'

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
  background: #636159;
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
  &.selected:not(.popup) > .Title {
    background: #e4d593;
  }
  &.popup {
    box-shadow: 8px 8px 20px #00000070;
    margin: 0;
    top: 30px;
    left: -25px;
    z-index: 3;
  }
  hr,
  div.hr {
    border: 0;
    height: 1px;
    background-image: linear-gradient(
      to right,
      rgba(80, 80, 80, 0),
      rgba(80, 80, 80, 0.75),
      rgba(80, 80, 80, 0)
    );
  }
  div.hr:first-child {
    display: none;
  }
  div.hr:last-child {
    display: none;
  }
  div.hr {
    margin: 10px;
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

const Title = styled.div`
  transition: background-color 0.8s;
  border-top-left-radius: 5px;
  background: #d6d3c6;
  align-self: stretch;
  display: flex;
  flex-direction: column;
  justify-content: start;
  flex-shrink: 0;
  flex-grow: 0;
  color: #333;
  &:not(.phrase) {
    min-width: 7rem;
    border-bottom-left-radius: 5px;
    & > div {
      padding: 12px 12px 0 14px;
    }
    padding-bottom: 12px;
  }
  &.phrase {
    border-top-right-radius: 5px;
    padding: 12px 12px 5px;
    line-height: 1.3rem;
    display: block;
    & .Trad {
      top: -32px;
    }
  }
  &::before {
    content: ' ';
    display: block;
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    opacity: 0.3;
    pointer-events: none;
    background-image: var(--data-img);
    background-repeat: no-repeat;
    background-position: center var(--data-pos);
    background-size: cover;
  }
`

const Name = styled.div`
  cursor: pointer;
  font-size: 1.4rem;
  font-weight: 500;
`

const Phon = styled.div`
  font-size: 1rem;
`

const Other = styled.div`
  font-size: 1rem;
`
// margin-left: 8px;

const Definitions = styled.div`
  .phrase & {
    border-left: none;
    border-top: 1px solid #7b7b7b;
  }
  display: flex;
  flex-grow: 1;
  flex-direction: column;
  padding-bottom: 5px;
  overflow: hidden;
  align-self: stretch;
  border-left: 1px solid #7b7b7b;
  border-top-right-radius: 5px;
  border-bottom-right-radius: 5px;
  background: #e4e1d582;
  z-index: 3;
`

const Definition = styled.div`
  display: flex;
  flex-direction: row;
  padding: 5px;
  &.desc {
    padding: 0 20px;
    line-height: 1.6rem;
    color: #555;
    display: block;
    align-self: stretch;
    h4,
    h5,
    h6 {
      display: none;
    }
    h4 + *,
    h5 + *,
    h6 + * {
      position: relative;
      margin-left: 40px;
      margin-right: 80px;
      padding: 10px 10px 5px;
      border-radius: 7px 2px 2px 7px;
      li {
        list-style: none;
      }
    }
    h4 + *::before,
    h5 + *::before,
    h6 + *::before {
      position: absolute;
      top: 4px;
      left: -23px;
    }
    h4 + * {
      display: var(--nsfw);
      border-left: 26px solid #88815e;
      background: #bfb370;
    }
    h4 + * .nsfw {
      background: none;
    }
    h4 + *::before {
      content: '🍑';
    }
    h5 + * {
      border-left: 26px solid #908e82;
      background: #afada4;
    }
    h5 + *::before {
      content: '💡';
    }
    h6 + * {
      border-left: 6px solid #908e82;
      background: #afada4;
    }
    h6 + *::before {
      content: '';
    }
    h1 {
      font-size: 1.6rem;
      color: #444;
      margin-bottom: 2rem;
    }
    h2 {
      font-size: 1.2rem;
      color: inherit;
      margin-top: 2rem;
    }
    ul {
    }
    img {
      border: 1px solid #555;
      display: table;
      margin: auto;
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
        font-weight: 500;
        top: 22px;
        left: -33px;
        opacity: 0.8;
        content: open-quote;
        font-size: 4em;
      }
    }
    code {
      font-size: 90%;
      font-family: 'Fira Code', Courier, monospace;
      padding: 3px 5px;
      display: inline-block;
    }
    em {
      font-weight: italic;
    }
    strong {
      font-weight: 500;
    }
    table {
      color: inherit;
      margin: 2rem auto;
      border-collapse: collapse;
    }
    td,
    th {
      border: 1px solid #807c70;
      padding: 4px 10px;
    }
    pre {
      background: #bfbcb1;
      margin: 10px auto;
      display: table;
      border: 1px solid #807c70;
      padding: 3px 8px;
      border-radius: 3px;
    }
  }
`

const DefType = styled.div`
  cursor: pointer;
  margin-right: 20px;
  font-weight: 500;
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
  &.adv {
    color: #040a02;
  }
  &.det {
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
  color: #333;
`

export const ID = styled.a`
  display: block;
  position: absolute;
  top: -20px;
  visibility: hidden;
`

export const MyInfo = styled(Info)`
  position: absolute;
  top: 5px;
  right: 5px;
  z-index: 9;
`

export const Entry: Comp<EntryProps> = ({ className, id, popup }) => {
  const ctx = useOvermind()
  const entry = getEntry(ctx, id)
  const [open, setOpen] = React.useState(entry?.open)
  const { filter, writ } = ctx.state.keoda
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

  const style = entry.img
    ? {
        ['--data-img']: `url(${entry.img})`,
        ['--data-pos']: entry.imgpos || '0',
      }
    : {}

  return (
    <Wrapper
      className={classnames(entry.type, className, {
        popup,
        selected: id === ctx.state.keoda.selected,
      })}
    >
      {popup ? <ArrowUp /> : <ID id={id} />}
      {!popup && (
        <MyInfo onClick={() => setOpen(!open)} className={open ? 'open' : ''}>
          ℹ️
        </MyInfo>
      )}
      {entry.type === 'phrase' ? (
        <Title className="Title phrase" style={style as React.CSSProperties}>
          <Link id={id} type="md" />
        </Title>
      ) : (
        <Title className="Title" style={style as React.CSSProperties}>
          <Name onClick={() => ctx.actions.keoda.select({ id: entry.id })}>
            {writ ? entry.writ : entry.name}
          </Name>
          <Other>{writ ? entry.name : entry.writ}</Other>
          <Phon>{entry.phon}</Phon>
        </Title>
      )}
      <Definitions>
        {entry.etym && (
          <React.Fragment>
            <GWrap className="etym">
              <List className="etym" entries={entry.etym} type="md-open" glo />
            </GWrap>
          </React.Fragment>
        )}
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
          <React.Fragment>
            <div className="hr" />
            <Definition className="desc">
              <Markdown text={entry.desc} type={open ? 'md-open' : 'md'} />
            </Definition>
          </React.Fragment>
        )}
        {entry.phrases && (
          <React.Fragment>
            <div className="hr" />
            <Definition className="desc">
              <List
                className="phrases"
                entries={entry.phrases}
                type={open ? 'md-open' : 'md'}
              />
            </Definition>
          </React.Fragment>
        )}
      </Definitions>
    </Wrapper>
  )
}
