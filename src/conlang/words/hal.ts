import * as _ from '.'

export const hal = _.word('hal', {
  adj: 'huge',
  adv: 'to the sky',
})

export const mahal = _.word('mahal', {
  noun: 'divine action',
  adj: 'miraculous',
  etym: () => [_.ma, _.hal],
})
