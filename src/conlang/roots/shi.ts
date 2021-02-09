import * as _ from '../lang'

export const shipa = _.word('shipa', {
  noun: 'believing',
  see: () => [_.ganes, _.shifi, _.negu],
})

export const shifi = _.word('shifi', {
  adj: 'learning',
  see: () => [_.nanes, _.shipa],
})
