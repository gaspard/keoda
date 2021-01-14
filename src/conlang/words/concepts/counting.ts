import * as _ from '..'

export const count = _.card('count', {
  writ: 'count',
  phon: '/caut/',
  desc: () => `
# Numbers and counting

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

* ${_.phrase('14', _.i10, _.ka4)}
* ${_.phrase('24', _.de2, _.i10, _.ka4)}
* ${_.phrase('359', _.pe3, _.ipa, _.le5, _.i10, _.da9)}
* ${_.phrase('2019', _.de2, _.ipu, _.i10, _.da9)}
* ${_.phrase("105'000", _.ipa, _.le5, _.ipu)}

## Big numbers !

* ${_.phrase('million (1000^2)', _.ipu, _.de2, _.uki)}
* ${_.phrase('billion (1000^3)', _.ipu, _.pe3, _.uki)}
* ${_.phrase('trillion (1000^4)', _.ipu, _.ka4, _.uki)}

We can also express powers of ten ${_.phrase('10^4', _.ipa, _.ka, _.uki)}.

## Small numbers

* ${_.phrase('tenth (10^-1)', _.i10, _.iki)}
* ${_.phrase('hundredth (10^-2)', _.i10, _.de, _.iki)}
* ${_.phrase('thouandth (10^-3)', _.i10, _.pe, _.iki)}

See ${_.ganes}
`,
})
