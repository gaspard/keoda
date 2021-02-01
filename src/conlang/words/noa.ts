import * as _ from '.'

export const noa = _.word('noa', {
  noun: 'skin',
  verb: 'to touch',
})

// === alt

export const fenoati = _.alt('fenoati', {
  glo: 'SUPESS.**skin**.you1',
  alt: () => _.noa,
})
