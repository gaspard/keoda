import * as _ from '.'

export const shi6 = _.word('shi', {
  noun: '6',
  glo: '2PL.PRS',
  see: () => [_.shi, _.count],
})

export const shipa = _.word('shipa', {
  noun: 'believing',
  see: () => [_.ganes, _.shifi, _.negu],
})

export const shifi = _.word('shifi', {
  mod: 'learning',
  see: () => [_.nanes, _.shipa],
})
