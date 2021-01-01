import * as _ from '.'

export const pi = _.word('pi', {
  conj: 'I (1SG)',
  adv: 'ici, origine',
  noun: '1, self',
  posit: 'debout',
  desc: () => `Opposé de ${_.pa}.`,
})
_.see(_.counting)
_.see(_.pio)
_.see(_.ajapi)

export const pida = _.word('pida', {
  pron: 'me',
  glo: '1SG',
  etym: () => [_.pi, _.oda],
  see: () => [_.piya, _.pron],
})

export const piyida = _.word('piyida', {
  pron: 'tiny me',
  glo: '1SG.DPRV',
  etym: () => [_.piyi, _.oda],
  see: () => [_.piyiya, _.pron],
})

export const piyiya = _.word('piyiya', {
  pron: 'tiny me (poetic)',
  glo: '1SG.DPRV.POET',
  etym: () => [_.piyi, _.yada],
  see: () => [_.piyida, _.pron],
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
  adj: 'alone (I embroider)',
  etym: () => [_.pi, _.enu],
})

export const aupi = _.word('aupi', {
  noun: `S'aimer soi-même, ici.`,
  etym: () => [_.au, _.pi],
})

export const gupi = _.word('gupi', {
  noun: `intégrer le mouvement, ressentir, se laisser transformer`,
  etym: () => [_.gu, _.pi],
})
_.see(_.kupa)

export const negupi = _.word('negupi', {
  noun: "lutter contre l'expérience",
  etym: () => [_.ne, _.gupi],
})

export const nepi = _.word('nepi', {
  noun: 'division',
  adj: 'disembodied, fragmented',
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

export const piyi = _.word('piyi', {
  conj: 'I (tiny/depraved)',
  glo: '1SG.DPRV',
  see: () => [_.verbs],
})

export const topiyi = _.word('topiyi', {
  det: 'to me (tiny/depraved)',
  glo: 'POSS.1SG.DPRV',
  see: () => [_.poss],
})
