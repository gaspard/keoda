import * as _ from '.'

export const dolo = _.word('dolo', {
  action: 'to lie',
  noun: 'deceit',
})

// === alt

export const aludololem = _.alt('aludololem', {
  glo: 'they1.CONT.**lie**.PST',
  alt: () => _.dolo,
})
