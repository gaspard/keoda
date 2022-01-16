import * as _ from '../lang'

export const lim = _.word('lim', {
  noun: 'threshold',
  adj: 'liminal',
})

export const lima = _.word('lima', {
  noun: 'door',
  verb: 'to cross',
  etym: () => [_.lim, _.na],
})
