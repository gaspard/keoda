import * as _ from '..'

export const sing = _.card('sing', {
  phon: '/sin/',
  writ: 'sing',
  desc: () => `
# Some ideas for lyrics

## ${_.duhashati} (your laugh)

${_.phrase(
  "You laugh and get agitated when I'm here.",
  _.iduhasha,
  _.shu,
  _.irugui,
  _.dem,
  _.ohe,
  _.sen
)}

${_.phrase(
  'I burn to ashes when you are here.',
  _.esohajapi,
  _.ru,
  _.ajaname,
  _.dem,
  _.ihe,
  _.sen
)}

${_.phrase(
  'Eternity is remembered by the place.',
  _.laum,
  _.wa,
  _.alemegu,
  _.fuse
)}

## ${_.ahoto} (him)

${_.block(
  {
    t: 'I look in the mirror and I see him.',
    p: [_.ofa, _.fahatah, _.ku, _.ofa, _.tahoton],
  },
  {
    t: 'I look in my eyes and I see her.',
    p: [_.ofa, _.faton, _.ku, _.ofa, _.anadam],
  },
  {
    t: 'When will he go ?',
    p: [_.dir, _.tahoton, _.ahodo, _.q],
  },
  {
    t: 'I saw him always and always.',
    p: [_.ofalem, _.tahoton, _.golau, _.golau],
  },
  {
    t: 'He took my voice.',
    p: [_.tahoto, _.ahajolemu, _.tolapan],
  },
  {
    t: '... my long hair everywhere.',
    p: [_.tojihukipan],
  },
  {
    t: '... my place in life everywhere.',
    p: [_.toleirumipan],
  }
)}

Reply:

${_.block(
  {
    t: 'I am him.',
    p: [_.ohe, _.tahoton],
  },
  {
    t: 'I have to die to let you thread your life.',
    p: [_.okuru, _.nemetonam, _.eku, _.iru, _.gufitinam],
  },
  {
    t: 'I thought I was a strong spirit.',
    p: [_.ogahilem, _.eku, _.ohe, _.gogam],
  },
  {
    t: 'Was I only a thought ?',
    p: [_.eja, _.ohelem, _.gahinuram, _.q],
  },
  {
    t: 'Did I give you anything ?',
    p: [_.eja, _.oguwulem, _.nenam, _.q],
  },
  {
    t: "I am dying but I don't know who I was.",
    p: [_.esonem, _.shuhe, _.dim, _.ohelem, _.onepana],
  },
  {
    t: 'You are my daughter, you are my child.',
    p: [],
  },
  {
    t: 'I love you, you are my life.',
    p: [],
  },
  {
    t: "Please don't forget me like I forgot you.",
    p: [],
  },
  {
    t: 'I kept us alive.',
    p: [],
  },
  {
    t: 'It took me so long to give you my life.',
    p: [],
  },
  {
    t: 'Forgive me.',
    p: [],
  },
  {
    t: 'I love you.',
    p: [],
  },
  {
    t: 'You are my heart.',
    p: [],
  },
  {
    t: 'Please remember that I loved you.',
    p: [],
  }
)}

Reply:

${_.block(
  {
    t: "Je voudrais te dire que je t'aime.",
    p: [],
  },
  {
    t: "Mais je ne peux t'aimer que si tu me donnes ta vie.",
    p: [],
  },
  {
    t: "Alors je t'aimerai comme je n'ai aimé personne.",
    p: [],
  },
  {
    t: 'Je te dois la vie.',
    p: [],
  },
  {
    t: 'Je suis désolée que tu meures pour que je vive.',
    p: [],
  },
  {
    t: "Je suis désolée pour ceux qui t'aimes.",
    p: [],
  },
  {
    t: 'Je suis désolée pour ceux qui se souviennent de toi.',
    p: [],
  },
  {
    t: 'Je me souviendrai de toi.',
    p: [],
  }
)}

## ${_.iS} (you)

${_.phrase('I fall asleep in your embrace.', _.piyifodi, _.rorumitim)}

${_.phrase(
  'I become a small girl as I drift away.',
  _.piyiru,
  _.anayiam,
  _.leu,
  _.piyimeshe,
  _.dao
)}

## Death

* ${_.phrase('Experiencing pain and death')}
* ${_.phrase('Destruction and anihilation')}
* ${_.phrase('Inside me')}
* ${_.phrase('Inside me')}
* ${_.phrase('Somehow, I see the love')}
* ${_.phrase('Behind the pain')}
* ${_.phrase('Behind death')}
* ${_.phrase('Behind')}
* ${_.phrase('Behind')}
* ${_.phrase('I love you life')}
* ${_.phrase('I love you like I never loved before')}
* ${_.phrase('I miss dancing')}
* ${_.phrase('I miss cuddling')}
* ${_.phrase('I miss the eyes of another')}
* ${_.phrase('I miss everything')}
* ${_.phrase('This lesson in pain')}
* ${_.phrase('Kills me')}
* ${_.phrase('Kills me')}
* ${_.phrase('Transformation is hard')}
* ${_.phrase('I love you people')}
* ${_.phrase('I miss you so much')}
* ${_.phrase('I miss dancing with you')}
* ${_.phrase('I miss looking at you')}
* ${_.phrase('I miss loving you')}
* ${_.phrase('I miss making love to life')}
* ${_.phrase('Looking to the world')}
* ${_.phrase('Looking at the children')}
* ${_.phrase('Looking at animals')}
* ${_.phrase('Looking at nature')}
* ${_.phrase('Did I ask for so much ?')}
* ${_.phrase('I feel loved like never before')}
* ${_.phrase('I feel wounded like never before')}
* ${_.phrase('Why ?')}
* ${_.phrase('Oh why ?')}
* ${_.phrase('To bring me closer...')}
* ${_.phrase('To bring me closer...')}
* ${_.phrase('I love everyone of you')}
* ${_.phrase('I love your dreams')}
* ${_.phrase('I love your bodies')}
* ${_.phrase('I love your weird struggles')}
* ${_.phrase('You are my life')}
* ${_.phrase('You are my soul')}
* ${_.phrase('You are my enchantment')}
* ${_.phrase('I know I have to go down')}
* ${_.phrase('I love you so much')}
* ${_.phrase('For giving me this')}
* ${_.phrase('Kindness')}
`,
})
