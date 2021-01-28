import * as _ from '.'

export const lo = _.word('lo', {
  def: '**submissive**',
  glo: 'submissive',
  adj: 'wet, who receives',
  verb: 'to surrender',
})

export const olo = _.word('olo', {
  def: '**weˣ** wet',
  prefix: 'ourˣ wet',
  suffix: 'ourˣ wet',
  glo: '**weˣ**.WET',
  etym: () => [_.iS, _.lo],
  see: () => [_.subj],
})

export const ilo = _.word('tilo', {
  def: '**you¹** wet',
  prefix: 'your¹ wet',
  suffix: 'your¹ wet',
  glo: '**you1**.WET',
  etym: () => [_.iS, _.lo],
  see: () => [_.subj],
})

export const alo = _.word('alo', {
  def: '**they¹** wet',
  prefix: 'their¹ wet',
  suffix: 'their¹ wet',
  glo: '**they1**.WET',
  etym: () => [_.aS, _.lo],
  see: () => [_.subj],
})

export const sholo = _.word('sholo', {
  def: '**we\\*** wet',
  prefix: 'our* wet',
  suffix: 'our* wet',
  glo: '**we\\***.WET',
  etym: () => [_.sho, _.lo],
  see: () => [_.subj],
})

export const shilo = _.word('shilo', {
  def: '**you\\*** wet',
  prefix: 'your* wet',
  suffix: 'your* wet',
  glo: '**you\\***.WET',
  etym: () => [_.sho, _.lo],
  see: () => [_.subj],
})

export const shalo = _.word('shalo', {
  def: '**they\\*** wet',
  prefix: 'their* wet',
  suffix: 'their* wet',
  glo: '**they\\***.WET',
  etym: () => [_.sho, _.lo],
  see: () => [_.subj],
})

export const loda = _.word('loda', {
  def: '**submissive person**',
  etym: () => [_.lo, _.da],
  see: () => [_.subj],
})

export const loru = _.word('loru', {
  verb: 'to submit, to become small',
  adj: 'humilité',
  etym: () => [_.lo, _.ru],
})

export const silo = _.word('silo', {
  adj: 'doucement',
  desc: () => `De ${_.si} et ${_.lo} (comme soumis.e).`,
})

// === alt

export const loV = _.alt('lo', {
  glo: '**surrender**',
  alt: () => _.lo,
})
