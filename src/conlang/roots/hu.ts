import * as _ from '../lang'

export const sauhu = _.word('sauhu', {
  noun: 'infinite',
  img: 'ligabue.jpeg',
  img_opa: '0.6',
  etym: () => [_.sau, _.huN],
  desc: () => `This word is an homage to the profound work of Antonio Ligabue.`,
  see: () => [_.husona],
})
