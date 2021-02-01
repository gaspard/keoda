import * as _ from '.'

export const a$ = _.word('a', {
  id: 'a$',
  noun: '**they¹**',
  pref: 'their',
  suff: 'their',
  see: () => [_.aC, _.subj],
})

export const ada = _.word('ada', {
  noun: '**they¹ self**',
  glo: '**they1**.self',
  etym: () => [_.a, _.da],
  see: () => [_.subj],
})

// === alt
