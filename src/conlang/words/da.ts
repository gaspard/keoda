import * as _ from '.'

export const da = _.word('da', {
  noun: 'place, 9',
  suffix: 'place',
  see: () => [_.kdana, _.counting, _.sen],
})

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

export const dana = _.word('dana', {
  noun: 'geography',
  etym: () => [_.da, _.na],
})

export const da9 = _.alt('da', {
  glo: '9',
  alt: () => _.da,
})
