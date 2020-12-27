import * as _ from '.'

export const enu = _.word('enu', {
  verb: 'to embroider',
})

export const sienu = _.word('sienu', {
  adj: 'delicately',
  etym: () => [_.si, _.enu],
})
