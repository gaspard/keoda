import * as _ from '.'

export const di = _.word('di', {
  pron: 'whom',
})
_.see(_.prep)
_.see(_.diwu)

export const diguwu = _.word('diguwu', {
  noun: 'généreu.se.x',
  etym: () => [_.di, _.guwu],
})
