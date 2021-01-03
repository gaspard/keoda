import * as _ from '..'

export const count = _.card('count', {
  lang: 'numbers and counting',
  writ: 'కాుత్‌',
  phon: '/caut/',
  see: () => [_.ganes],
  desc: () => `
Here are the number from 1 to 10:

* ${_.ipi} (10 / ౧౦)
* ${_.da} (9 / ౯)
* ${_.je} (8 / ౮)
* ${_.fe} (7 / ౭)
* ${_.shi} (6 / ౬)
* ${_.le} (5 / ౫)
* ${_.ka} (4 / ౪)
* ${_.pe} (3 / ౩)
* ${_.de} (2 / ౨)
* ${_.pi} (1 / ౧)

The powers of ten:

* ${_.ipi} (10)
* ${_.ipa} (100)
* ${_.ipu} (1000).

## Some examples:

* ${_.phrase('14', _.pi, _.i10, _.ka4)}
* or ${_.phrase('14', _.i10, _.ka4)}
* ${_.phrase('24', _.de2, _.i10, _.ka4)}
* ${_.phrase('359', _.pe3, _.ipa, _.le5, _.i10, _.da9)}
* ${_.phrase('2019', _.de2, _.ipu, _.i10, _.da9)}
* ${_.phrase("105'000", _.ipa, _.le5, _.ipu)}

## Big numbers !

* 1000^2: ${_.phrase('million', _.ipu, _.de2, _.uki)}
* 1000^3: ${_.phrase('billion', _.ipu, _.pe3, _.uki)}
* 1000^4: ${_.phrase('trillion', _.ipu, _.ka4, _.uki)}

We can also express powers of ten ${_.phrase('10^4', _.ipa, _.ka, _.uki)}.

## Small numbers

* 10^-1: ${_.phrase('tenth', _.i10, _.iki)}
* 10^-2: ${_.phrase('hundredth', _.i10, _.de, _.iki)}
* 10^-3: ${_.phrase('thouandth', _.i10, _.pe, _.iki)}
`,
})
