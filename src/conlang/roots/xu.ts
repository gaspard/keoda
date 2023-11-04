import * as _ from '../lang'

export const sauxu = _.word('sauxu', {
  noun: 'infinite',
  verb: 'to blind',
  img: 'ligabue.jpeg',
  img_opa: '0.6',
  etym: () => [_.sau, _.xu.noun],
  desc: () => `This word is an homage to the profound work of Antonio Ligabue.`,
  see: () => [_.xusona],
})
