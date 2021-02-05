import * as _ from '.'

export const me = _.word('me', {
  verb: 'to move',
  pref: 'to move into',
})

export const meshe = _.word('meshe', {
  verb: 'to fly',
  etym: () => [_.me, _.she],
})

export const melam = _.word('melam', {
  verb: 'to swim',
  etym: () => [_.me, _.lame],
})
