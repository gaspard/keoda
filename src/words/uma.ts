import * as _ from '.'

export const uma = _.word('uma', { preposition: 'ou' })
_.see(_.preposition)

export const fafaumanefa = _.example(
  [_.fa, _.fa, _.uma, _.nefa],
  `Regarde-moi dans les yeux ou ferme les yeux.`
)
