import { render } from '@redwoodjs/testing/web'

import SignedInLayout from './SignedInLayout'

//   Improve this test with help from the Redwood Testing Doc:
//   https://redwoodjs.com/docs/testing#testing-pages-layouts

describe('SignedInLayout', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<SignedInLayout />)
    }).not.toThrow()
  })
})
