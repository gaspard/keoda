import * as _ from '.'

export const ga = _.word('ga', {
  noun: '**spirit**',
  see: () => [_.gu],
})

export const gana = _.word('gana', {
  noun: '**earth** (Anugraha)',
  etym: () => [_.ga, _.na],
  see: () => [_.nugu],
})

export const ganaro = _.alt('ganaro', {
  glo: '**earth**.INESS',
  alt: () => _.gana,
})

export const gai = _.word('gai', {
  noun: 'consciousness\nrain',
  verb: 'to rain',
  img:
    'https://upload.wikimedia.org/wikipedia/commons/thumb/0/01/Falling_rain_in_mexico.jpg/330px-Falling_rain_in_mexico.jpg',
  imgpos: '50%',
  desc: () => `
Caressed spirit / caressing spirit (rain on earth)
`,
})

// gai ma
export const gaima = _.example(
  [_.gai, _.ma],
  `Mets ta conscience dans ma main (laisse ton esprit être caressé par ma main).`
)

// gau ma
export const gauma = _.example(
  [_.gau, _.ma],
  `Mets ton attention dans ma main (tire ton esprit vers ma main).`
)

export const kegai = _.word('kegai', {
  noun: 'god',
  etym: () => [_.ke, _.gai],
  see: () => [_.gau],
})

export const gau = _.word('gau', {
  noun: 'attention',
  etym: () => [_.gau, _.u],
  see: () => [_.gai],
})

export const kuga = _.word('kuga', {
  noun: 'causal thinking, victimhood',
  etym: () => [_.ku, _.ga],
})

export const nega = _.word('nega', {
  noun: 'crazy',
  glo: 'crazy',
  mod: 'crazily',
  etym: () => [_.neW, _.ga],
})

// === alt

export const negaADV = _.alt('nega', {
  glo: '*crazy*.ADV',
  alt: () => _.nega,
})

export const gogam = _.alt('gogam', {
  glo: '*big*.**spirit**+',
  alt: () => _.ga,
})

export const kegaiam = _.alt('kegaiam', {
  glo: '**god**+',
  alt: () => _.kegai,
})
