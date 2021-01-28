import * as _ from '.'

export const al = _.word('al', {
  def: '**sky**',
  prefix: 'up',
  see: () => [_.so],
})

export const alayin = _.word('alayin', {
  def: '**top of vagina**',
  adj: 'happy',
  etym: () => [_.al, _.yin],
  desc: () => `This should definitely have a name in english...`,
})

// === alt
