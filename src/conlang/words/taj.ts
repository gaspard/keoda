import * as _ from '.'

export const taj = _.word('taj', {
  noun: 'penis',
  verb: 'penis action',
  exam: () => [_.phraseX('Miraculous penis', _.taj, _.mahal)],
})

export const tajo = _.word('tajo', {
  verb: 'to hit with a penis',
  etym: () => [_.taj, _.oC],
})

export const hataj = _.word('hataj', {
  noun: 'glans',
  etym: () => [_.ha, _.taj],
  exam: () => [_.phraseX('Suck wex glans.', _.li, _.hataj.m)],
})

// === alt

export const tajil = _.alt('tajil', {
  glo: '**penis**.*erect*',
  alt: () => _.taj,
})

export const tajegi = _.alt('tajegi', {
  glo: '**penis**.*cold*',
  alt: () => _.taj,
})
