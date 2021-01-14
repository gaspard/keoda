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

${_.phrase('The place remembers eternity.', _.launam, _.alemegu, _.fusen)}

## ${_.loto} (him)

* ${_.phrase(
    'I look in the mirror and I see him.',
    _.ofa,
    _.fahatam,
    _.ku,
    _.ofa,
    _.lotam
  )}
* ${_.phrase(
    'I look in my eyes and I see her.',
    _.ofa,
    _.fatonam,
    _.ku,
    _.ofa,
    _.lanam
  )}
* ${_.phrase('When will he go ?', _.dir, _.lotam, _.ahodo, _.q)}
* ${_.phrase(
    'I saw him always and always.',
    _.ofalem,
    _.lotam,
    _.golau,
    _.golau
  )}
* ${_.phrase('He took my voice.', _.loto, _.ahajolemo, _.lapatonam)}
* ${_.phrase('... my hair.', _.jihukitonam)}
* ${_.phrase('... my place in life.', _.leirumitonam)}

Reply:

* ${_.phrase('I am him.', _.ohe, _.lotam)}
* ${_.phrase(
    'I have to die to let you thread your life.',
    _.okuru,
    _.nemetonam,
    _.eku,
    _.iru,
    _.gufitinam
  )}
* ${_.phrase(
    'I thought I was a strong spirit.',
    _.ogahilem,
    _.eku,
    _.ohe,
    _.gogam
  )}
* ${_.phrase('Was I only a thought ?', _.eja, _.ohelem, _.gahinuram, _.q)}
* ${_.phrase('Did I give you anything ?', _.eja, _.oguwulem, _.nenam, _.q)}
* ${_.phrase(
    "I am dying but I don't know who I was.",
    _.esonem,
    _.shuhe,
    _.dim,
    _.ohelem,
    _.onepana
  )}
* ${_.phrase('You are my daughter, you are my child.')}
* ${_.phrase('I love you, you are my life.')}
* ${_.phrase("Please don't forget me like I forgot you.")}
* ${_.phrase('I kept us alive.')}
* ${_.phrase('It took me so long to give you my life.')}
* ${_.phrase('Forgive me.')}
* ${_.phrase('I love you.')}
* ${_.phrase('You are my heart.')}
* ${_.phrase('Please remember that I loved you.')}

Reply:

* ${_.phrase("Je voudrais te dire que je t'aime.")}
* ${_.phrase("Mais je ne peux t'aimer que si tu me donnes ta vie.")}
* ${_.phrase("Alors je t'aimerai comme je n'ai aimé personne.")}
* ${_.phrase('Je te dois la vie.')}
* ${_.phrase('Je suis désolée que tu meures pour que je vive.')}
* ${_.phrase("Je suis désolée pour ceux qui t'aimes.")}
* ${_.phrase('Je suis désolée pour ceux qui se souviennent de toi.')}
* ${_.phrase('Je me souviendrai de toi.')}

## ${_.iya} (you)

${_.phrase('I fall asleep in your embrace.', _.piyifodi, _.rorumitinam)}

${_.phrase(
  'I become a small girl as I drift away.',
  _.piyiru,
  _.anayiam,
  _.leu,
  _.piyimeshe,
  _.hadau
)}
`,
})
