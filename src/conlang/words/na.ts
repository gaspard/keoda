import * as _ from '.'

export const na = _.word('na', {
  suff: 'thing',
  adj: 'humility',
})

export const nena = _.word('nena', {
  noun: 'nothing',
  etym: () => [_.ne, _.na],
})

// === alt
