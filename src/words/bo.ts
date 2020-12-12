import * as _ from '.'

export const bo = _.word('bo', {
  noun: 'ventre',
})
_.see(_.obo)
_.see(_.habo)

export const robo = _.word('robo', {
  noun: 'nombril (centre du ventre)',
  derived: () => [_.ro, _.bo],
})
