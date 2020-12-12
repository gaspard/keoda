import * as _ from '.'

export const yoda = _.word('yoda', { noun: 'corps avec une vulve' })

export const oda = _.word('oda', {
  noun: 'corps, lieu vivant ("on")',
  suffix: 'animal comme, qui a',
  desc: () => `De là vient ${_.keoda} (**la langue cachée du corps**).`,
})
_.see(_.pronouns)
_.see(_.to)

export const oha = _.word('oha', {
  pronoun: 'soi poétique (nous indéf)',
  derived: () => [_.o, _.yada],
})

export const keoda = _.word('keoda', {
  noun: 'lieu de vie cachée, langue cachée du corps',
})

export const yosa = _.word('yosa', {
  noun: 'humain',
  derived: () => [_.yo, _.oda],
})

_.see(_.ida)
_.see(_.ti)

export const ada = _.word('oho', {
  noun: 'iel',
  derived: () => [_.a, _.oda],
})
_.see(_.ta)
