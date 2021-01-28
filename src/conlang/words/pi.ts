import * as _ from '.'

export const pi = _.word('pi', {
  subj: 'I (1SG)',
  adv: 'ici, origine',
  def: '1, self',
  glo: 'me',
  posit: 'debout',
  see: () => [_.pa],
})

export const opi = _.word('opi', {
  def: '**I**',
  prefix: '**my**',
  suffix: '**my**',
  etym: () => [_.oS, _.pi],
  see: () => [_.subj],
})

export const pida = _.word('pida', {
  pron: '**I person**',
  etym: () => [_.pi, _.da],
  see: () => [_.subj],
})

export const papi = _.word('papi', {
  def: 'sagesse (tout écho en soi)',
  etym: () => [_.pa, _.pi],
})

export const pipa = _.word('pipa', {
  def: 'innocence (soi partout)',
  etym: () => [_.pi, _.pa],
})

export const pienu = _.word('pienu', {
  adj: 'alone (I embroider)',
  etym: () => [_.pi, _.enu],
})

export const aupi = _.word('aupi', {
  verb: `to love onself`,
  glo: '**heart**.self',
  etym: () => [_.au, _.pi],
})

export const gupi = _.word('gupi', {
  verb: 'to accept',
  etym: () => [_.gu, _.pi],
  see: () => [_.nelo, _.kupa],
})

export const nepi = _.word('nepi', {
  def: 'division',
  adj: 'disembodied, fragmented',
  see: () => [_.ganes, _.nanes],
})

// L'écoute de djopi ouvre à hapi
export const djopi = _.word('djopi', {
  def: 'soi proximal (soi profond, souvent le passé)',
})

// Sentir hapi donne le courage d'écouter djopi
export const hapi = _.word('hapi', {
  def: 'soi distal (Grand Soi, Grande Sœur, Grand Frère, souvent le futur)',
})

export const piyi = _.word('piyi', {
  subj: 'I (tiny)',
  glo: '1SG.DIM',
  see: () => [_.verbs],
})

export const topim = _.alt('topim', {
  glo: '**I**+',
  alt: () => _.opi,
})
