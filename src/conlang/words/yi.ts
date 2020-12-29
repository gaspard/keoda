import * as _ from '.'

export const yi = _.word('yi', {
  conj: 'you depraved (2SG.DPRV)',
  adj: 'tiny',
  see: () => [_.tiyi],
})
_.see(_.yimaconj)

export const yida = _.word('yida', {
  pron: 'tu dépravé',
  etym: () => [_.yi, _.oda],
})
_.see(_.pronouns)
