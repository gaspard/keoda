import * as _ from '.'

export const mun = _.word('moon', {
  def: '**breast**',
  posit: 'kneeling, breast touching the ground (doggy style)',
  see: () => [_.pe],
})

export const munwe = _.word('munwe', {
  def: 'right breast',
  etym: () => [_.mun, _.we],
})

export const hamun = _.word('hamun', {
  def: 'nipple',
  etym: () => [_.ha, _.mun],
})

export const munawi = _.word('munawi', {
  def: 'moon',
  etym: () => [_.mun, _.awi],
})

export const muna = _.word('muna', {
  def: 'baby bottle',
  etym: () => [_.mun, _.na],
})

// === alt

export const hamunam = _.alt('hamunam', {
  glo: '**nipple**+',
  alt: () => _.hamun,
})

export const hamunah = _.alt('hamunah', {
  glo: '**nipple**:',
  alt: () => _.hamun,
})

export const munatinamHIST = _.alt('munatinam', {
  id: 'munatinamHIST',
  glo: '**breast**.POSS.2SG.ACC',
  alt: () => _.mun,
})

export const munatim = _.alt('munatim', {
  glo: '**breast**.you1+',
  alt: () => _.mun,
})
