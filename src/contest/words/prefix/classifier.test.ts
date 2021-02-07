import { describe, expecto, it } from 'test'
import * as _ from '..'

describe('classifier', () => {
  it('should select verb', () => {
    expecto(_.o.lapa).toBe('1SG.**sing**/verb')
    expecto(_.i.lapa).toBe('2SG.**sing**/verb')
  })

  it('should select verb with suffix', () => {
    expecto(_.o.lapa.ir).toBe('1SG.**sing**.FUT/verb')
  })

  it('should select adv', () => {
    expecto(_.si.gu).toBe('ADV.*lively*/adv')
  })

  it('should select adj', () => {
    expecto(_.le.gu).toBe('ADJ.*dark*/adj')
  })
})
