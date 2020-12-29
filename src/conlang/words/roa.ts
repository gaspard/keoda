import * as _ from '.'

export const roa = _.word('roa', {
  prep: 'in',
  suffix: 'in (inessive case)',
  glo: 'INE',
})

export const toroa = _.word('toroa', {
  prep: 'in my/our',
  etym: () => [_.to, _.roa],
})

export const tiroa = _.word('tiroa', {
  prep: 'in your',
  etym: () => [_.ti, _.roa],
})

export const taroa = _.word('taroa', {
  prep: 'in their',
  etym: () => [_.ta, _.roa],
})

_.see(_.ro)
_.see(_.ria)
