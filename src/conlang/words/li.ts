import * as _ from '.'

export const li = _.word('li', { noun: 'bouche', verb: 'sucer' })
_.see(_.liu)

export const lihafma = _.example([_.li, _.hama], `Suce mon doigt.`)
_.see(_.lirlipa)

export const lipa = _.word('lipa', {
  noun: 'chanter',
  etym: () => [_.li, _.pa],
})

export const lipawi = _.word('lipawi', {
  noun: 'loup (qui chante la lune)',
  etym: () => [_.lipa, _.munawi],
})

export const keli = _.word('keli', {
  noun: 'langue',
  verb: 'lécher',
  desc: () => `De ${_.ke} (caché) et ${_.li} (bouche): caché dans la bouche.`,
})

export const kelikeyon = _.example([_.keli, _.keyon], `Lèche moi la vulve.`)

export const ligau = _.word('ligau', {
  noun: 'goûter (attention dans la bouche)',
  etym: () => [_.li, _.gau],
})
_.see(_.karu)
