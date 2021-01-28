import * as _ from '.'

export const bo = _.word('bo', {
  def: '**belly**',
})

export const robo = _.word('robo', {
  def: '**belly button**',
  etym: () => [_.ro, _.bo],
})
