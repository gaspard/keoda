import * as _ from '.'

export const me = _.word('me', {
  verb: 'être en mouvement',
  prefix: 'bouger dans',
})

export const meshe = _.word('meshe', {
  verb: 'voler',
  derived: () => [_.me, _.she],
})

export const melam = _.word('melam', {
  verb: 'nager',
  derived: () => [_.me, _.lam],
})
