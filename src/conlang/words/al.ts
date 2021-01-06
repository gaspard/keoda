import * as _ from '.'

export const al = _.word('al', {
  noun: 'sky',
  prefix: 'up',
  see: () => [_.so],
})

export const alayin = _.word('alayin', {
  noun: 'top of vagina',
  etym: () => [_.al, _.yin],
})

export const dalayin = _.word('dalayin', {
  noun: 'G spot',
  etym: () => [_.du, _.alayin],
})
