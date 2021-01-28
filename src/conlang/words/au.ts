import * as _ from '.'

export const au = _.word('au', {
  def: 'heart',
  verb: 'to love/to receive',
  see: () => [_.zu],
})

export const ohau = _.alt('ohau', {
  glo: 'wex.**heart**',
  alt: () => _.au,
})

export const auhu = _.word('auhu', {
  def: 'to fall in love, pull of the heart',
  etym: () => [_.au, _.u],
})

export const aupa = _.word('aupa', {
  def: 'gratitude (love all)',
  etym: () => [_.au, _.pa],
})
_.see(_.pahau)
_.see(_.kupa)

export const auau = _.word('auau', {
  verb: 'to make love',
  see: () => [_.zuzu, _.kude],
})

export const ausifalamau = _.example(
  [_.au, _.si, _.falame, _.au],
  `Fais-moi l'amour comme si tu te lavais d'une grande tristesse.`
)

// =========== ALT
export const azulire = _.alt('azulire', {
  glo: 'they1.**heart**.FUT.EVNT',
  alt: () => _.zu,
})

// same as autinam
export const autim = _.alt('autim', {
  glo: '**heart**.you1+',
  alt: () => _.au,
})

export const auto = _.alt('auto', {
  glo: '**heart**.wex',
  alt: () => _.au,
})

export const esohau = _.alt('esohau', {
  glo: 'PASS.wex.**heart**',
  alt: () => _.au,
})

export const aun = _.alt('aun', {
  glo: '**heart**+',
  alt: () => _.au,
})
