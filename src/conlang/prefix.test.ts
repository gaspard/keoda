import { describe, expectCla, expectGlo, it } from 'test'
import { word } from './helpers'
import { prefix, verb } from './mprefix'
import { Entry } from './types'

interface Words {
  $: Entry
  _ante: Words
  _sing: Entry
}
// Since words are globally defined, we use '_' prefix for tests as
// specific namespace.
const you = (verb('_you', {
  noun: 'you',
  glo: '2SG',
}) as any) as Words

word('_sing', {
  verb: 'to sing',
})

prefix(
  '_ante',
  {
    def: 'before',
    verb: 'to begin',
    glo: 'ANTE',
    forcedGlo: false,
  },
  {
    verb: 'to begin',
    cla: 'verb',
  }
)

describe('prefix.simple', () => {
  it('should use verb', () => {
    expectGlo(you._sing).toBe('2SG.**sing**')
    expectCla(you._ante).toBe('2SG.**begin**')
  })
})

describe('prefix.weak', () => {
  it('should not change class', () => {
    expectGlo(you._ante._sing).toBe('2SG.ANTE.**sing**')
  })
})
