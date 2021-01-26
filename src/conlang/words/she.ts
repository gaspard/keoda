import * as _ from '.'

export const she = _.word('she', {
  noun: 'air',
  see: () => [_.oto],
})

// === alt

export const shehegim = _.alt('shehegam', {
  glo: '**air**.*fresh*.ACC',
  alt: () => _.she,
  see: () => [_.egi],
})
