import * as _ from '.'

export const dolo = _.word('dolo', {
  verb: 'to lie',
  noun: 'deceit',
})

// === alt

export const aludololem = _.alt('aludololem', {
  glo: '3SG.CONT.**lie**.PST',
  alt: () => _.dolo,
})
