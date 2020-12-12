import * as _ from '.'

export const tio = _.word('tio', {
  noun: `genitals`,
  verb: `faire l'amour`,
})
_.see(_.pio)

export const fatio = _.word('fatio', {
  noun: "iris (fleur de l'oeil",
  derived: () => [_.fa, _.tio],
})

export const tiona = _.word('tiona', {
  noun: 'flower (genital thing)',
  derived: () => [_.tio, _.na],
})

// cueillir des fleurs
export const lasimuhadjotionayon = _.example(
  [_.la, _.si, _.muhadjo, _.tiona, _.yon],
  `Embrasse ma vulve comme si tu cueillais des fleurs.`
)
