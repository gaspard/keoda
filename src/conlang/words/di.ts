import * as _ from '.'

export const di = _.word('di', {
  prep: 'who',
  see: () => [_.prep, _.dim, _.diwu],
})

export const diguwu = _.word('diguwu', {
  noun: 'généreu.se.x',
  etym: () => [_.di, _.guwu],
})
