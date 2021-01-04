import * as _ from '.'

export const tame = _.word('tame', {
  noun: 'ball',
})
_.see(_.pantame)

// === alt

export const tameham = _.alt('tameham', {
  glo: '**ball**.ACC',
  alt: () => _.tame,
})
