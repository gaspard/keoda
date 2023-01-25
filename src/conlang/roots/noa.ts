import * as _ from '../lang'

export const noa = _.word('noa', {
  noun: 'skin',
  verb: 'to touch',
})

export const nomy = _.word('nomy', {
  noun: 'Thank you',
  desc: () => 'You draw on my skin.',
  etym: () => [_.noa, _.my],
})
