import * as _ from '.'

export const al = _.word('al', {
  noun: '**sky**',
  prop: 'up',
  pref: 'up',
  see: () => [_.so],
})

export const alayin = _.word('alayin', {
  noun: '**top of vagina**',
  prop: 'happy',
  etym: () => [_.al, _.yin],
  desc: () => `This should definitely have a name in english...`,
})

// === alt
