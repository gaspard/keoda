import * as _ from '../lang'

export const na = _.word('na', {
  noun: 'thing',
  suff: 'thing',
  adj: 'humility',
})

export const nena = _.word('nena', {
  noun: 'nothing',
  etym: () => [_.ne, _.na],
})

// === alt
