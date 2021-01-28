import * as _ from '.'

export const me = _.word('me', {
  action: 'to move',
  pref: 'to move into',
})

export const meshe = _.word('meshe', {
  action: 'to fly',
  etym: () => [_.me, _.she],
})

export const melam = _.word('melam', {
  action: 'to swim',
  etym: () => [_.me, _.lame],
})

// === alt

export const piyimeshe = _.alt('piyimeshe', {
  glo: '1SG.DIM.**fly**',
  alt: () => _.meshe,
})
