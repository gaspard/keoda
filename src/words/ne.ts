import * as _ from '.'

export const ne = _.word('ne', {
  prefix: 'négation, monde des mots, transe commune',
})

export const inefeoda = _.example([_.i, _.ne, _.feoda], 'Enlève tes habits.')
export const nefeoda = _.example(
  [_.ne, _.feoda],
  'Enlève tes habits (corps nu).'
)
export const nefa = _.example([_.ne, _.fa], 'Ferme les yeux (pas yeux).')
export const neoda = _.word('neoda', {
  noun: 'cadavre, sans corps, personne (no body)',
})
export const negu = _.word('negu', { verb: 'mourir', derived: [_.ne, _.gu] })
export const nepa = _.word('nepa', { noun: 'abysse, néant' })
export const nelo = _.word('nelo', {
  verb: 'lutter',
  desc: () => `De ${_.ne} et ${_.lo}, ne pas se soumettre.`,
})

export const nemafeyon = _.example([_.nema, _.feyon], `Lâche ta culotte.`)
