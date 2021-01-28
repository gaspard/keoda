import * as _ from '.'

export const ago = _.word('ago', {
  def: '**rythme**',
  etym: () => [_.aga, _.oC],
  desc: () => `Music or narration made by hitting.`,
})
