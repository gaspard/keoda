import * as _ from '../lang'

export const sing = _.card('sing', {
  open: true,
  desc: () => `
# Some ideas for lyrics

## ${_.duhasha.ti} (your laugh)

${_.phrase(
  "You laugh and get agitated when I'm here.",
  _.i.duhasha,
  _.shu,
  _.i.rugui,
  _.dem,
  _.o.e,
  _.sen
)}

${_.phrase(
  'I burn to ashes when you are here.',
  _.es.o.ajapi,
  _.si.ajaname,
  _.dem,
  _.i.e,
  _.sen
)}

${_.phrase(
  'Eternity is remembered by the place.',
  _.lau.m,
  _.wa,
  _.a.lemegu,
  _.fu.sen
)}

## ${_.ofo.n} (him)

${_.block(
  {
    t: 'I look in the mirror and I see him.',
    p: [_.o.fa, _.fahata.h, _.ku, _.o.fa, _.ofo.n],
  },
  {
    t: 'I look in my eyes and I see her.',
    p: [_.o.fa, _.fa.to.n, _.ku, _.o.fa, _.unu.m],
  },
  {
    t: 'When will he go ?',
    p: [_.dir, _.ofo.n, _.a.odo, _.q],
  },
  {
    t: 'I saw him always and always.',
    p: [_.o.fa.em, _.ofo.n, _.si.lau, _.si.lau],
  },
  {
    t: 'He took my voice.',
    p: [_.ofo, _.a.hajo.emu, _.to.lapa.n],
  },
  {
    t: '... my long hair everywhere.',
    p: [_.to.ji.uki.pa.n],
  },
  {
    t: '... my place in life everywhere.',
    p: [_.to.leirumi.pa.n],
  }
)}

Reply:

${_.block(
  {
    t: 'I am him.',
    p: [_.o.pi.e, _.ofo.n],
  },
  {
    t: 'I have to die to let you thread your life.',
    p: [_.o.pi.kuru, _.u.nem.m, _.eku, _.i.ru, _.gufi.ti.m],
  },
  {
    t: 'I thought I was a strong spirit.',
    p: [_.o.pi.gahi.em, _.eku, _.o.pi.e, _.go.ga.m],
  },
  {
    t: 'Was I only a thought ?',
    p: [_.eja, _.o.pi.e.em, _.gahi.nur.m, _.q],
  },
  {
    t: 'Did I give you anything ?',
    p: [_.eja, _.o.pi.guwu.em, _.pena.m, _.ni.ti, _.q],
  },
  {
    t: "I am dying but I don't know who I was.",
    p: [_.es.o.pi.nem, _.ne.shu, _.o.pi.ne.pana, _.le, _.o.pi.e.em],
  },
  {
    t: 'You are my daughter, you are my child.',
    p: [_.i.e, _.to.unu.lil.m, _.i.e, _.to.joda.m],
  },
  {
    t: 'I love you, you are my life.',
    p: [_.o.pi.zu, _.ti.m, _.i.e, _.em.to.pi],
  },
  {
    t: "Please don't forget me like I forgot you.",
    p: [_.baka, _.baka, _.ne.fiji.imp, _.pi.da.n, _.si.o.pi.fiji.em, _.ti.da.n],
  },
  {
    t: 'I kept us alive.',
    p: [_.o.pi.magi, _.de.m, _.le.em],
  },
  {
    t: 'It took me so long to give you my life.',
    p: [_.es.o.lu.gu.em, _.si.uki, _.u.guwu, _.ni.ti, _.em.to.m],
  },
  {
    t: 'Forgive me.',
    p: [_.pahau.imp, _.ni.to.pi],
  },
  {
    t: 'I love you.',
    p: [_.o.pi.zu, _.ti.m],
  },
  {
    t: 'You are my heart.',
    p: [_.i.e, _.zu.to.m],
  },
  {
    t: 'Please remember that I loved you.',
    p: [_.baka, _.ji.imp, _.eku, _.o.zu.em, _.ti.m],
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

## ${_.i$} (you)

${_.phrase('I fall asleep in your embrace.', _.o.yi.fodi, _.ro.rumi.ti.m)}

${_.phrase(
  'I become a small girl as I drift away.',
  _.o.yi.ru,
  _.unu.lil.m,
  _.leu,
  _.o.yi.meshe,
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

## Leave us, girl

* ${_.phrase(
    /* 'The war is coming again.' */ 'We are becoming war again.',
    _.o.lu.ru,
    _.nemek.h,
    _.si.ota
  )}
* ${_.phrase(/* 'We are growing' */ 'We are being grown', _.es.sho.lu.him)}
* ${_.phrase('Into fear and hatred', _.peu.h, _.shu, _.nepi.h)}
* ${_.phrase('Our hearts are closing', _.au.tosho, _.sha.lu.dak)}
* ${_.phrase('Our minds are foggy.')}

* ${_.phrase('You don’t have a future here.')}

* ${_.phrase('Leave us, girl')}
* ${_.phrase('Alone in the dark')}
* ${_.phrase('Without your voice in the house')}
* ${_.phrase('Without your joy between the tables')}
* ${_.phrase('Leave us, girl.')}

* ${_.phrase('War crushes the sweetest spirits')}

* ${_.phrase('Leaving hatred and power')}
* ${_.phrase('As only players')}
* ${_.phrase('In the fields')}
* ${_.phrase('And hearts.')}
* ${_.phrase('You would become dark here.')}

* ${_.phrase('Leave us, girl…')}

`,
})
