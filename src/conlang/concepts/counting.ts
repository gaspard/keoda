import * as _ from '../lang'

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
* ${_.lil} (5 / ౫)
* ${_.ka} (4 / ౪)
* ${_.pe} (3 / ౩)
* ${_.de} (2 / ౨)
* ${_.pi} (1 / ౧)

The powers of ten:

* ${_.ipu} (1000)
* ${_.ipa} (100)
* ${_.ipi1} (10)

## Some examples:

* ${_.phrase('14', _.ipi1, _.ka1)}
* ${_.phrase('24', _.de1.ipi1, _.ka1)}
* ${_.phrase('359', _.pe1.ipa1, _.lil1.ipi1, _.da1)}
* ${_.phrase('2019', _.de1.ipu1, _.ipi1, _.da1)}
* ${_.phrase("105'000", _.ipa1, _.lil1, _.ipu1)}

## Big numbers !

* ${_.phrase('million (1000^2)', _.ipu1.de1.uki)}
* ${_.phrase('billion (1000^3)', _.ipu1.pe1.uki)}
* ${_.phrase('trillion (1000^4)', _.ipu1.ka.uki)}
* ${_.phrase(
    "999'999'999",
    _.da1.ipa1,
    _.da1.ipi1,
    _.da1,
    _.ipu1.de1.uki,
    _.da1.ipa1,
    _.da1.ipi1,
    _.da1,
    _.ipu1,
    _.da1.ipa1,
    _.da1.ipi1,
    _.da1
  )}

We can also express powers of ten ${_.phrase('10^4', _.ipi1.ka.uki)}.

## Small numbers

* ${_.phrase('tenth (10^-1)', _.ipi1.iki)}
* ${_.phrase('hundredth (10^-2)', _.ipi1.de1.iki)}
* ${_.phrase('thouandth (10^-3)', _.ipi1.pe1.iki)}

See ${_.ganes}
`,
})
