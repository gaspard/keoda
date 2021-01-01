import * as _ from '.'

export const shi = _.word('shi', {
  conj: 'you (2PL.PRS)',
  noun: '6',
  see: () => [_.counting],
})

export const shida = _.word('shida', {
  pron: 'you',
  glo: '2PL',
  etym: () => [_.shi, _.oda],
  see: () => [_.toshi, _.shiya, _.pron],
})

export const shiya = _.word('shiya', {
  pron: 'you (poetic)',
  glo: '2PL.POET',
  etym: () => [_.shi, _.yada],
  see: () => [_.shida, _.pron],
})

export const shipa = _.word('shipa', {
  noun: 'believing',
  see: () => [_.ganes, _.shifi, _.negu],
})

export const shifi = _.word('shifi', {
  adj: 'learning',
  see: () => [_.nanes, _.shipa],
})
