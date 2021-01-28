import * as _ from '.'

export const hal = _.word('hal', {
  prop: 'from the sky',
  glo: '*from the sky*',
})

export const mahal = _.word('mahal', {
  noun: 'divine action',
  prop: 'miraculous',
  etym: () => [_.ma, _.hal],
})
