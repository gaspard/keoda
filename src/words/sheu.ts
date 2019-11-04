import * as _ from '.'

export const sheu = _.word('sheu', {
  noun: 'nez',
  verb: 'respirer',
  desc: () => `De ${_.she} et ${_.u}`,
})

export const sheulama = _.word('sheulama', {
  verb: 'plongée sous marine',
  derived: [_.sheu, _.lama],
})
