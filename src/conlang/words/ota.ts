import * as _ from '.'

export const ota = _.word('ota', {
  def: 'source, ouverture',
})

export const lamota = _.word('otalamon', {
  def: `cercle de l'urètre`,
  desc: () => `zone autour de l'urètre (chez la femme)`,
  etym: () => [_.lame, _.ota],
})

export const hamunota = _.word('hamunon', {
  def: 'areola',
  etym: () => [_.hamun, _.on],
})

export const kepalota = _.word('kepalota', {
  def: `zone autour de l'anus`,
  etym: () => [_.kepal, _.ota],
})
_.see(_.genitals)
_.see(_.lamota)
