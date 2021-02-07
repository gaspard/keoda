import * as _ from '../lang'

export const gu = _.word('gu', {
  noun: 'darkness',
  verb: 'to live',
  adj: 'darkness',
  adv: 'lively',
  etym: () => [_.ga, _.u$],
  see: () => [_.em$, _.nu, _.ganes, _.gufi],
  desc: () => `
This might be the most complicated concept of the whole language... Confusion in
understanding this is good. The greater the confusion, the greater the question
and the closer we are to a "feeling" of ${_.gu}.

${_.gu} can be seen as is the unrealized ${_.ga}. Understanding ${_.gu} would mean
something like being dead, all questions answered and it would be very sad.

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
  etym: () => [_.gu, _.irP],
})

export const lemegu = _.word('lemegu', {
  verb: 'to remember',
  etym: () => [_.eme, _.gu],
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
  etym: () => [_.gu, _.i$],
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
  see: () => [_.pola],
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
  adj: 'fertile',
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

export const kegu = _.word('kegu', {
  noun: 'wound/healing',
  etym: () => [_.ke, _.gu],
  desc: () => `
Hidden inside the darkness, behind the terror of change and the ripping of
the self lies a calling, ${_.jipa}.

\\- Was the wound necessary asked the suffering seeker ? 
\\- No it wasn't but it occured.
\\- But why ?
\\- ${_.gu}.
`,
})
