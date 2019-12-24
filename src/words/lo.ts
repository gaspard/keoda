import * as _ from '.'

export const lo = _.word('lo', {
  noun: 'soumise',
  adj: 'soumis-e,humide, qui reçoit',
})

export const loru = _.word('loru', {
  noun: 'devenir petit.e (se soumettre)',
  adj: 'humilité',
})

export const silo = _.word('silo', {
  adj: 'doucement',
  desc: () => `De ${_.si} et ${_.lo} (comme soumis.e).`,
})

_.see(_.najlo)
_.see(_.falo)
_.see(_.nelo)
_.see(_.nefalo)
