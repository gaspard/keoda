import * as _ from '..'

export const fruits = _.card('fruits', {
  noun: 'fruits',
  desc: () => `
Existing fruits are:

* ${_.erina} (cherry)
* ${_.pona} (orange)
* ${_.ponalil} (tangerine)
* ${_.palajil} (apricot)
* ${_.putam} (tomato)
* ${_.wiyon} (prune)
* ${_.gola} (squash)
* ${_.guyuina} (apple)
`,
})
