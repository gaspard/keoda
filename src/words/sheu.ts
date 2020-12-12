import * as _ from '.'

export const sheu = _.word('sheu', {
  noun: 'nez',
  verb: 'respirer',
  derived: () => [_.she, _.u],
  desc: () => `De ${_.she} et ${_.u}`,
})
_.see(_.shei)

export const sheulama = _.word('sheulama', {
  verb: 'plongée sous marine',
  derived: () => [_.sheu, _.lama],
})

export const shegul = _.word('shegul', {
  noun: 'cochon',
  derived: () => [_.sheu, _.gol],
})
