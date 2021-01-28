import * as _ from '.'

export const noa = _.word('noa', {
  noun: 'skin',
  action: 'to touch',
})

export const noatim = _.alt('noatim', {
  glo: '**skin**.you1+',
  alt: () => _.noa,
})

export const fenoati = _.alt('fenoati', {
  glo: 'SUPESS.**skin**.you1',
  alt: () => _.noa,
})
