import * as _ from '.'

export const i$ = _.word('ti', {
  id: 'i$',
  noun: '**you¹**',
  pref: '**your¹**',
  suff: '**your¹**',
  see: () => [_.subj],
})

export const ida = _.word('ida', {
  noun: '**you¹ self**',
  glo: '**you1**.self',
  etym: () => [_.i$, _.da],
  see: () => [_.subj],
})

// === alt

export const tinam = _.alt('tinam', {
  glo: '**you1**.ACC++',
  alt: () => _.i$,
})
