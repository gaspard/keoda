import * as _ from '.'

export const kei = _.word('kei', {
  noun: '**Master**',
  prop: 'fantastic',
  see: () => [_.subj],
})

export const okei = _.word('okei', {
  noun: '**I** Fantastic',
  glo: '**I**.HONOR',
  etym: () => [_.oS, _.kei],
  see: () => [_.subj],
})

export const ikei = _.word('ikei', {
  noun: '**you¹** Fantastic',
  pref: 'your¹ Fantastic',
  suff: 'your¹ Fantastic',
  glo: '**you1**.HONOR',
  etym: () => [_.iS, _.kei],
  see: () => [_.subj],
})

export const akei = _.word('akei', {
  noun: '**they¹** Fantastic',
  pref: 'their¹ Fantastic',
  suff: 'their¹ Fantastic',
  glo: '**they1**.HONOR',
  etym: () => [_.aS, _.kei],
  see: () => [_.subj],
})

export const shokei = _.word('shokei', {
  noun: '**we\\*** Fantastic',
  pref: 'our* Fantastic',
  suff: 'our* Fantastic',
  glo: '**we\\***.HONOR',
  etym: () => [_.sho, _.kei],
  see: () => [_.subj],
})

export const shikei = _.word('shikei', {
  noun: '**you\\*** Fantastic',
  pref: 'your* Fantastic',
  suff: 'your* Fantastic',
  glo: '**you\\***.HONOR',
  etym: () => [_.sho, _.kei],
  see: () => [_.subj],
})

export const shakei = _.word('shakei', {
  noun: '**they\\*** Fantastic',
  pref: 'their* Fantastic',
  suff: 'their* Fantastic',
  glo: '**they\\***.HONOR',
  etym: () => [_.sho, _.kei],
  see: () => [_.subj],
})

export const keda = _.word('keda', {
  noun: '**Master-person**',
  etym: () => [_.kei, _.da],
  see: () => [_.subj],
})
