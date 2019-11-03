import * as _ from '.'

export const si = _.word('si', {
  suffix: `comme`,
  desc: () =>
    `Annonce d'une manière qui se terminera par ${_.esi} (sauf si c'est qu'on mot).`,
})

export const tajyonsitioa = _.example(
  [_.taj, _.yon, _.si, _.tioa],
  `Pénètre ma vulve comme si c'était une fleur.`
)

export const esi = _.word('esi', {
  suffix: `ainsi, pour, de sorte que`,
})

_.see(_.lasimuhadjotioayon)

export const yonsitajkepalesila = _.example(
  [_.yon, _.si, _.fo, _.kepal, _.la],
  `Embrasse ma bouche de ta vulve comme si tu fouettais un anus.`
)
