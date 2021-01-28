import * as _ from '.'

export const dadi = _.word('dadi', {
  noun: '**saliva**',
  action: 'to salivate',
})

export const onadi = _.word('onsho', {
  noun: 'sugar',
  etym: () => [_.on, _.dadi],
})
