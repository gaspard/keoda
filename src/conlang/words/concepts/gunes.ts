import * as _ from '..'

export const gunes = _.card('gunes', {
  noun: 'scale of gu',
  lang: 'states of consciousness',
  see: () => [_.nunes, _.nepa, _.counting],
  desc: () => `
# The scale of ${_.gu}

These states correspond to increasing intensity of ${_.gu} and if they are not balanced by increasing practicality and material humility ${_.nunes}, they are just another names for hubris or psychosis.

## The euphoric states

* 10 ${_.djipa} (remembering)
* 9 ${_.dapa} (joy)
* 8 ${_.jepa} (belonging)
* 7 ${_.fepa} (pride)
* 6 ${_.shipa} (belief)

## From here, the states are more difficult

* 5 ${_.nelil} (confusion)
* 4 ${_.neka} (shame)
* 3 ${_.nepe} (limbo)
* 2 ${_.nede} (anguish)

## And this is hell

* 1 ${_.nepi} (division)
`,
})
