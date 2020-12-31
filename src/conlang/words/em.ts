import * as _ from '.'

export const em = _.word('em', {
  suffix: 'lived',
  verb: 'to live',
})
_.see(_.leirumi)

export const nem = _.word('nem', {
  verb: 'to die',
  etym: () => [_.ne, _.em],
})
_.see(_.dem)
