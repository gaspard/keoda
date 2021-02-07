import * as _ from '../lang'

export const dim = _.word('dim', {
  def: 'whom',
  see: () => [_.di, _.prep],
})
