import * as _ from '.'

export const fodi = _.word('fodi', {
  noun: 'sleep',
  verb: 'to sleep',
})

// === alt

export const piyifodi = _.alt('piyifodi', {
  glo: '1SG.DIM.**sleep**',
  alt: () => _.fodi,
})
