import * as _ from '.'

export const le = _.word('le', {
  suffix: "annonce d' un nom",
  desc: () => `L'enchassée avec le nom se termine par ${_.oda}.`,
})

export const ile = _.word('ile', {
  preposition: 'toi qui te nomme',
})

// Ohora eku
export const ohoraekuIrisshuoauileGopioda = _.example(
  [_.o, _.ora, _.eku, _.Iris, _.shu, _.o, _.au, _.i, _.le, _.Gopi, _.oda],
  `J'ai envie qu'Iris et moi te faisions l'amour, à toi Gopi.`
)

_.see(_.ayonleAnaisodaoramimun)
_.see(_.si)
