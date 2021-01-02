import * as _ from '.'
import { phon } from '../writing'

export const uba = _.word('uba', {
  verb: 'run down',
  desc: () => `
${_.phrase('Tears are running down your face.', _.falam, _.ahuba, _.feduhati)}`,
})

// ===== alt
export const ahuba = _.alt('ahuba', {
  glo: '3SG.run down',
  alt: () => _.uba,
})
