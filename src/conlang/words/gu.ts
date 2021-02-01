import * as _ from '.'

export const gu = _.word('gu', {
  noun: 'darkness',
  mod: 'darkness, gestation, deep',
  etym: () => [_.ga, _.u],
  see: () => [_.nu, _.ganes, _.gufi],
  desc: () => `
${_.gu} is the unrealized ${_.ga}.

Unconscious --> Conscious

But ${_.gu} is not just the "unconscious", it also means "experience" or
"transformation" or even "life".

In some way, it is the desire for experience, the quest for knowledge more than a
state of "not knowing".

And to complicate things further, the bigger ${_.ga} becomes, the bigger
${_.gu} becomes because they are the same and not the same thing.

We could also that ${_.gu} is "the possibility of karma" and ${_.ga} is made
of "karma".

So why does ${_.nugu} mean "terror" ? Because there is a huge potential for
chaos and instability due to the unrooted nature of ${_.nu} and the power of
${_.gu}
`,
})

export const nugu = _.word('nugu', {
  noun: 'tremendum, illusion\n(Thirodana)',
  see: () => [_.gana],
  etym: () => [_.nu, _.gu],
  desc: () => `
Litteraly, the "immaterial unconscious"`,
})

export const gulir = _.word('gulir', {
  verb: 'to wish',
  etym: () => [_.gu, _.lir],
})

export const lemegu = _.word('lemegu', {
  verb: 'to remember',
  etym: () => [_.leme, _.gu],
  see: () => [_.dafodil],
})

export const guna = _.word('guna', {
  noun: 'dissociation, robot',
  etym: () => [_.gu, _.na],
  see: () => [_.nuga],
})

export const gui = _.word('gui', {
  verb: 'to be born',
  see: () => [_.yuhim, _.nem],
  etym: () => [_.gu, _.iC],
})

export const rugui = _.word('rugui', {
  verb: 'to bustle about',
  etym: () => [_.ru, _.gui],
})

export const guwu = _.word('guwu', {
  verb: 'to give',
  etym: () => [_.gu, _.wu],
})

export const guwuna = _.word('guwuna', {
  noun: 'gift',
  etym: () => [_.guwu, _.na],
})

export const guru = _.word('guru', {
  noun: 'trema (stage fright)',
  etym: () => [_.gu, _.ru],
  see: () => [_.conrad, _.nuru],
  desc: () => `
Trema is the feeling of something bad coming, the feeling of the world
conspiring against oneself (concept from psychologist Klaus Conrad).

In keoda, this litteraly means "the emergence of the darkness".
`,
})

export const gugai = _.word('gugai', {
  noun: 'fertility',
  mod: 'fertile',
  etym: () => [_.gu, _.gai],
})

export const augu = _.word('augu', {
  noun: 'trust',
  verb: 'to trust',
  etym: () => [_.au, _.gu],
})

export const negu = _.word('negu', {
  noun: 'agitation/dissociation',
  desc: () => `Searching for perfection to feel less. Opposite of ${_.augu}`,
  see: () => [_.shipa],
})

export const guyuina = _.word('guyuina', {
  noun: 'apple',
  etym: () => [_.gu, _.yuina],
  see: () => [_.fruits],
})

export const gupa = _.word('gupa', {
  noun: 'nature',
  etym: () => [_.gu, _.pa],
})

export const alemegu = _.alt('alemegu', {
  glo: 'they1.**remember**',
  alt: () => _.lemegu,
})

export const guitonam = _.alt('guitonam', {
  glo: '**life**.wex+',
  alt: () => _.gui,
})

export const oguwulem = _.alt('oguwulem', {
  glo: 'wex.**give**.PST',
  alt: () => _.guwu,
})

_.gulei
