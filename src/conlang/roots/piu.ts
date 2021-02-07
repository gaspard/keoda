import * as _ from '../lang'

export const piu = _.word('piu', {
  adj: 'green',
  see: () => [_.colors],
})

export const piuna = _.word('piuna', {
  noun: 'spinach, May',
  etym: () => [_.piu, _.na],
  see: () => [_.seasons, _.food],
})

export const piule = _.word('piule', {
  noun: 'peas',
  etym: () => [_.piu, _.lil],
  see: () => [_.food],
})

export const piutaj = _.word('piutaj', {
  noun: 'leek, March',
  see: () => [_.seasons, _.food],
})
