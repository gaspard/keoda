import * as _ from '..'

export const nunes = _.card('nunes', {
  noun: 'scale of nu',
  lang: 'states of humility',
  see: () => [_.gunes, _.counting],
  desc: () => `
# The scale of ${_.nu}

These states correspond to increasing levels of humility and practicality
${_.nu}. They are not "feelings" but how the person is perceived by others
(all others, not just close friends).

## The "flowing" states

* 10 ${_.djifi} (humble)
* 9 ${_.dafi} (serving)
* 8 ${_.jefi} (caring)
* 7 ${_.fefi} (adapting)
* 6 ${_.shifi} (learning)

## The "territorial" states

* 5 ${_.filil} (insecure)
* 4 ${_.fika} (restless)
* 3 ${_.fipe} (offensive)
* 2 ${_.fide} (fighting)

## And this is hell

* 1 ${_.fipi} (disembodied, fragmented)
`,
})
