import * as _ from '.'

export const mi = _.word('mi', {
  verb: 'masser',
  desc: () => `De ${_.ma} (main) avec le suffixe ${_.i} (masser).`,
})

export const miau = _.example(
  [_.mi, _.au],
  'Fais-moi un câlin (caresse-moi le coeur).'
)

export const mioda = _.example([_.mi, _.oda], 'Masse-moi le corps, partout.')
export const mifa = _.example([_.mi, _.fa], 'Caresse mes yeux.')

_.see(_.omilirpal)
_.see(_.imimoon)
