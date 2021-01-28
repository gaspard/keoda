import * as _ from '.'

export const dadi = _.word('dadi', {
  def: '**saliva**',
  verb: 'to salivate',
})

export const onadi = _.word('onsho', {
  def: 'sugar',
  etym: () => [_.on, _.dadi],
})
