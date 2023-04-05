import { render } from '@redwoodjs/testing/web'

import VideoThumbnail from './VideoThumbnail'

//   Improve this test with help from the Redwood Testing Doc:
//    https://redwoodjs.com/docs/testing#testing-components

describe('VideoThumbnail', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<VideoThumbnail />)
    }).not.toThrow()
  })
})
