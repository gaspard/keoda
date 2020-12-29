import * as _ from '.'

export const lo = _.word('lo', {
  adj: 'wet, who receives',
})

export const loda = _.word('loda', {
  noun: 'submissive',
  etym: () => [_.lo, _.oda],
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
