import * as _ from '.'

export const eku = _.word('eku', {
  def: 'fact',
  desc: () => `Behaves lik "that" or "because"`,
  see: () => [_.prep],
})
