import * as _ from '..'

export const sing = _.card('sing', {
  lang: 'Some ideas for lyrics',
  phon: '/sin/',
  writ: 'సిఁ',
  desc: () => `

## ${_.duhashati} (your laugh)

${_.phrase(
  "You laugh and get agitated when I'm here.",
  _.iduhasha,
  _.shu,
  _.irugui,
  _.eyu,
  _.ohe,
  _.sen
)}

${_.phrase(
  'I burn to ashes when you are here.',
  _.esohajapi,
  _.ru,
  _.ajaname,
  _.eyu,
  _.ihe,
  _.sen
)}

${_.phrase('The place remembers eternity.', _.lemiram, _.alemegu, _.fusen)}

## ${_.loto} (him)

${_.phrase(
  'I look in the mirror and I see him.',
  _.ofa,
  _.fahatam,
  _.shu,
  _.ofa,
  _.lotam
)}
`,
})
