import * as _ from '..'

export const counting = _.card('counting', {
  lang: 'numbers and counting',
  see: () => [_.gunes],
  desc: () => `
Here are the number from 1 to 10:

* ${_.dji} (10)
* ${_.da} (9)
* ${_.je} (8)
* ${_.fe} (7)
* ${_.shi} (6)
* ${_.lil} (5)
* ${_.ka} (4)
* ${_.pe} (3)
* ${_.de} (2)
* ${_.pi} (1)

The powers of ten:

* ${_.ipi} (10)
* ${_.ipa} (100)
* ${_.ipu} (1000).

## Some examples:

* ${_.phrase('14', _.pi, _.ipi, _.ka4)}
* or ${_.phrase('14', _.ipi, _.ka4)}
* or ${_.phrase('14', _.dji, _.ka4)}
* ${_.phrase('24', _.de2, _.ipi, _.ka4)}
* ${_.phrase('359', _.pe3, _.ipa, _.lil5, _.ipi, _.da9)}
* ${_.phrase('2019', _.de2, _.ipu, _.dji, _.da9)}
* ${_.phrase("105'000", _.ipa, _.lil5, _.ipu)}

## Big numbers !

* 1000^2: ${_.phrase('million', _.ipu, _.de2, _.uki)}
* 1000^3: ${_.phrase('billion', _.ipu, _.pe3, _.uki)}
* 1000^4: ${_.phrase('trillion', _.ipu, _.ka4, _.uki)}

We can also express powers of ten ${_.phrase('10^4', _.ipa, _.ka, _.uki)}.

## Small numbers

* 10^-1: ${_.phrase('tenth', _.ipi, _.iki)}
* 10^-2: ${_.phrase('hundredth', _.ipi, _.de, _.iki)}
* 10^-3: ${_.phrase('thouandth', _.ipi, _.pe, _.iki)}
`,
})
