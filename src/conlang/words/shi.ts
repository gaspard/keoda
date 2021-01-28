import * as _ from '.'

export const shi6 = _.word('shi', {
  def: '6',
  glo: '2PL.PRS',
  see: () => [_.shiP, _.count],
})

export const shiP = _.word('shi', {
  def: '**you\\***',
  prefix: '**your\\***',
  suffix: '**your\\***',
  see: () => [_.shi6, _.subj],
})

export const shipa = _.word('shipa', {
  def: 'believing',
  see: () => [_.ganes, _.shifi, _.negu],
})

export const shifi = _.word('shifi', {
  adj: 'learning',
  see: () => [_.nanes, _.shipa],
})
