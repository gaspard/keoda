import * as _ from '../words'

export const fruits = _.card('fruits', {
  writ: 'fruits',
  desc: () => `
Existing fruits are:

* ${_.eri} (cherry)
* ${_.pona} (orange)
* ${_.ponale} (tangerine)
* ${_.palajil} (apricot)
* ${_.pantame} (tomato)
* ${_.wiyon} (prune)
* ${_.gopona} (squash)
* ${_.guyuina} (apple)
`,
})
