import classnames from 'classnames'
import * as React from 'react'
import { COLORS, Comp, styled, useOvermind } from '../app'
import { getEntry } from '../helpers/getEntry'
import { List } from './List'

export interface PhraseProps {
  className?: string
  type?: 'md' | 'md-open'
  id: string
}

const PhraseWrap = styled.div`
  position: relative;
  top: -3px;
  display: inline-flex;
  color: #222;
  &.open {
    margin-top: 1rem;
  }
  p > &:first-child {
    margin-left: 10px;
  }
  &:hover .Trad:not(.fix) {
    ${
      /*opacity: 0;
    visibility: hidden;*/ ''
    }
  }
  &.nsfw {
    background: ${COLORS.nsfw_bg};
    box-shadow: ${COLORS.nsfw_shadow};
    border-radius: 5px;
    padding: 10px;
  }
  &.nsfw .Trad:not(.fix) {
    top: -26px;
    left: 33px;
  }
`

const Trad = styled.div`
  color: #555;
  transition: filter 0.3s;
  &.blink {
    filter: grayscale(0%) hue-rotate(45deg) saturate(1.5);
    opacity: 1;
  }
  &:not(.fix) {
    transition: opacity 0.2s ease-in 0s, visibility 0.2s ease-in 0.5s;
    position: absolute;
    opacity: 1;
    visibility: visible;
    top: -36px;
    left: 23px;
    z-index: 2;
    background: ${COLORS.trad_bg};
    color: ${COLORS.trad_color};
    white-space: nowrap;
    padding: 8px 16px 3px;
    border-radius: 4px 4px 0px 0px;
    border-width: 1px;
    border-style: solid;
    border-color: ${COLORS.glo_border} ${COLORS.glo_border} #00000000;
    border-image: initial;
  }
  &.fix {
    margin: 5px 0;
    background: ${COLORS.fix_bg};
    color: ${COLORS.fix_color};
    border-radius: 2px;
    padding: 4px 8px;
  }
`

export const Info = styled.div`
  cursor: pointer;
  transform: translate(0, 1px);
  padding-right: 5px;
  opacity: 0.5;
  font-size: 64%;
  filter: hue-rotate(234deg);
  transition: filter 0.3s;
  &.blink,
  &.blink.open,
  &.blink:hover,
  &.blink.open:hover {
    filter: grayscale(0%) hue-rotate(90deg) saturate(1.5);
    opacity: 1;
  }
  &:hover {
    opacity: 0.7;
  }
  &.open {
    opacity: 1;
  }
`

export const GWrap = styled.div`
  display: flex;
  flex-direction: column;
  font-weight: normal;
  font-size: 1rem;
  &.open {
    box-shadow: ${COLORS.open_shadow};
  }
`

export const Phrase: Comp<PhraseProps> = ({ className, type, id }) => {
  const ctx = useOvermind()
  const [open, setOpen] = React.useState(false)
  const phrase = getEntry(ctx, id)
  if (!phrase) {
    return null
  }
  if (phrase.nsfw) {
    if (!ctx.state.zulapa.nsfw) {
      return null
    }
  }

  function phraseClick(e: React.MouseEvent<HTMLDivElement>) {
    e.preventDefault()
    e.stopPropagation()
    if (phrase?.open || e.ctrlKey || e.metaKey) {
      const div = e.currentTarget
      if (div) {
        div.classList.add('blink')
        setTimeout(() => {
          div.classList.remove('blink')
        }, 1000)
      }
      ctx.actions.zulapa.copyPhrase({ id })
    } else {
      setOpen(!open)
    }
  }

  if ((phrase.open && type === 'md') || type === 'md-open') {
    return (
      <PhraseWrap
        className={classnames(className, { nsfw: phrase.nsfw, open: true })}
      >
        <GWrap>
          <Trad onClick={phraseClick} className={`Trad fix`}>
            {phrase.trad}
          </Trad>
          <List type={type} entries={phrase.words!} glo />
        </GWrap>
      </PhraseWrap>
    )
  } else {
    return (
      <PhraseWrap className={classnames(className, { nsfw: phrase.nsfw })}>
        <Info onClick={phraseClick} className={open ? 'open' : ''}>
          ℹ️
        </Info>
        {open ? (
          <GWrap className="open">
            <Trad className="Trad">{phrase.trad}</Trad>
            <List type={type} entries={phrase.words!} glo />
          </GWrap>
        ) : (
          <List type={type} entries={phrase.words!} glo={open} />
        )}
      </PhraseWrap>
    )
  }
}
