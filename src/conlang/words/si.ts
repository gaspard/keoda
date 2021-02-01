import * as _ from '.'

export const si = _.word('si', {
  def: 'like, as if',
  pref: 'like',
  see: () => [_.prep, _.esi],
})

export const sigu = _.word('sigu', {
  adj: 'dark (like a mystery)',
  etym: () => [_.si, _.gu],
})

export const tajyonsitioa = _.example(
  [_.taj, _.yin, _.si, _.tiona],
  `Pénètre ma vulve comme si c'était une fleur.`
)

export const esi = _.word('esi', {
  def: 'so that',
  see: () => [_.prep],
  etym: () => [_.e, _.si],
})

_.see(_.lasimuhadjotionayon)

export const yonsitajkepalesila = _.example(
  [_.yin, _.si, _.fo, _.kepal, _.la],
  `Embrasse ma bouche de ta vulve comme si tu fouettais un anus.`
)
