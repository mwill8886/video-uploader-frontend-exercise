import { render } from '@redwoodjs/testing/web'

import DailyPick from './DailyPick'

//   Improve this test with help from the Redwood Testing Doc:
//    https://redwoodjs.com/docs/testing#testing-components

describe('DailyPick', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<DailyPick />)
    }).not.toThrow()
  })
})
