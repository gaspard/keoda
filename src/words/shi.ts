import * as _ from '.'

export const shi = _.word('shi', { conj: 'vous', noun: '6' })
_.see(_.shimaconj)
_.see(_.counting)

export const shiho = _.word('shiho', {
  noun: 'vous',
  derived: [_.shi, _.oda],
})
_.see(_.pronouns)

export const shiha = _.word('shiha', {
  noun: 'vous poétique',
  derived: [_.shi, _.ada],
})

export const shipa = _.word('shipa', {
  noun: 'croire',
})
_.see(_.scale)
_.see(_.negu)
