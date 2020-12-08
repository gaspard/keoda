import * as _ from '.'

export const pe = _.word('pe', {
  noun: '3',
  suffix: 'quelques un.e.s',
  position: 'deux jambes et un anus (levrette) = mun',
})
_.see(_.pemaconj)
_.see(_.counting)

export const peho = _.word('peho', {
  pronoun: 'quelques',
  derived: [_.pe, _.oda],
})
_.see(_.pronouns)

export const hamape = _.word('hamape', {
  noun: 'majeur (3ème doigt)',
  position:
    'levrette (mun): 2 jambes et 1 anus (indiquée par un signe de main: pouce contre majeur)',
})

export const nepe = _.word('nepe', {
  noun: 'isolement (oubli de "pa")',
})
_.see(_.scale)
