import * as _ from '.'

export const li = _.word('li', {
  noun: 'mouth',
  action: 'to suck',
})
_.see(_.liu)

export const lihafma = _.example([_.li, _.hama], `Suce mon doigt.`)

export const lipa = _.word('lipa', {
  action: 'to sing',
  etym: () => [_.li, _.pa],
})

export const lipaya = _.word('lipaya', {
  noun: 'wolf',
  img:
    'https://upload.wikimedia.org/wikipedia/commons/thumb/b/bb/Adara_%28Canis_lupus%29.jpg/300px-Adara_%28Canis_lupus%29.jpg',
  etym: () => [_.lipa, _.ya],
})

export const keli = _.word('keli', {
  noun: 'tongue',
  action: 'to lick',
  etym: () => [_.ke, _.li],
})

export const kelikeyon = _.example([_.keli, _.keyon], `Lèche moi la vulve.`)

export const ligau = _.word('ligau', {
  action: 'to taste',
  etym: () => [_.li, _.gau],
})
_.see(_.karu)

// === alt

export const esakelilir = _.alt('esakelilir', {
  glo: 'PASS.they1.**lick**.FUT',
  alt: () => _.keli,
})

export const esalukelilir = _.alt('esalukelilir', {
  glo: 'PASS.they1.CONT.**lick**.FUT',
  alt: () => _.keli,
})
