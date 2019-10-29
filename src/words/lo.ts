import * as _ from '.'

export const lo = _.word('lo', {
  noun: 'soumise',
  adj: 'soumis-e,humide',
})

export const melo = _.word('melo', {
  adj: 'doucement',
  desc: () => `De ${_.me} et ${_.lo} (comme soumis.e).`,
})

_.see(_.najalo)
_.see(_.falo)
_.see(_.nelo)
_.see(_.nefalo)
