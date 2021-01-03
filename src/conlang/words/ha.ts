import * as _ from '.'

export const ha = _.word('ha', {
  noun: 'head',
  adj: 'far',
  prefix: 'top or distal',
  see: () => [_.djo],
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

export const duha = _.word('duha', {
  noun: 'face',
  etym: () => [_.du, _.ha],
})

export const hawe = _.word('hawe', {
  noun: 'right cheek',
  etym: () => [_.ha, _.we],
})

export const hase = _.word('hase', {
  noun: 'left cheek',
  etym: () => [_.ha, _.se],
})

export const noha = _.word('noha', {
  noun: 'occiput (back of the head)',
  etym: () => [_.no, _.ha],
})

// === alt
export const feduhati = _.alt('feduhati', {
  glo: 'SUPESS.**face**.POSS.2SG',
  alt: () => _.duha,
})
