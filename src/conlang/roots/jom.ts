import * as _ from '../lang'

export const jom = _.word('jom', {
  noun: 'clan',
  desc: () => 'Can also mean "group" or "family" depending on context.',
})

export const junu = _.word('junu', {
  noun: 'forest',
  etym: () => [_.jom, _.unu],
})
