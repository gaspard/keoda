import * as _ from '.'

export const ha = _.word('ha', {
  noun: 'tête',
  adj: 'loin',
  prefix: 'partie supérieure ou distale',
})
_.see(_.djo)
_.see(_.hama)

_.see(_.djoha)

export const hafalo = _.example([_.ha, _.fa, _.lo], `Montre ta tête, soumise !`)

export const inefehafoda = _.example(
  [_.i, _.nefe, _.hao],
  `Enlève les habits qui couvrent ton buste.`
)
export const iohaftarkepal = _.example(
  [_.o, _.hataj, _.kepal],
  `On va te pénétrer l'anus avec le gland.`
)

export const enopisamdjobajom = _.example(
  [_.e, _.nopi, _.sam, _.habaj, _.om],
  `Mets-toi sur le dos, les pieds contre les cuisses, jambes écartées.`
)

export const enopishusamdur = _.example(
  [_.e, _.nopi, _.shu, _.sam, _.dur],
  `Mets-toi sur le dos, les pieds contre ma nuque.`
)

export const duha = _.word('duha', {
  noun: 'visage',
  etym: () => [_.du, _.ha],
})

export const hawe = _.word('hawe', {
  noun: 'joue droite',
  etym: () => [_.ha, _.we],
})
_.see(_.we)

export const hase = _.word('hase', {
  noun: 'joue gauche',
  etym: () => [_.ha, _.se],
})
_.see(_.se)

export const noha = _.word('noha', {
  noun: 'occiput (dos de la tête)',
  etym: () => [_.no, _.ha],
})
_.see(_.no)
