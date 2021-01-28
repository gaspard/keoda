import * as _ from '.'

export const lo = _.word('lo', {
  noun: '**submissive**',
  glo: 'submissive',
  prop: 'wet, who receives',
  action: 'to surrender',
})

export const olo = _.word('olo', {
  noun: '**weˣ** wet',
  pref: 'ourˣ wet',
  suff: 'ourˣ wet',
  glo: '**weˣ**.WET',
  etym: () => [_.iS, _.lo],
  see: () => [_.subj],
})

export const ilo = _.word('tilo', {
  noun: '**you¹** wet',
  pref: 'your¹ wet',
  suff: 'your¹ wet',
  glo: '**you1**.WET',
  etym: () => [_.iS, _.lo],
  see: () => [_.subj],
})

export const alo = _.word('alo', {
  noun: '**they¹** wet',
  pref: 'their¹ wet',
  suff: 'their¹ wet',
  glo: '**they1**.WET',
  etym: () => [_.aS, _.lo],
  see: () => [_.subj],
})

export const sholo = _.word('sholo', {
  noun: '**we\\*** wet',
  pref: 'our* wet',
  suff: 'our* wet',
  glo: '**we\\***.WET',
  etym: () => [_.sho, _.lo],
  see: () => [_.subj],
})

export const shilo = _.word('shilo', {
  noun: '**you\\*** wet',
  pref: 'your* wet',
  suff: 'your* wet',
  glo: '**you\\***.WET',
  etym: () => [_.sho, _.lo],
  see: () => [_.subj],
})

export const shalo = _.word('shalo', {
  noun: '**they\\*** wet',
  pref: 'their* wet',
  suff: 'their* wet',
  glo: '**they\\***.WET',
  etym: () => [_.sho, _.lo],
  see: () => [_.subj],
})

export const loda = _.word('loda', {
  noun: '**submissive person**',
  etym: () => [_.lo, _.da],
  see: () => [_.subj],
})

export const loru = _.word('loru', {
  action: 'to submit, to become small',
  prop: 'humilité',
  etym: () => [_.lo, _.ru],
})

export const silo = _.word('silo', {
  prop: 'doucement',
  desc: () => `De ${_.si} et ${_.lo} (comme soumis.e).`,
})

// === alt

export const loV = _.alt('lo', {
  glo: '**surrender**',
  alt: () => _.lo,
})
