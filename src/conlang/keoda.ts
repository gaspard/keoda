import { BaseType, EntryOrPrefix, makeLang } from '../conlib'
import * as words from './words'

const keoda = makeLang<typeof words>()
export const entries = keoda.entries
export const prefix = keoda.prefix
export const suffix = keoda.suffix
export const phrase = keoda.phrase
export const word = keoda.word
export const alt = keoda.alt
export const card = keoda.card

export function block(
  ...phrases: { t: string; p: { id: string; type: BaseType; name: string }[] }[]
) {
  return `###### block\n* ${phrases.map(p => phrase(p.t, ...p.p)).join('\n* ')}`
}

export function phraseX(
  trad: string,
  ...args: { id: string; type: BaseType; name: string }[]
) {
  return keoda.makePhrase({ trad, nsfw: true, words: () => args })
}

export function ophrase(
  trad: string,
  ...args: { id: string; type: BaseType; name: string }[]
) {
  return keoda.makePhrase({ trad, words: () => args, open: true })
}

export function ref(entry: EntryOrPrefix) {
  const ent = keoda.resolve(entry)
  return `${ent} (${ent.definition[ent.definition.cla!]})`
}

export function refAndGlo(entry: EntryOrPrefix) {
  const ent = keoda.resolve(entry)
  const def = ent.definition[ent.definition.cla!]
  if (def) {
    return `${ent} (${def}) \`${ent.definition.glo}\``
  } else {
    return `${ent} \`${ent.definition.glo}\``
  }
}

export function debug(entry: EntryOrPrefix) {
  const ent = keoda.resolve(entry)
  return `### ${ent}\n\n~~~\n${JSON.stringify(ent.definition, null, 2)}\n~~~`
}

export function nounRef(entry: EntryOrPrefix) {
  const ent = keoda.resolve(entry)
  return `${ent} (${ent.definition.noun})`
}

export function adjRef(entry: EntryOrPrefix) {
  const ent = keoda.resolve(entry)
  return `${entry} (${ent.definition.adj})`
}

export function linkAndGlo(entry: EntryOrPrefix) {
  const ent = keoda.resolve(entry)
  return `${entry} \`${ent.definition.glo}\``
}

export function link(text: string, entry: EntryOrPrefix) {
  return `[${text}](${entry.type}-${entry.id})`
}
