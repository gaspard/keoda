import { verb } from '../../mprefix'
import { phrase } from '../../words'
import { es } from './es'
import { o } from './o'

export const lu = verb('lu', {
  def: 'while',
  glo: 'CONT',
  desc: () => `
This prefix comes after accord to the subject (unlike ${es}):

* ${phrase('I am dreaming.', o.lu.yafa)}
`,
})
