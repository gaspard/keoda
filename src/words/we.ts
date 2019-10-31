import * as _ from '.'

export const we = _.word('we', {
  adj: 'droite',
  desc: () => 'Inspiré de ouest (on regarde le sud).',
})
_.see(_.hawe)

// devant
_.see(_.du)
// droite
_.see(_.we)
// gauche
_.see(_.se)
// derrière
_.see(_.no)
