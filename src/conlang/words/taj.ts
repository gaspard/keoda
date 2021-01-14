import * as _ from '.'

export const taj = _.word('taj', {
  noun: 'penis',
  verb: 'penis action',
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
  verb: 'to hit with a penis',
  etym: () => [_.taj, _.o],
})

export const hataj = _.word('hataj', {
  noun: 'glans',
  etym: () => [_.ha, _.taj],
  exam: () => [_.phraseX('Suck (my) glans.', _.li, _.hatajam)],
})

// === alt

export const tajam = _.alt('tajam', {
  glo: '**penis**.ACC',
  alt: () => _.taj,
})

export const hatajam = _.alt('hatajam', {
  glo: '**glans**.ACC',
  alt: () => _.hataj,
})
