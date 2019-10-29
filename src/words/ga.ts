import * as _ from '.'

export const ga = _.word('ga', {
  noun: 'esprit',
})

export const gai = _.word('gai', {
  noun: 'conscience',
  desc: () => `esprit caressé`,
})

export const kegai = _.word('kegai', {
  noun: 'dieu',
  desc: () => `caché dans l'esprit caressé`,
})
_.see(_.oonurelilajkegai)

export const gau = _.word('gai', {
  noun: 'attention',
  desc: () => `esprit tiré`,
})
