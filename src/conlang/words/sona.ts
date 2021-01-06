import * as _ from '.'

export const sona = _.word('sona', {
  noun: 'mother earth',
  img:
    'https://upload.wikimedia.org/wikipedia/commons/thumb/f/f0/Mother_Goddess%2C_Madhya_Pradesh_or_Rajasthan%2C_India%2C_6th_-_7th_cents.%2C_National_Museum_of_Korea%2C_Seoul_%2840236606165%29.jpg/330px-Mother_Goddess%2C_Madhya_Pradesh_or_Rajasthan%2C_India%2C_6th_-_7th_cents.%2C_National_Museum_of_Korea%2C_Seoul_%2840236606165%29.jpg',
  desc: () => `
[Mother goddess](https://en.wikipedia.org/wiki/Mother_goddess)
  `,
  see: () => [_.gods],
})

export const gusona = _.word('gusona', {
  noun: 'impermanence',
  img:
    'https://upload.wikimedia.org/wikipedia/commons/thumb/8/89/Kali_by_Raja_Ravi_Varma.jpg/330px-Kali_by_Raja_Ravi_Varma.jpg',
  desc: () => `
${_.gusona} allows the unfolding of space through time, of life through
death, of knowledge through experience. She is the mother goddess of ${_.gu}.

Her other name is **Kālī (काली)**, the Hindu goddess of Time, Creation,
Destruction and Power.

Kali is the chief of the
[Mahavidyas](https://en.wikipedia.org/wiki/Mahavidya), a group of ten Tantric
goddesses who each form a different aspect of the mother goddess ${_.sona}.
  `,
  etym: () => [_.gu, _.sona],
  see: () => [_.gods],
})

// === alt

export const kali = _.alt('kali', {
  glo: '**impermanence**',
  alt: () => _.gusona,
})
