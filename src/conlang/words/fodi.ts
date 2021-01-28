import * as _ from '.'

export const fodi = _.word('fodi', {
  noun: 'sleep',
  action: 'to sleep',
})

export const fodiru = _.word('fodiru', {
  action: 'to fall asleep',
  etym: () => [_.fodi, _.ru],
})

// === alt

export const piyifodi = _.alt('piyifodi', {
  glo: '1SG.DIM.**sleep**',
  alt: () => _.fodi,
})

export const afodirulem = _.alt('afodirulem', {
  glo: 'they1.**sleep**.become.PST',
  alt: () => _.fodi,
})
