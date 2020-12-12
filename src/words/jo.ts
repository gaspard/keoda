import * as _ from '.'

export const jo = _.word('jo', {
  noun: 'éponge',
})

export const joyon = _.word('joyon', {
  noun: 'corps spongieux du clitoris',
  derived: () => [_.jo, _.yon],
})

export const jotaj = _.word('jotaj', {
  noun: 'corps spongieux du pénis',
})
_.see(_.genitals)
