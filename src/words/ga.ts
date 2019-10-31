import * as _ from '.'

export const ga = _.word('ga', {
  noun: 'esprit',
})

export const gai = _.word('gai', {
  noun: 'conscience',
  desc: () => `esprit caressé`,
})

export const gaima = _.example(
  [_.gai, _.ma],
  `Mets ta conscience dans ma main (laisse ton esprit être caressé par ma main).`
)

export const gauma = _.example(
  [_.gau, _.ma],
  `Mets ton attention dans ma main (tire ton esprit vers ma main).`
)

export const kegai = _.word('kegai', {
  noun: 'dieu',
  desc: () => `caché dans l'esprit caressé`,
})
_.see(_.ounurelilajkegai)

export const gau = _.word('gai', {
  noun: 'attention',
  desc: () => `esprit tiré`,
})
