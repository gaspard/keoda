import * as _ from '.'

export const liu = _.word('liu', {
  action: 'to eat',
  etym: () => [_.li, _.u],
})
_.see(_.li)

// === alt

export const sholiu = _.alt('sholiu', {
  glo: '1PL.**eat**',
  alt: () => _.liu,
})

export const oluliu = _.alt('oluliu', {
  glo: 'wex.CONT.**eat**',
  alt: () => _.liu,
})
