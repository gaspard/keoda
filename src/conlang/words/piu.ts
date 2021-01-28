import * as _ from '.'

export const piu = _.word('piu', {
  adj: 'green',
  see: () => [_.colors],
})

export const piuna = _.word('piuna', {
  def: 'spinach, May',
  etym: () => [_.piu, _.na],
  see: () => [_.seasons, _.food],
})

export const piule = _.word('piule', {
  def: 'peas',
  etym: () => [_.piu, _.le],
  see: () => [_.food],
})

export const piutaj = _.word('piutaj', {
  def: 'leek, March',
  see: () => [_.seasons, _.food],
})
