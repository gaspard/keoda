import * as _ from '.'

export const uki = _.word('uki', {
  adj: 'long',
  suffix: 'long',
  see: () => [_.iki],
  desc: () => `
* ${_.phrase('Long hair, long legs', _.jihuki, _.bajuki)}`,
})
