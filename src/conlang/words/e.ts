import * as _ from '.'

export const e = _.word('e', {
  verb: 'to be',
  prefix: 'passiv',
  glo: 'BE',
})

_.see(_.enopisamdjobajom)

export const yihe = _.alt('yihe', {
  glo: '2SG.DPRV.be',
  alt: () => _.e,
})
