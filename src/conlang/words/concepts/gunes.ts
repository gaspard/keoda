import * as _ from '..'

export const gunes = _.card('gunes', {
  noun: 'scale of gu',
  lang: 'states of consciousness',
  see: () => [_.nunes, _.nepa, _.counting],
  desc: () => `
# The scale of ${_.gu}

These states correspond to increasing intensity of ${_.gu} and if they are
not balanced by increasing practicality and material humility ${_.nunes},
they are just other names for hubris or psychosis.

## The euphoric states

These need to be balanced with their equivalent ${_.nunes} states.

* 10 ${_.djipa} (remembering being god.des) <=> ${_.djifi} (humble)
* 9 ${_.dapa} (joy) <=> ${_.dafi} (serving)
* 8 ${_.jepa} (belonging) <=> ${_.jefi} (caring)
* 7 ${_.fepa} (pride) <=> ${_.fefi} (adapting)
* 6 ${_.shipa} (believing) <=> ${_.shifi} (learning)

## The "territorial" states.

From here, the states are more difficult. These states are shared on both
${_.gu} and ${_.nu} scales.

* 5 ${_.nelil} (confusion/insecure)
* 4 ${_.neka} (shame/restless)
* 3 ${_.nepe} (limbo/offensive)
* 2 ${_.nede} (anguish/fighting)

## And this is hell

* 1 ${_.nepi} (division/fragmented)
`,
})
