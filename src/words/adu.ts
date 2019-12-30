import * as _ from '.'

export const adu = _.word('adu', {
  noun: 'proche, ami',
})

export const duda = _.word('duda', {
  noun: 'chien',
  derived: [_.adu, _.oda],
})
