import * as _ from '.'

export const ta = _.word('ta', {
  det: 'their (3SG)',
  see: () => [_.to, _.ti, _.wu],
})
_.see(_.pronouns)
