import * as _ from '.'

export const we = _.word('we', {
  adj: 'droite',
  desc: () => 'Inspiré de ouest (on regarde le sud).',
})

_.see(_.no)
_.see(_.se)
_.see(_.du)
