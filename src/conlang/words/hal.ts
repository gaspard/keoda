import * as _ from '.'

export const hal = _.word('hal', {
  mod: 'from the sky',
  glo: '*from the sky*',
})

export const mahal = _.word('mahal', {
  noun: 'divine action',
  mod: 'miraculous',
  etym: () => [_.ma, _.hal],
})
