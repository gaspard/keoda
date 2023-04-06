import * as _ from '../lang'

export const lat = _.word('lat', {
  adj: 'wild',
})

export const nelat = _.word('nelat', {
  adj: 'tammed',
  etym: () => [_.ne, _.lat],
})
