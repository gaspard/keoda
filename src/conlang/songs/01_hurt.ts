import { $, __ } from '../alt/other'
import * as _ from '../lang'

export const hurt = _.card('01 - hurt', {
  compact: true,
  desc: () => `
${_.phrase('Something happened.', __.pena, _.a.e.em, $)}
${_.phrase('The earth split under my feet', __.gana, _.a.hos.em, _.ir.sam)}
${_.phrase('and cut me in half.', _.shu, _.a.tifi, _.ruP.de.to.m, $)}
${_.phrase(
  'My heart sank so deep I lost it.',
  __.zu.to.$cap,
  _.a.yau.em,
  _.si.yau,
  _.ku,
  _.o.neku.em,
  _.a.s.m,
  $
)}

${_.phrase('I stand with a choice.', __.o.nom, _.ko.kus, $)}

${_.phrase(
  'Blades, sticks, weapons',
  __.kes,
  _.$comma,
  _.namel,
  _.$comma,
  _.nem.na
)}
${_.phrase('for territories, fight.', _.dor, _.noadun.m, _.sha.nepi, $)}
${_.phrase('Sons in wars, killed.', __.joto.m, _.ro.nemek, _.u.nemek, $)}
${_.phrase('Daughters in wars, raped.', __.junu.m, _.ro.nemek, _.u.tionehaj, $)}

${_.phrase('I stand with a choice.', __.o.nom, _.ko.kus, $)}

${_.phrase('The terror of feeling')}
${_.phrase('or the bliss of death.')}
${_.phrase('Nothingness, silence.')}
${_.phrase('Their silence to cover my hurt.')}

${_.phrase('I stand with a choice.')}

${_.phrase('I could live to forget.')}
${_.phrase('Run, run, run away.')}
${_.phrase('Escape in fights')}
${_.phrase('and meaningless words.')}

${_.phrase('I stand with a choice.')}

${_.phrase('But Anushka, dear,')}
${_.phrase('I would lose you,')}
${_.phrase('buried so deep,')}
${_.phrase('your voice a memory.')}

${_.phrase('Will you come?')}
${_.phrase('Will you come?')}
${_.phrase('To the land of the child?')}
${_.phrase('To feeling?')}

${_.phrase('Oh, Anushka, dear,')}
${_.phrase('I miss you. You are so far.')}
${_.phrase('But here, on this hill,')}
${_.phrase('hurt and terrified,')}
${_.phrase('I choose you.')}

${_.phrase('With all I have,')}
${_.phrase('I choose kindness.')}

`,
})
