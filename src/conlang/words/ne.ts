import * as _ from '.'

export const neW = _.word('ne', {
  pref: 'negation, destruction (Samhara)',
  glo: 'NEG',
  desc: () =>
    `Also means something along the line of 'world of words' or common trance (${_.nepa})`,
})

export const nefa = _.word('nefa', {
  verb: 'to close eyes, to not look',
})

export const neoda = _.word('neoda', {
  noun: 'corpse',
  etym: () => [_.neW, _.oda],
  see: () => [_.nem],
})

export const nepa = _.word('nepa', {
  noun: 'abyss, nothingness',
})

export const nelo = _.word('nelo', {
  verb: 'to struggle',
  etym: () => [_.neW, _.loV],
  see: () => [_.gupi],
})
