import * as _ from '.'

export const dim = _.word('dim', {
  prep: 'whom',
  see: () => [_.di, _.prep],
})
