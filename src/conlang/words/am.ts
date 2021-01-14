import * as _ from '.'

export const am = _.word('am', {
  glo: 'ACC',
  suffix: 'recipient',
  verb: 'to receive',
  desc: () => `
The suffix is added to the last part of the a group with the accusative case.
So if the noun phrase is John's face, depending on word order, the ${_.am}
goes on ${_.duha} or ${_.John}:
  
* ${_.phrase('They look at the face of John.', _.shafa, _.duhawu, _.Johnam)}
* ${_.phrase("They look at John's hand.", _.shafa, _.John, _.duham)}

On words with an adjective or other suffix, ${_.am} suffix always comes last: ${
    _.jihukitonam
  }

To add ${_.am} on words ending with a vowel, add an \`n\`.
`,
})
