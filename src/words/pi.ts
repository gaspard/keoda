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

export const aupi = _.word('aupi', {
  noun: `S'aimer soi-même, ici.`,
  derived: [_.au, _.pi],
})

export const gupi = _.word('gupi', {
  noun: `intégrer le mouvement, ressentir, se laisser transformer`,
  derived: [_.gu, _.pi],
})
_.see(_.kupa)

export const negupi = _.word('negupi', {
  noun: "lutter contre l'expérience",
  derived: [_.ne, _.gupi],
})

export const nepi = _.word('nepi', {
  noun: 'division',
})
_.see(_.scale)
