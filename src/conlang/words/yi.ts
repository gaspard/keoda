import * as _ from '.'

export const yi = _.word('yi', {
  noun: '**innoncence**',
  prop: 'tiny',
  suff: 'tiny',
})

export const oyi = _.word('oyi', {
  noun: '**weˣ tiny**',
  pref: 'ourˣ tiny',
  suff: 'ourˣ tiny',
  glo: '**weˣ**.DIM',
  etym: () => [_.iS, _.yi],
  see: () => [_.subj],
})

export const iyi = _.word('iyi', {
  noun: '**you¹ tiny**',
  pref: 'your¹ tiny',
  suff: 'your¹ tiny',
  glo: '**you1**.DIM',
  etym: () => [_.iS, _.yi],
  see: () => [_.subj],
})

export const ayi = _.word('ayi', {
  noun: '**they¹ tiny**',
  pref: 'their¹ tiny',
  suff: 'their¹ tiny',
  glo: '**they1**.DIM',
  etym: () => [_.aS, _.yi],
  see: () => [_.subj],
})

export const shoyi = _.word('shoyi', {
  noun: '**we\\* tiny**',
  pref: 'our* tiny',
  suff: 'our* tiny',
  glo: '**we\\***.DIM',
  etym: () => [_.sho, _.yi],
  see: () => [_.subj],
})

export const shiyi = _.word('shiyi', {
  noun: '**you\\* tiny**',
  pref: 'your tiny*',
  suff: 'your tiny*',
  glo: '**you\\***.DIM',
  etym: () => [_.sho, _.yi],
  see: () => [_.subj],
})

export const shayi = _.word('shayi', {
  noun: '**they\\* tiny**',
  pref: 'their tiny*',
  suff: 'their tiny*',
  glo: '**they\\***.DIM',
  etym: () => [_.sho, _.yi],
  see: () => [_.subj],
})

export const yile = _.word('yile', {
  noun: 'young',
  etym: () => [_.yi, _.lei],
})

export const yida = _.word('yida', {
  noun: '**tiny person**',
  etym: () => [_.yi, _.da],
})

// === alt
