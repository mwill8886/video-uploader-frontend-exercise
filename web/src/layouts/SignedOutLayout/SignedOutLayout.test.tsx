import { render } from '@redwoodjs/testing/web'

import SignedOutLayout from './SignedOutLayout'

//   Improve this test with help from the Redwood Testing Doc:
//   https://redwoodjs.com/docs/testing#testing-pages-layouts

describe('SignedOutLayout', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<SignedOutLayout />)
    }).not.toThrow()
  })
})
