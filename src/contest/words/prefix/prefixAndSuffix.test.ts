import { describe, expecto, it } from 'test'
import * as _ from '../../lang'

describe('prefixAndSuffix', () => {
  it('should work as prefix', () => {
    expecto(_.es.o.la).toBe('esola/PASS.1SG.**kiss**/verb')
  })

  it('should work as suffix', () => {
    expecto(_.la.es).toBe('lanes/**lips**.IS-NESS/noun')
  })

  it('should work as suffix', () => {
    expecto(_.u.la.es).toBe('ulanes/INF.**to kiss**.IS-NESS/noun')
  })
})
