import { render } from '@redwoodjs/testing/web'

import VideosListItem from './VideosListItem'

//   Improve this test with help from the Redwood Testing Doc:
//    https://redwoodjs.com/docs/testing#testing-components

describe('VideosListItem', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<VideosListItem />)
    }).not.toThrow()
  })
})
