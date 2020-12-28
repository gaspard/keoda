import * as _ from '.'

export const da = _.word('da', {
  noun: 'lieu, 9',
  suffix: 'lieu',
})
_.see(_.counting)
_.see(_.sen)

_.see(_.lama)
_.see(_.lamagoa)
_.see(_.goa)

export const dapa = _.word('dapa', {
  noun: 'joy',
  see: () => [_.gunes, _.dafi],
})

export const dafi = _.word('dafi', {
  adj: 'serving',
  see: () => [_.nunes, _.dapa],
})

export const guda = _.word('guda', {
  noun: 'the place of the experience',
  see: () => [_.gulei],
})
