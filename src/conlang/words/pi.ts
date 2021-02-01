import * as _ from '.'

export const pi = _.word('pi', {
  def: 'I (1SG)',
  mod: 'ici, origine',
  noun: '1, self',
  glo: 'me',
  pos: 'debout',
  see: () => [_.pa],
})

export const pida = _.word('pida', {
  def: '**I person**',
  etym: () => [_.pi, _.da],
  see: () => [_.subj],
})

export const papi = _.word('papi', {
  noun: 'sagesse (tout écho en soi)',
  etym: () => [_.pa, _.pi],
})

export const pipa = _.word('pipa', {
  noun: 'innocence (soi partout)',
  etym: () => [_.pi, _.pa],
})

export const pienu = _.word('pienu', {
  mod: 'alone (I embroider)',
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
  noun: 'division',
  mod: 'disembodied, fragmented',
  see: () => [_.ganes, _.nanes],
})

// L'écoute de djopi ouvre à hapi
export const djopi = _.word('djopi', {
  noun: 'soi proximal (soi profond, souvent le passé)',
})

// Sentir hapi donne le courage d'écouter djopi
export const hapi = _.word('hapi', {
  noun: 'soi distal (Grand Soi, Grande Sœur, Grand Frère, souvent le futur)',
})

export const piyi$ = _.word('piyi', {
  def: '**I (tiny)**',
  glo: 'I.TINY',
  see: () => [_.verbs],
})
