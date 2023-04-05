import { render } from '@redwoodjs/testing/web'

import ReactionEmoji from './ReactionEmoji'

//   Improve this test with help from the Redwood Testing Doc:
//    https://redwoodjs.com/docs/testing#testing-components

describe('ReactionEmoji', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<ReactionEmoji />)
    }).not.toThrow()
  })
})
