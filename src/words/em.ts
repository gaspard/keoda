import * as _ from '.'

// Quel est le sens réel de ce mot ?
export const em = _.word('em', {
  noun: 'le vécu',
  verb: 'vivre',
})
_.see(_.leirumi)

export const nem = _.word('nem', {
  verb: 'mourir, ne pas vivre',
  derived: [_.ne, _.em],
})
_.see(_.dem)
