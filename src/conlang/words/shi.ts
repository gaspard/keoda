import * as _ from '.'

export const shi6 = _.word('shi', {
  noun: '6',
  glo: '2PL.PRS',
  see: () => [_.shiP, _.count],
})

export const shiP = _.word('shi', {
  noun: '**you\\***',
  pref: '**your\\***',
  suff: '**your\\***',
  see: () => [_.shi6, _.subj],
})

export const shipa = _.word('shipa', {
  noun: 'believing',
  see: () => [_.ganes, _.shifi, _.negu],
})

export const shifi = _.word('shifi', {
  prop: 'learning',
  see: () => [_.nanes, _.shipa],
})
