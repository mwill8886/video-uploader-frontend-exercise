import type { FindVideos } from 'types/graphql'

import { Link, routes } from '@redwoodjs/router'
import type { CellSuccessProps, CellFailureProps } from '@redwoodjs/web'

import Videos from 'src/components/Video/Videos'
import DailyPick from 'src/components/DailyPick'

export const QUERY = gql`
  query FindVideos {
    videos {
      id
      url
      title
      description
      createdAt
      reactions {
        type
        user {
          id
        }
      }
      user {
        id
        email
      }
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Empty = () => {
  return (
    <div className="rw-text-center">
      {'No videos yet. '}
      <Link to={routes.newVideo()} className="rw-link">
        {'Create one?'}
      </Link>
    </div>
  )
}

export const Failure = ({ error }: CellFailureProps) => (
  <div className="rw-cell-error">{error.message}</div>
)

// ? Should we be structuring the page content here or in a separate component, need to research RedwoodJS best practices - MHW
export const Success = ({ videos }: CellSuccessProps<FindVideos>) => {
  return (
    <div>
      {/* Featured Video Section */}
      <div className='hidden md:block'>
      <DailyPick videos={videos}/>
      </div>
      {/* Videos List Section */}
      <div className='max-w-screen-2xl mx-auto'>
        <div className='border-b-2 border-indigo-500 pt-6 md:pt-12 pb-2 mb-6'>
          <h1 className='text-2xl font-bold text-indigo-500 text-center'>Videos</h1>
          {/* TODO: add a sort feature here to sort by createdAt, title, or rating */}
        </div>
        <Videos videos={videos} />
      </div>
    </div>
  )
}
