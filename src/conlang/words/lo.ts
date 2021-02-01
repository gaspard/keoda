import * as _ from '.'

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
