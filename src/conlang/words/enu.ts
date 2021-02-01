import * as _ from '.'

export const enu = _.word('enu', {
  noun: '**embroidery**',
  verb: 'to embroider',
})

// === alt

export const sienu = _.alt('sienu', {
  glo: 'like.**embroidery**',
  alt: () => _.enu,
})
