import { describe, expecto, it } from 'test'
import * as _ from '..'

describe('prefixAndVerb', () => {
  it('should work as prefix', () => {
    expecto(_.ju.la).toBe('ANTE.**lips**/noun')
    expecto(_.o.ju.la).toBe('1SG.ANTE.**kiss**/verb')
  })

  it('should work as verb', () => {
    expecto(_.o.ju).toBe('1SG.begin/verb')
  })
})
