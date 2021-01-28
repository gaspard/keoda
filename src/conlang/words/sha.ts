import * as _ from '.'

export const shaH = _.word('sha', {
  id: 'shaD',
  def: '**hip**',
  see: () => [_.shaP],
})

export const shaP = _.word('sha', {
  id: 'shaP',
  def: '**they\\***',
  prefix: '**their\\***',
  suffix: '**their\\***',
  see: () => [_.shaH, _.subj],
})

export const shasha = _.word('shasha', {
  def: '**dance**',
  verb: 'to dance',
  etym: () => [_.shaH, _.shaH],
})

// === alt
