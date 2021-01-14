import * as _ from '.'

export const na = _.word('na', {
  suffix: 'thing',
  adj: 'humility',
})

export const nena = _.word('nena', {
  noun: 'nothing',
  etym: () => [_.ne, _.na],
})

// === alt

export const nenam = _.alt('nenam', {
  glo: '**nothing**.ACC',
  alt: () => _.nena,
})
