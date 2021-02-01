import * as _ from '.'

export const fodi = _.word('fodi', {
  noun: '**sleep**',
  verb: 'to sleep',
})

export const fodiru = _.word('fodiru', {
  noun: '**sleep**.become',
  etym: () => [_.fodi, _.ru],
})

// === alt

export const piyifodi = _.alt('piyifodi', {
  glo: '1SG.DIM.**sleep**',
  alt: () => _.fodi,
})
