import * as _ from '.'

export const mo = _.word('mo', {
  verb: 'to slap',
  glo: 'hand.VERB.HIT',
  etym: () => [_.ma, _.o],
  see: () => [_.mi, _.mu],
})

export const omopal = _.example([_.o, _.mo, _.pal], 'Je te donne la fessée.')
