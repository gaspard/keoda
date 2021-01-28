import * as _ from '..'

export const evolution = _.card('evolution', {
  desc: () => `
# Evolution

This is some historical notes on the language as it has evolved and how
expressing the same thing has changed over time.

#### note

This whole card is nsfw because this is what guides this language.

### Caress your breasts delicately

The original french phrase (the first motivation): "Caresse-toi les seins en
effleurant."

* ${_.phrase(
    'To you, (you) caress breasts lightly.',
    _.iHIST,
    _.mi,
    _.mun,
    _.sienu
  )}
* ${_.phrase('Caress your breasts lightly.', _.mi, _.munatinamHIST, _.sienu)}
* ${_.phrase('Caress your lovely breasts lightly.', _.mi, _.munatim, _.sienu)}
* ${_.phrase(
    'For us, tonight, you will be caressing your lovely breasts lightly.',
    _.futo,
    _.ilumiliro,
    _.munatim,
    _.sienu
  )}
`,
})
