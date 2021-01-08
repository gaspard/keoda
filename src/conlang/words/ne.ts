import * as _ from '.'

export const ne = _.word('ne', {
  prefix: 'negation, destruction (Samhara)',
  desc: () =>
    `Also means something along the line of 'world of words' or common trance (${_.nepa})`,
})

export const inefeoda = _.example([_.i, _.ne, _.feoda], 'Enlève tes habits.')
export const nefeoda = _.example(
  [_.ne, _.feoda],
  'Enlève tes habits (corps nu).'
)

export const nefa = _.word('nefa', {
  verb: 'to close eyes, to not look',
})

export const neoda = _.word('neoda', {
  noun: 'corpse',
  etym: () => [_.ne, _.oda],
  see: () => [_.nem],
})

export const nepa = _.word('nepa', {
  noun: 'abyss, nothingness',
})

export const nelo = _.word('nelo', {
  verb: 'to struggle',
  desc: () => `to not surrender`,
  etym: () => [_.ne, _.lo],
})

export const nemafeyon = _.example([_.nema, _.feyon], `Lâche ta culotte.`)
