import * as _ from '../lang'

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
  
* ${_.phrase('I begin to run', _.o.juV, _.u.feno.m)}  (modals and phasals)
* ${_.phrase('I came home early in order to prepare dinner')}  (purpose clauses)
* ${_.phraseX(
    'I want to vagina-grasp your penis.',
    _.o.ora,
    _.u.yin.u$,
    _.o.ti.ma,
    _.ti.taj.m
  )}  (desideratives)
* ${_.phraseX(
    'I made her whip him.',
    _.o.mahim.em,
    _.unu.m,
    _.u.fik,
    _.oto.m
  )} (manipulatives)
* ${_.phrase(
    'I saw them undressing.',
    _.o.fa.em,
    _.ta.sha.m,
    _.le.u.lu.nefe
  )} (perception)
* ${_.phrase(
    'I kissed you after you fell asleep.',
    _.o.la.em,
    _.ti.m,
    _.le.hu.fodiru
  )} ('before/after' relativisation)
* ${_.phrase(
    'I kissed you after they fell asleep.',
    _.o.la.em,
    _.ti.m,
    _.hu.dem,
    _.a.fodiru.em
  )} ('before/after' relativisation)
* ${_.phrase(
    'When we arrived, they were still in bed.',
    _.dem,
    _.o.odu,
    _.a.lu.e.em,
    _.ro.piwe
  )} ('when' relativisation)
* ${_.phrase(
    'What I prefer is to sleep with you.',
    _.eku,
    _.o.ora.go,
    _.a.e,
    _.u.fodi,
    _.ko,
    _.ti.m
  )} (nominative relativisation)
* ${_.phraseX(
    'I cannot leave her alone because she is tied to the radiator.',
    _.o.neja,
    _.u.odo,
    _.pienu,
    _.unu.m,
    _.eku,
    _.lae,
    _.es.a.lu.ku,
    _.ajayusa.m
  )} (reason)
* ${_.phraseX(
    'If they did not enjoy sex with you, they should not have come back.'
  )} (reality condition)
* ${_.phraseX('I know that they will scream.')} (knowledge)
* ${_.phrase('I think that we should stay at home.')} (propositional attitude)
* ${_.phrase(
    'I said that I was tired.',
    _.o.lapa.em,
    _.eku,
    _.tus,
    _.o.e.em
  )} (utterance)

`,
})
