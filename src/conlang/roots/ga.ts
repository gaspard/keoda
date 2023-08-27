import * as _ from '../lang'

export const ga = _.word('ga', {
  noun: 'spirit', // soul
  see: () => [_.gu],
  etym: () => [_.gu, _.a$],
  desc: () => `
Spirit litteraly means "loved life".
`,
})

export const gal = _.word('gal', {
  noun: 'soul',
  desc: () => 'Evolved from *galom* to *gal*.',
  etym: () => [_.ga, _.om],
})

export const gana = _.word('gana', {
  noun: 'earth (Anugraha)',
  etym: () => [_.ga, _.na],
  see: () => [_.nugu],
})

export const gai = _.word('gai', {
  noun: 'consciousness, rain',
  verb: 'to rain',
  adj: 'gentle',
  adv: 'carefully',
  img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/01/Falling_rain_in_mexico.jpg/330px-Falling_rain_in_mexico.jpg',
  etym: () => [_.ga, _.i$],
  desc: () => `
Caressed spirit / caressing spirit (rain on earth)
`,
})

export const kegai = _.word('kegai', {
  noun: 'god',
  etym: () => [_.ke, _.gai],
  see: () => [_.gau],
})

export const gau = _.word('gau', {
  noun: 'attention',
  etym: () => [_.gau, _.u$],
  see: () => [_.gai],
  exam: () => [
    _.phrase('Put your attention on my hand.', _.gau.imp, _.ma.to.m),
    _.phrase('Put your consciousness in your hand.', _.gai.imp, _.ma.ti.m),
  ],
})

export const kuga = _.word('kuga', {
  noun: 'causal thinking, victimhood',
  etym: () => [_.ku, _.ga],
})

export const nega = _.word('nega', {
  noun: 'insanity',
  adj: 'crazy',
  adv: 'crazily',
  etym: () => [_.ne, _.ga],
})

export const ganem = _.word('ganem', {
  noun: 'goat',
  adj: 'illumination',
  etym: () => [_.ga, _.nem],
})
