import * as _ from '..'

export const counting = _.card('counting', {
  lang: 'les nombres et comment compter',
  see: () => [_.gunes],
  desc: () => `
Voici les nombres de 1 to 10:

* ${_.pi} (1)
* ${_.de} (2)
* ${_.pe} (3)
* ${_.ka} (4)
* ${_.lil} (5)
* ${_.shi} (6)
* ${_.fe} (7)
* ${_.je} (8)
* ${_.da} (9)
* ${_.dji} (10)

Et il y a aussi ${_.ipi} (x10), ${_.ipa} (x100) et ${_.ipu} (x1000).

## Quelques exemples:

* 11 (1 x 10 + 1): ${_.phrase(
    '11',
    _.pi,
    _.ipi,
    _.pi
  )} ou simplement ${_.phrase('11', _.ipi, _.pi)}
* 24 (2 x 10 + 4): ${_.phrase('24', _.de, _.ipi, _.ka)}
* 359 (3 x 100 + 5 x 10 + 9): ${_.phrase(
    '359',
    _.pe,
    _.ipa,
    _.lil,
    _.ipi,
    _.da
  )}
* 2019 (2 x 1000 + 10 + 9): ${_.phrase('2019', _.de, _.ipu, _.dji, _.da)}
* 105'000: ${_.phrase("105'000", _.ipa, _.lil, _.ipu)}

On peut transformer ${_.phrase(
    '14',
    _.pi,
    _.ipi,
    _.ka
  )} dans sa version raccourcie ${_.phrase('14', _.ipi, _.ka)} ou ${_.phrase(
    '14',
    _.dji,
    _.ka
  )}

## Les grands nombres

* *million* (1000^2): ${_.phrase('million', _.ipu, _.de, _.uki)}
* *milliard* (1000^3): ${_.phrase('milliard', _.ipu, _.pe, _.uki)}
* *mille millards* (1000^4): ${_.phrase('mille milliards', _.ipu, _.ka, _.uki)}

On peut aussi dire ${_.phrase('10^4', _.ipa, _.ka, _.uki)} pour 10^4, etc.

## Petits nombres

* *dixième* (10^-1): ${_.phrase('0.1', _.ipi, _.iki)}
* *centième* (10^-2): ${_.phrase('0.01', _.ipi, _.de, _.iki)}
* *millième* (10^-3): ${_.phrase('0.001', _.ipi, _.pe, _.iki)}
`,
})
