import * as _ from '.'

export const dim = _.word('dim', {
  def: 'whom',
  see: () => [_.di, _.prep],
})
