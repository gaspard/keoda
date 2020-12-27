import * as _ from '.'

export const piu = _.word('piu', {
  adj: 'green',
  see: () => [_.colors],
})

export const piuna = _.word('piuna', {
  noun: 'épinards (mai)',
  etym: () => [_.piu, _.na],
})
_.see(_.seasons)

export const piulil = _.word('piulil', {
  noun: 'petits pois',
  etym: () => [_.piu, _.lil],
})

export const piutaj = _.word('piutaj', {
  noun: 'poireaux (mars)',
})
