import * as _ from '.'

// lapa sun
export const pasu = _.word('pasu', {
  verb: 'to teach',
  etym: () => [_.lapa, _.sun],
})

export const pasuna = _.word('pasuna', {
  def: 'teaching',
  glo: '**teach**.THING',
  etym: () => [_.pasu, _.na],
})
