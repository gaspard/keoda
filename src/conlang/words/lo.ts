import * as _ from '.'

export const lo = _.word('lo', {
  noun: '2SG.WET',
  adj: 'wet, who receives',
  see: () => [_.tolo],
})

export const loda = _.word('loda', {
  noun: 'submissive',
  glo: '2SG.WET',
  etym: () => [_.lo, _.oda],
  see: () => [_.loya, _.pron],
})

export const loya = _.word('loya', {
  noun: 'submissive (poetic)',
  glo: '2SG.WET.POET',
  etym: () => [_.lo, _.yada],
  see: () => [_.loda, _.pron],
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

_.see(_.najlo)
_.see(_.falo)
_.see(_.nelo)
_.see(_.nefalo)
