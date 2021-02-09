import { describe, expecto, it } from 'test'
import * as _ from '../../lang'

describe('prefixAndSuffix', () => {
  it('should work as prefix', () => {
    expecto(_.es.o.la).toBe('esola/PASS.1SG.**kiss**/verb')
  })

  it('should work as suffix', () => {
    expecto(_.awi.es).toBe('awines/**beautiful**.IS-NESS/noun')
  })
})
