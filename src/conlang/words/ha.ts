import * as _ from '.'

export const ha = _.word('ha', {
  noun: 'head',
  adj: 'far',
  prefix: 'top or distal',
  see: () => [_.jo],
})
_.see(_.jo)
_.see(_.hama)

_.see(_.joha)

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

export const duhasha = _.word('duhasha', {
  verb: 'to laugh',
  etym: () => [_.duha, _.sha],
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

export const hada = _.word('hada', {
  noun: 'parent',
  etym: () => [_.ha, _.oda],
  see: () => [_.family],
})

export const hana = _.word('hana', {
  noun: 'mother',
  etym: () => [_.ha, _.ana],
  see: () => [_.family],
})

export const hawi = _.word('hawi', {
  noun: 'enby parent',
  etym: () => [_.ha, _.iwi],
  see: () => [_.family],
})

export const hato = _.word('hato', {
  noun: 'father',
  see: () => [_.duto, _.noto, _.ha],
})

// === alt
export const feduhati = _.alt('feduhati', {
  glo: 'SUPESS.**face**.POSS.2SG',
  alt: () => _.duha,
})

export const iduhasha = _.alt('iduhasha', {
  glo: '2SG.**laugh**',
  alt: () => _.duhasha,
})

export const duhashati = _.alt('duhashati', {
  glo: '**laugh**.POSS.2SG',
  alt: () => _.duhasha,
})

export const duhawu = _.alt('duhawu', {
  glo: '**face**.POSS',
  alt: () => _.duha,
})

export const duham = _.alt('duham', {
  glo: '**face**.ACC',
  alt: () => _.duha,
})
