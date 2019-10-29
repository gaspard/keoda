import * as _ from '.'

export const ne = _.word('ne', { prefix: 'négation' })

export const inefeoda = _.example([_.i, _.ne, _.feoda], 'Enlève tes habits.')
export const nefeoda = _.example(
  [_.ne, _.feoda],
  'Enlève tes habits (corps nu).'
)

export const nefa = _.example([_.ne, _.fa], 'Ferme les yeux (pas yeux).')
export const neoda = _.word('neoda', { noun: 'dead (nobody)' })
export const nepa = _.word('nepa', { noun: 'abyss, void' })
export const nelo = _.word('nelo', {
  verb: 'lutter',
  desc: () => `De ${_.ne} et ${_.lo}, ne pas se soumettre.`,
})

export const nemafeyon = _.example([_.nema, _.feyon], `Lâche ta culotte.`)
