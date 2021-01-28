import * as _ from '.'

export const na = _.word('na', {
  suffix: 'thing',
  adj: 'humility',
})

export const nena = _.word('nena', {
  def: 'nothing',
  etym: () => [_.ne, _.na],
})

// === alt

export const nenam = _.alt('nenam', {
  glo: '**nothing**+',
  alt: () => _.nena,
})
