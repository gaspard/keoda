import * as _ from '.'

export const se = _.word('se', {
  suffix: 'gauche',
  desc: () => 'Inspiré de est (on regarde le sud).',
})
_.see(_.hase)

// devant
_.see(_.du)
// droite
_.see(_.we)
// gauche
_.see(_.se)
// derrière
_.see(_.no)
