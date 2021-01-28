import * as _ from '.'
import { phon } from '../writing'

export const uba = _.word('uba', {
  action: 'run down',
  exam: () => [
    _.phrase(
      'Tears are running down your face.',
      _.falame,
      _.ahuba,
      _.feduhati
    ),
  ],
})

// ===== alt
export const ahuba = _.alt('ahuba', {
  glo: 'they1.**run down**',
  alt: () => _.uba,
})
