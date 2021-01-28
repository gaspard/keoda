import * as _ from '.'

export const ha = _.word('ha', {
  prep: 'up',
  def: 'head',
  adj: 'far',
  prefix: 'top or distal',
  see: () => [_.jo],
})
_.see(_.hama)

_.see(_.hafo)

export const hafalo = _.example([_.ha, _.fa, _.lo], `Montre ta tête, soumise !`)

export const inefehafoda = _.example(
  [_.iC, _.nefe, _.hao],
  `Enlève les habits qui couvrent ton buste.`
)
export const iohaftarkepal = _.example(
  [_.oC, _.hataj, _.kepal],
  `On va te pénétrer l'anus avec le gland.`
)

export const duha = _.word('duha', {
  def: 'face',
  etym: () => [_.du, _.ha],
})

export const duhasha = _.word('duhasha', {
  verb: 'to laugh',
  etym: () => [_.duha, _.shaH],
})

export const hawe = _.word('hawe', {
  def: 'right cheek',
  etym: () => [_.ha, _.we],
})

export const hase = _.word('hase', {
  def: 'left cheek',
  etym: () => [_.ha, _.se],
})

export const noha = _.word('noha', {
  def: 'occiput (back of the head)',
  etym: () => [_.no, _.ha],
})

export const hada = _.word('hada', {
  def: 'parent',
  etym: () => [_.ha, _.oda],
  see: () => [_.family],
})

export const hana = _.word('hana', {
  def: 'mother',
  etym: () => [_.ha, _.ana],
  see: () => [_.family],
})

export const hawi = _.word('hawi', {
  def: 'enby parent',
  etym: () => [_.ha, _.iwi],
  see: () => [_.family],
})

export const hato = _.word('hato', {
  def: 'father',
  see: () => [_.duto, _.noto, _.ha],
})

// === alt
export const feduhati = _.alt('feduhati', {
  glo: 'SUPESS.**face**.you1',
  alt: () => _.duha,
})

export const iduhasha = _.alt('iduhasha', {
  glo: '2SG.**laugh**',
  alt: () => _.duhasha,
})

export const duhashati = _.alt('duhashati', {
  glo: '**laugh**.you1',
  alt: () => _.duhasha,
})

export const duhawu = _.alt('duhawu', {
  glo: '**face**.POSS',
  alt: () => _.duha,
})

export const duham = _.alt('duham', {
  glo: '**face**+',
  alt: () => _.duha,
})

export const duhatinam = _.alt('duhatinam', {
  glo: '**face**.you1+',
  alt: () => _.duha,
})
