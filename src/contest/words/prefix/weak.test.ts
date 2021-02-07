import { describe, expecto, it } from 'test'
import * as _ from '..'

describe('weak.prefix', () => {
  it('should not select class', () => {
    expecto(_.ne.la).toBe('NEG.**lips**/noun')
    expecto(_.ne.lapa).toBe('NEG.**sing**/verb')
  })
})

describe('weak.suffix', () => {
  it('should pass previous prefix class', () => {
    expecto(_.o).toBe('1SG/verb')
    expecto(_.o.ne).toBe('1SG.NEG/verb')
  })

  it('should pass to next word', () => {
    expecto(_.o.ne).toBe('1SG.NEG/verb')
    expecto(_.o.ne.la).toBe('1SG.NEG.**kiss**/verb')
  })
})
