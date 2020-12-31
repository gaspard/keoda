import * as _ from '.'

export const am = _.word('am', {
  glo: 'DAT',
  suffix: 'recipient',
  verb: 'to receive',
  desc: () => `The suffix is added to the last part of the recipient. So if the receiver is John's butt, depending on word order, the ${
    _.am
  } goes on ${_.pal} or ${_.John}:
  
  ${_.phrase('They whip the butt of John', _.shafo, _.palwu, _.Johnam)}

  ${_.phrase("They whip John's butt", _.shafo, _.John, _.palam)}
  `,
})
