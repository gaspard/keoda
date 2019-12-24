import * as _ from '.'

export const sheu = _.word('sheu', {
  noun: 'nez',
  verb: 'respirer',
  derived: [_.she, _.u],
  desc: () => `De ${_.she} et ${_.u}`,
})
_.see(_.sheo)

export const sheulama = _.word('sheulama', {
  verb: 'plongée sous marine',
  derived: [_.sheu, _.lama],
})
