import { describe, expecto, it } from 'test'
import * as _ from '..'

describe('word.mixed', () => {
  it('should work as word', () => {
    expecto(_.gu).toBe('**darkness**/noun')
  })

  it('should work as adj', () => {
    expecto(_.la.gu).toBe('**lips**.*dark*/noun')
  })

  it('should work as adv', () => {
    expecto(_.o.la.gu).toBe('1SG.**kiss**.*lively*/verb')
  })
})
