import * as _ from '.'

export const pi = _.word('pi', {
  adv: 'ici, origine',
  noun: '1',
  position: 'debout',
  conj: 'je',
  desc: () => `Opposé de ${_.pa}.`,
})
_.see(_.counting)
_.see(_.pio)
_.see(_.ajapi)

// NB: "on" serait "oda" mais on utilise souvent pida ou shoda à la place.
export const pida = _.word('pida', {
  noun: 'moi',
  derived: () => [_.pi, _.oda],
})
_.see(_.pronouns)
_.see(_.piha)

export const papi = _.word('papi', {
  noun: 'sagesse (tout écho en soi)',
  derived: () => [_.pa, _.pi],
})

export const pipa = _.word('pipa', {
  noun: 'innocence (soi partout)',
  derived: () => [_.pi, _.pa],
})

export const pinu = _.word('pinu', {
  noun: 'seul (le soi brodé, je brode)',
  derived: () => [_.pi, _.nu],
})

export const aupi = _.word('aupi', {
  noun: `S'aimer soi-même, ici.`,
  derived: () => [_.au, _.pi],
})

export const gupi = _.word('gupi', {
  noun: `intégrer le mouvement, ressentir, se laisser transformer`,
  derived: () => [_.gu, _.pi],
})
_.see(_.kupa)

export const negupi = _.word('negupi', {
  noun: "lutter contre l'expérience",
  derived: () => [_.ne, _.gupi],
})

export const nepi = _.word('nepi', {
  noun: 'division',
})
_.see(_.scale)

// L'écoute de djopi ouvre à hapi
export const djopi = _.word('djopi', {
  noun: 'soi proximal (soi profond, souvent le passé)',
})

// Sentir hapi donne le courage d'écouter djopi
export const hapi = _.word('hapi', {
  noun: 'soi distal (Grand Soi, Grande Sœur, Grand Frère, souvent le futur)',
})
