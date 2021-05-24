import { ChainId, FACTORY } from '../src'

describe('addresses', () => {
  it('Should print Factory address', () => {
    expect(FACTORY[ChainId.KOVAN]).toEqual('0x3D5218273bc35baeb211386718ad594d0C49CBd8')
  })
})
