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
* ${_.phrase('24', _.dehipi, _.ka4)}
* ${_.phrase('359', _.pehipa, _.lehipi, _.da9)}
* ${_.phrase('2019', _.dehipu, _.i10, _.da9)}
* ${_.phrase("105'000", _.ipa, _.le5, _.ipu)}

## Big numbers !

* ${_.phrase('million (1000^2)', _.ipudeuki)}
* ${_.phrase('billion (1000^3)', _.ipupeuki)}
* ${_.phrase('trillion (1000^4)', _.ipukauki)}
* ${_.phrase(
    "999'999'999",
    _.dahipa,
    _.dahipi,
    _.da9,
    _.ipudeuki,
    _.dahipa,
    _.dahipi,
    _.da9,
    _.ipu,
    _.dahipa,
    _.dahipi,
    _.da9
  )}

We can also express powers of ten ${_.phrase('10^4', _.ipikauki)}.

## Small numbers

* ${_.phrase('tenth (10^-1)', _.ipiki)}
* ${_.phrase('hundredth (10^-2)', _.ipideiki)}
* ${_.phrase('thouandth (10^-3)', _.ipipeiki)}

See ${_.ganes}
`,
})
