import * as _ from '.'

export const au = _.word('au', {
  noun: 'heart',
  verb: 'to love/to receive',
  see: () => [_.zu],
})

export const ohau = _.alt('ohau', {
  glo: '1SG.INDF.**love**',
  alt: () => _.au,
})

export const auhu = _.word('auhu', {
  noun: 'to fall in love, pull of the heart',
  etym: () => [_.au, _.u],
})

export const aupa = _.word('aupa', {
  noun: 'gratitude (love all)',
  etym: () => [_.au, _.pa],
})
_.see(_.pahau)
_.see(_.kupa)

export const auau = _.word('auau', {
  verb: 'to make love',
  see: () => [_.zuzu],
})

export const ausifalamau = _.example(
  [_.au, _.si, _.falame, _.au],
  `Fais-moi l'amour comme si tu te lavais d'une grande tristesse.`
)

// =========== ALT
export const azulire = _.alt('azulire', {
  glo: '3SG.**love**.FUT.EVNT',
  alt: () => _.zu,
})

export const autim = _.alt('autim', {
  glo: '**heart**.POSS.2SG.ACC',
  alt: () => _.au,
})
