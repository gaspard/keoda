import * as _ from '.'

export const tame = _.word('tame', {
  def: 'ball',
})
_.see(_.pantame)

// === alt

export const tameh = _.alt('tameh', {
  glo: '**ball**:',
  alt: () => _.tame,
})
