import * as _ from '../lang'

export const dua = _.word('dua', {
  noun: 'reflection',
})

export const duana = _.word('duana', {
  noun: 'mirror',
  etym: () => [_.dua, _.na],
})
