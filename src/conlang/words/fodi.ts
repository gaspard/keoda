import * as _ from '.'

export const fodi = _.word('fodi', {
  noun: 'sleep',
  verb: 'to sleep',
})

export const fodiru = _.word('fodiru', {
  verb: 'to fall asleep',
  etym: () => [_.fodi, _.ru],
})

// === alt

export const piyifodi = _.alt('piyifodi', {
  glo: '1SG.DIM.**sleep**',
  alt: () => _.fodi,
})

export const afodiru = _.alt('afodiru', {
  glo: '3SG.**sleep**.*become*',
  alt: () => _.fodi,
})
