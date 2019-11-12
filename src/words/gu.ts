import * as _ from '.'

export const gu = _.word('gu', {
  adj: 'obscurité, gestation, profondeur',
  prefix: 'profondeur',
})

export const guna = _.word('guna', {
  noun: 'vie',
})

export const guwu = _.word('guwu', {
  verb: 'donner',
  derived: [_.gu, _.wu],
})
export const guwuna = _.word('guwuna', {
  noun: 'don',
  derived: [_.guwu, _.na],
})

export const guru = _.word('guru', {
  noun: 'réalisation des profondeurs',
  derived: [_.gu, _.ru],
})
