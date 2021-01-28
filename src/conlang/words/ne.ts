import * as _ from '.'

export const ne = _.word('ne', {
  prefix: 'negation, destruction (Samhara)',
  glo: 'NEG',
  desc: () =>
    `Also means something along the line of 'world of words' or common trance (${_.nepa})`,
})

export const nefa = _.word('nefa', {
  verb: 'to close eyes, to not look',
})

export const neoda = _.word('neoda', {
  def: 'corpse',
  etym: () => [_.ne, _.oda],
  see: () => [_.nem],
})

export const nepa = _.word('nepa', {
  def: 'abyss, nothingness',
})

export const nelo = _.word('nelo', {
  verb: 'to struggle',
  etym: () => [_.ne, _.loV],
  see: () => [_.gupi],
})
