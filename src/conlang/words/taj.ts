import * as _ from '.'

export const taj = _.word('taj', {
  noun: 'penis',
  action: 'penis action',
  etym: () => [_.oto, _.aj],
  exam: () => [_.phraseX('Miraculous penis', _.taj, _.mahal)],
})

export const tajin = _.word('tajin', {
  noun: 'erect penis',
  etym: () => [_.taj, _.in],
})

export const tajegi = _.word('tajegi', {
  noun: 'penis at rest',
  etym: () => [_.taj, _.egi],
})

export const tajo = _.word('tajo', {
  action: 'to hit with a penis',
  etym: () => [_.taj, _.oC],
})

export const hataj = _.word('hataj', {
  noun: 'glans',
  etym: () => [_.ha, _.taj],
  exam: () => [_.phraseX('Suck wex glans.', _.li, _.hatajam)],
})

// === alt

export const tajam = _.alt('tajam', {
  glo: '**penis**+',
  alt: () => _.taj,
})

export const hatajam = _.alt('hatajam', {
  glo: '**glans**+',
  alt: () => _.hataj,
})
