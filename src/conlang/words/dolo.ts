import * as _ from '.'

export const dolo = _.word('dolo', {
  verb: 'to lie',
  noun: 'deceit',
})

// === alt

export const adololem = _.alt('adololem', {
  glo: '3SG.**lie**.PST',
  alt: () => _.dolo,
})
