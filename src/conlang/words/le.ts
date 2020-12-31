import * as _ from '.'

export const le = _.word('le', {
  suffix: "annonce d' un nom",
  desc: () => `L'enchassée avec le nom se termine par ${_.oda}.`,
})

export const ile = _.word('ile', {
  prep: 'toi qui te nomme',
})
