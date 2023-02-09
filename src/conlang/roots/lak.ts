import * as _ from '../lang'

export const lak = _.word('lak', {
  noun: 'food',
  verb: 'to share',
})

export const lakashan = _.word('lakashan', {
  noun: 'mess',
  verb: 'to disturb',
  desc: () => `Portion of food.`,
  etym: () => [_.lak, _.shan],
})
