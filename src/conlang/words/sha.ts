import * as _ from '.'

export const shaH = _.word('sha', {
  id: 'shaD',
  noun: '**hip**',
  see: () => [_.shaP],
})

export const shaP = _.word('sha', {
  id: 'shaP',
  noun: '**they\\***',
  pref: '**their\\***',
  suff: '**their\\***',
  see: () => [_.shaH, _.subj],
})

export const shasha = _.word('shasha', {
  noun: '**dance**',
  action: 'to dance',
  etym: () => [_.shaH, _.shaH],
})

// === alt
