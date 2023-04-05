import { videos, video, createVideo, updateVideo, deleteVideo } from './videos'
import type { StandardScenario } from './videos.scenarios'

// Generated boilerplate tests do not account for all circumstances
// and can fail without adjustments, e.g. Float and DateTime types.
//           Please refer to the RedwoodJS Testing Docs:
//       https://redwoodjs.com/docs/testing#testing-services
// https://redwoodjs.com/docs/testing#jest-expect-type-considerations

describe('videos', () => {
  scenario('returns all videos', async (scenario: StandardScenario) => {
    const result = await videos()

    expect(result.length).toEqual(Object.keys(scenario.video).length)
  })

  scenario('returns a single video', async (scenario: StandardScenario) => {
    const result = await video({ id: scenario.video.one.id })

    expect(result).toEqual(scenario.video.one)
  })

  scenario('creates a video', async (scenario: StandardScenario) => {
    const result = await createVideo({
      input: {
        userId: scenario.video.two.userId,
        title: 'String',
        url: 'String',
        updatedAt: '2022-08-05T18:47:15Z',
      },
    })

    expect(result.userId).toEqual(scenario.video.two.userId)
    expect(result.title).toEqual('String')
    expect(result.url).toEqual('String')
    expect(result.updatedAt).toEqual('2022-08-05T18:47:15Z')
  })

  scenario('updates a video', async (scenario: StandardScenario) => {
    const original = await video({ id: scenario.video.one.id })
    const result = await updateVideo({
      id: original.id,
      input: { title: 'String2' },
    })

    expect(result.title).toEqual('String2')
  })

  scenario('deletes a video', async (scenario: StandardScenario) => {
    const original = await deleteVideo({ id: scenario.video.one.id })
    const result = await video({ id: original.id })

    expect(result).toEqual(null)
  })
})
