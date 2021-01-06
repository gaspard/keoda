import * as _ from '.'

export const she = _.word('she', {
  noun: 'air',
  see: () => [_.oto],
})

// === alt

export const shehegiam = _.alt('shehegiam', {
  glo: '**air**.*fresh*.ACC',
  alt: () => _.she,
})
