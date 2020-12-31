import * as _ from '.'

export const sam = _.word('sam', {
  noun: 'foot',
  posit: 'standing',
})

export const samoda = _.word('samoda', {
  noun: 'hero',
  glo: 'foot.person',
  etym: () => [_.sam, _.oda],
})

export const fesam = _.word('fesam', { noun: 'chaussettes' })

export const hasam = _.word('hasam', { noun: 'orteil' })

export const djosam = _.word('djosam', { noun: 'cheville' })

_.see(_.enopisamdjobajom)
