import * as _ from '.'

export const ti = _.word('ti', {
  det: 'your (2SG)',
  see: () => [_.to, _.ta, _.wu],
})
_.see(_.pronouns)
