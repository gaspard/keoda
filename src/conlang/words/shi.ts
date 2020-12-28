import * as _ from '.'

export const shi = _.word('shi', {
  conj: 'you (2PL.PRS)',
  noun: '6',
})
_.see(_.shimaconj)
_.see(_.counting)

export const shida = _.word('shida', {
  pron: 'you (2PL)',
  etym: () => [_.shi, _.oda],
})
_.see(_.pronouns)

export const shiha = _.word('shiha', {
  noun: 'vous poétique',
  etym: () => [_.shi, _.yada],
})

export const shipa = _.word('shipa', {
  noun: 'believing',
  see: () => [_.gunes, _.shifi, _.negu],
})

export const shifi = _.word('shifi', {
  adj: 'learning',
  see: () => [_.nunes, _.shipa],
})
