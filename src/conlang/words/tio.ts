import * as _ from '.'

export const tio = _.word('tio', {
  def: `genitals`,
  verb: `faire l'amour`,
})
_.see(_.pio)

export const fatio = _.word('fatio', {
  def: "iris (fleur de l'oeil",
  etym: () => [_.fa, _.tio],
})

export const tiona = _.word('tiona', {
  def: 'flower (genital thing)',
  etym: () => [_.tio, _.na],
})

// cueillir des fleurs
export const lasimuhadjotionayon = _.example(
  [_.la, _.si, _.muhajo, _.tiona, _.yon],
  `Embrasse ma vulve comme si tu cueillais des fleurs.`
)
