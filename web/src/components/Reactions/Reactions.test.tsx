import { render } from '@redwoodjs/testing/web'

import Reactions from './Reactions'

//   Improve this test with help from the Redwood Testing Doc:
//    https://redwoodjs.com/docs/testing#testing-components

describe('Reactions', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<Reactions />)
    }).not.toThrow()
  })
})
