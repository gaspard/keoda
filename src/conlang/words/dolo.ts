import * as _ from '.'

export const dolo = _.word('dolo', {
  verb: 'to lie',
  def: 'deceit',
})

// === alt

export const aludololem = _.alt('aludololem', {
  glo: 'they1.CONT.**lie**.PST',
  alt: () => _.dolo,
})
