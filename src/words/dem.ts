import * as _ from '.'

export const dahem = _.word('dahem', {
  preposition: 'quand (passé)',
  derived: [_.da, _.em],
  desc: () => `Le lieu ${_.da} vécu ${_.em}`,
})
_.see(_.elir)
_.see(_.dahir)
_.see(_.preposition)
