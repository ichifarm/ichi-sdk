import { ChainId, oneTokenFactory } from '../src'

describe('addresses', () => {
  it('Should equal Factory address', () => {
    expect(oneTokenFactory[ChainId.KOVAN]).toEqual('0x3D5218273bc35baeb211386718ad594d0C49CBd8')
  })
})
