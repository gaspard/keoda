import * as _ from '.'

export const liu = _.word('liu', {
  verb: 'eat (pull in mouth)',
  etym: () => [_.li, _.u],
})
_.see(_.li)

export const sholiu = _.alt('sholiu', {
  glo: '1PL.**eat**',
  alt: () => _.liu,
})
