import * as _ from '.'

export const uma = _.word('uma', {
  def: 'or',
  see: () => [_.prep],
})

export const fafaumanefa = _.example(
  [_.fa, _.fa, _.uma, _.nefa],
  `Regarde-moi dans les yeux ou ferme les yeux.`
)
