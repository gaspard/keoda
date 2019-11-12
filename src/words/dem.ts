import * as _ from '.'

export const dem = _.word('dem', {
  preposition: 'quand',
  desc: () => `Le lieu ${_.da} vécu ${_.em}`,
})
_.see(_.preposition)
