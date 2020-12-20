import * as _ from '.'

export const mi = _.word('mi', {
  verb: 'to caress',
  glo: 'hand.VERB.CARE',
  etym: () => [_.ma, _.i],
  see: () => [_.mo, _.mu],
})

export const miau = _.example(
  [_.mi, _.au],
  'Fais-moi un câlin (caresse-moi le coeur).'
)

export const mioda = _.example([_.mi, _.oda], 'Masse-moi le corps, partout.')
export const mifa = _.example([_.mi, _.fa], 'Caresse mes yeux.')

_.see(_.omilirpal)
_.see(_.imimoon)
