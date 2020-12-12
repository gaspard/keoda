import * as _ from '.'

export const piu = _.word('piu', {
  noun: 'vert',
})
_.see(_.colors)

export const piuna = _.word('piuna', {
  noun: 'épinards (mai)',
  derived: () => [_.piu, _.na],
})
_.see(_.seasons)

export const piulil = _.word('piulil', {
  noun: 'petits pois',
  derived: () => [_.piu, _.lil],
})

export const piutaj = _.word('piutaj', {
  noun: 'poireaux (mars)',
})
