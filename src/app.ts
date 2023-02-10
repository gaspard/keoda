import { IAction, IContext, Overmind } from 'overmind'
import { createHook } from 'overmind-react'
import { FunctionComponent as Comp } from 'react'
import styled from 'styled-components'
import * as actions from './actions'
import { FloatArg } from './actions'
import { CompiledEntriesByType } from './conlib'
export { styled, Comp }

export type Colors = {
  body_bg: string
  writ_btn_bg: string
  wrapper_border: string
  wrapper_shadow: string
  wrapper_bg: string
  nsfw_btn_bg: string
  // definitions
  definitions_bg: string
  // phrase
  phrase_glo_bg: string
  phrase_glo_border: string
  ref_color: string
  aspect_color: string
  writ_color: string
  name_color: string
  open_shadow: string

  glo_color: string
  noun_color: string
  adj_color: string
  verb_color: string
  adv_color: string

  nsfw_bg: string
  trad_bg: string
  trad_color: string
  fix_bg: string
  fix_color: string
  // list
  list_bg: string
  // def
  def_color: string
  def_h4_bg: string
  def_h4_color: string
  def_h4_border: string
  def_h5_bg: string
  // def titles:
  def_type: string
  def_text: string
  // main
  main_bg: string
  desc_color: string
  desc_h1: string
  desc_h2: string
  desc_h3: string
  desc_h4: string
  desc_a: string
  desc_code: string
  // title
  title_color: string
  title_bg: string
  // selected title
  selected_bg: string
  selected_title: string
  // todo
  suff_bg: string
  suff_shadow: string
  suff_color: string
  suff_border: string
}

export const COLORS: Colors = {
  body_bg: 'var(--body_bg)',
  writ_btn_bg: 'var(--body_bg)',
  wrapper_border: 'var(--wrapper_border)',
  wrapper_shadow: 'var(--wrapper_shadow)',
  wrapper_bg: 'var(--wrapper_bg)',
  nsfw_btn_bg: 'var(--nsfw_btn_bg)',
  // definitions
  definitions_bg: 'var(--definitions_bg)',
  // phrase
  phrase_glo_bg: 'var(--phrase_glo_bg)',
  phrase_glo_border: 'var(--phrase_glo_border)',
  ref_color: 'var(--ref_color)',
  aspect_color: 'var(--aspect_color)',
  writ_color: 'var(--writ_color)',
  name_color: 'var(--name_color)',
  open_shadow: 'var(--open_shadow)',

  glo_color: 'var(--glo_color)',
  noun_color: 'var(--noun_color)',
  adj_color: 'var(--adj_color)',
  verb_color: 'var(--verb_color)',
  adv_color: 'var(--adv_color)',

  nsfw_bg: 'var(--nsfw_bg)',
  trad_bg: 'var(--trad_bg)',
  trad_color: 'var(--trad_color)',
  fix_bg: 'var(--fix_bg)',
  fix_color: 'var(--fix_color)',
  // list
  list_bg: 'var(--list_bg)',
  // def
  def_color: 'var(--def_color)',
  def_h4_bg: 'var(--def_h4_bg)',
  def_h4_color: 'var(--def_h4_color)',
  def_h4_border: 'var(--def_h4_border)',
  def_h5_bg: 'var(--def_h5_bg)',
  // def titles
  def_type: 'var(--def_type)',
  def_text: 'var(--def_text)',
  // main
  main_bg: 'var(--main_bg)',
  desc_color: 'var(--desc_color)',
  desc_h1: 'var(--desc_h1)',
  desc_h2: 'var(--desc_h2)',
  desc_h3: 'var(--desc_h3)',
  desc_h4: 'var(--desc_h4)',
  desc_a: 'var(--desc_a)',
  desc_code: 'var(--desc_code)',
  // title
  title_color: 'var(--title_color)',
  title_bg: 'var(--title_bg)',
  // selected title
  selected_bg: 'var(--selected_bg)',
  selected_title: 'var(--selected_title)',
  // todo
  suff_bg: 'var(--suff_bg)',
  suff_shadow: 'var(--suff_shadow)',
  suff_color: 'var(--suff_color)',
  suff_border: 'var(--suff_border)',
}

export const DARK_COLORS: Colors = {
  body_bg: '#955694',
  writ_btn_bg: '#955694',
  wrapper_border: '#6c2f6f',
  wrapper_shadow: '#ff00ff1f',
  wrapper_bg: '#1c001c',
  nsfw_btn_bg: '#a7ff8f',
  // definitions
  definitions_bg: '#18021882',
  // phrase
  phrase_glo_bg: '#341e33',
  phrase_glo_border: '#f000f090',
  ref_color: '#35cdff',
  aspect_color: '#35ff50ba',
  writ_color: '#ff77ffb5',
  name_color: '#ff77ffb5',
  open_shadow: '-100px -100px 300px #000',

  glo_color: '#ffffff6b',
  noun_color: '#26ffeeaa',
  adj_color: '#5c9ab3',
  verb_color: '#ff964f',
  adv_color: '#ff77ffb5',

  nsfw_bg: '#061a06c9',
  trad_bg: '#341e33',
  trad_color: '#ffffffae',
  fix_bg: '#ffffff2e',
  fix_color: '#ffffff9e',
  // list
  list_bg: '#2c0f2f', //#94ff00d9',
  // def
  def_color: '#666',
  def_h4_bg: '#1f756f',
  def_h4_color: '#a9ffa6',
  def_h4_border: '#00ff5287',
  def_h5_bg: '#afada4',
  // def titles
  def_type: '#ffffff4b',
  def_text: '#a5a5a5',
  // main
  main_bg: '#0f142f',
  desc_color: '#a5a5a5',
  desc_h1: '#4cfff1',
  desc_h2: '#4cfff1',
  desc_h3: '#4cfff1',
  desc_h4: '#4cfff1',
  desc_a: '#ff5cff',
  desc_code: '#5cff5c',
  // title
  title_color: '#94ff00',
  title_bg: '#2c0f2f',
  // selected title
  selected_bg: '#59175c',
  selected_title: '#fc84fc',
  // todo
  suff_bg: '#f9f5e4f0',
  suff_shadow: '#33333340',
  suff_color: '#999',
  suff_border: '#a5a399bf',
}

export const LIGHT_COLORS: Colors = {
  body_bg: '#9ca5a7',
  writ_btn_bg: '#aba89d',
  wrapper_border: '#444',
  wrapper_shadow: '#0000001f', // 10px instead of 20px ?
  wrapper_bg: '#636159',
  nsfw_btn_bg: '#bfb370',
  // definitions
  definitions_bg: '#e4e1d582',
  // phrase
  phrase_glo_bg: '#d0cdc2',
  phrase_glo_border: '#333',
  ref_color: '#2c383c',
  aspect_color: '#565656',
  writ_color: '#2c383c50', // opacity: 0.4; color wasn't set.
  name_color: '#2c383c50', // opacity: 0.4; color wasn't set.
  open_shadow: '-100px -100px 300px #000',

  glo_color: '#777',
  noun_color: '#2e4f8c',
  adj_color: '#5c9ab3',
  verb_color: '#883ea7',
  adv_color: '#c371c1',

  nsfw_bg: '#ffa50063',
  trad_bg: '#d0cdc2',
  trad_color: '',
  fix_bg: '#ffffff1a',
  fix_color: 'inherit',
  // list
  list_bg: '#d0cdc261', // margin: 0 0 5px ?
  // def
  def_color: '#666',
  def_h4_bg: '#bfb370',
  def_h4_color: 'inherit',
  def_h4_border: '#88815e',
  def_h5_bg: '#afada4',
  // def titles
  def_type: '#0000004b',
  def_text: '#333',
  // main
  main_bg: 'none', // ??
  desc_color: '#555',
  desc_h1: '#444',
  desc_h2: '#444',
  desc_h3: '#444',
  desc_h4: '#444',
  desc_a: '#566284',
  desc_code: '#317577',
  // title
  title_color: '#333',
  title_bg: '#d6d3c6',
  // selected title
  selected_bg: '#e4d593',
  selected_title: 'inherit',
  // todo
  suff_bg: '#f9f5e4f0',
  suff_shadow: '#33333340',
  suff_color: '#999',
  suff_border: '#a5a399bf',
}

export interface Filter {
  type: 'type' | 'word'
  key: string
}

export interface Lexicons {
  word: string[]
  card: string[]
  phrase: string[]
  alt: string[]
}

export interface ZulapaConfig {
  onInitialize: (ctx: Overmind<ZulapaConfig>) => void
  state: {
    zulapa: {
      // Show telugu writing
      writ?: boolean
      // Show nsfw content
      nsfw?: boolean
      dark?: boolean
      selected?: string
      float?: FloatArg
      filter?: Filter
      db: CompiledEntriesByType
      lexicon: Lexicons
    }
  }
  actions: {
    zulapa: typeof actions
  }
}

export type Config = ZulapaConfig

export type Action<Input = void, Output = void> = IAction<Config, Input, Output>
export type AsyncAction<Input = void, Output = void> = IAction<
  Config,
  Input,
  Promise<Output>
>

export const useOvermind = createHook<Config>()

export type Context = IContext<Config>
