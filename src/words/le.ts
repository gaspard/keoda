import * as _ from '.'

export const le = _.word('le', {
  suffix: "annonce d' un nom",
  desc: () => `L'enchassée avec le nom se termine par ${_.oda}.`,
})

export const ile = _.word('ile', {
  pronoun: 'annonce de ton nom',
  desc: () => `L'enchassée avec le nom se termine par ${_.oda}.`,
})

export const ouoraileGopiodaokoIrisauau = _.example(
  [_.ou, _.ora, _.ile, _.Gopi, _.oda, _.o, _.ko, _.Iris, _.au, _.au],
  `J'ai envie qu'Iris et moi te faisions l'amour, à toi Gopi.`
)

_.see(_.ayonleAnaisodaoramimun)
_.see(_.si)
