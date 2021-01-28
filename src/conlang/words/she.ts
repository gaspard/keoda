import * as _ from '.'

export const she = _.word('she', {
  def: 'air',
  see: () => [_.oto],
})

// === alt

export const shehegim = _.alt('shehegam', {
  glo: '**air**.*fresh*+',
  alt: () => _.she,
  see: () => [_.egi],
})
