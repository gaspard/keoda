import * as _ from '.'

export const e = _.word('e', {
  verb: 'to be',
  // Is this used ?
  prefix: 'passive',
  glo: 'BE',
})

export const yihe = _.alt('yihe', {
  glo: '2SG.TINY.**be**',
  alt: () => _.e,
})
