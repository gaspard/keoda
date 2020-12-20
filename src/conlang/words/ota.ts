import * as _ from '.'

export const ota = _.word('ota', {
  noun: 'source, ouverture',
})

export const lamota = _.word('otalamon', {
  noun: `cercle de l'urètre`,
  desc: () => `zone autour de l'urètre (chez la femme)`,
  etym: () => [_.lam, _.ota],
})

export const hamunota = _.word('hamunon', {
  noun: 'areola',
  etym: () => [_.hamun, _.on],
})

export const kepalota = _.word('kepalota', {
  noun: `zone autour de l'anus`,
  etym: () => [_.kepal, _.ota],
})
_.see(_.genitals)
_.see(_.lamota)
