import * as _ from '.'

export const ne = _.word('ne', {
  pref: 'negation, destruction (Samhara)',
  glo: 'NEG',
  desc: () =>
    `Also means something along the line of 'world of words' or common trance (${_.nepa})`,
})

export const nefa = _.word('nefa', {
  action: 'to close eyes, to not look',
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
  action: 'to struggle',
  etym: () => [_.ne, _.loV],
  see: () => [_.gupi],
})
