import * as _ from '../words'

export const complex = _.card('complex', {
  open: true,
  desc: () => `
# Complex forms

This card is mainly a stress-test for the language to ensure that there are
ways to express the more complex sentences without ambiguity (relative
clauses, deranking, etc).

Most if not all phrase are NSFW because this gave me extra motivation to fix
things correctly (make sure to enable the "🍑" button).

## Verb deranking
  
* ${_.phrase('I begin to run', _.o.ju, _.u.feno.h)}  (modals and phasals)
* ${_.phraseX('I came out in order to cum on her tits')}  (purpose clauses)
* ${_.phraseX(
    'I want to vagina-grasp your penis.',
    _.o.ora,
    _.u.yin.u$,
    _.ti.taj.m
  )}  (desideratives)
* ${_.phraseX(
    'I made her whip him.',
    _.o.mahim.em,
    _.ana.m,
    _.u.fo,
    _.oto.m
  )} (manipulatives)
* ${_.phraseX(
    'I saw them undressing.',
    _.o.fa.em,
    _.tasha.m,
    _.le.u.lu.nefe
  )} (perception)
* ${_.phraseX(
    'She screamed like a goat before she came.',
    _.ta.ana,
    _.a.haopa.em,
    _.si.hapan,
    _.ju.dem,
    _.u.najlo
  )} ('before/after' relativisation)
* ${_.phraseX(
    'When we arrived, they were still in bed.'
  )} ('when' relativisation)
* ${_.phraseX('What I prefer is doggy style.')} (nominative relativisation)
* ${_.phraseX(
    'I cannot leave her alone because she is tied to the radiator.'
  )} (reason)
* ${_.phraseX(
    'If they did not enjoy sex with you, they should not have come back.'
  )} (reality condition)
* ${_.phraseX('I know that they will scream.')} (knowledge)
* ${_.phrase('I think that we should stay at home.')} (propositional attitude)
* ${_.phrase('I said that I was tired.')} (utterance)

`,
})
