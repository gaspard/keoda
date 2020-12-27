import * as _ from '..'

export const colors = _.card('colors', {
  adj: 'colors',
  desc: () => `
Current colors:

* ${_.pan} (red)
* ${_.eri} (cherry)
* ${_.pon} (orange)
* ${_.piu} (green)
* ${_.fio} (eggplant)
* ${_.wi} (prune)
`,
})
