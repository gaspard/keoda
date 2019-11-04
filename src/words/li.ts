import * as _ from '.'

export const li = _.word('li', { noun: 'bouche', verb: 'sucer' })
_.see(_.liu)

export const lihafma = _.example([_.li, _.hama], `Suce mon doigt.`)
_.see(_.lirlipa)

export const keli = _.word('keli', {
  noun: 'langue',
  verb: 'lécher',
  desc: () => `De ${_.ke} (caché) et ${_.li} (bouche): caché dans la bouche.`,
})

export const kelikeyon = _.example([_.keli, _.keyon], `Lèche moi la vulve.`)
