import * as _ from '../../lang'

export const lu = _.prefix('lu', {
  def: 'while',
  glo: 'CONT',
  scla: 'verb',
  desc: () => `
This prefix comes after accord to the subject (unlike ${_.es}):

* ${_.phrase('I am dreaming.', _.o.lu.yafa)}
`,
  cla: 'verb',
})
