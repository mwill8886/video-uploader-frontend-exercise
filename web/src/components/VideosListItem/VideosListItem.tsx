import { Link, routes } from '@redwoodjs/router'
import VideoThumbnail from 'src/components/VideoThumbnail'
import { ReactionEmojis } from 'src/components/ReactionEmoji'
import { useCurrentUser } from 'src/helpers/hooks'
import { DateTime } from 'luxon'

//
// Component
//
const VideosListItem = (props) => {
  const { video } = props
  const currentUser = useCurrentUser()

  // get the current reaction emoji for this user
  // TODO: this block gets reused frequently and should be moved to a shared location - not doing it right now due to time
  const currentReactionType = video?.reactions?.find(
    (reaction) => reaction?.user?.id === currentUser?.id
  )?.type ?? null

  // format the createdAt to a more human readable string
  const formattedCreatedAt = DateTime.fromISO(video.createdAt).toRelative()


  return (
    <Link to={routes.video({ id: video.id })} className='w-full sm:w-72 p-4 rounded-lg transition-all sm:hover:shadow-lg sm:hover:scale-110'>
      <VideoThumbnail video={video} />
      <div className="relative">
        <div className={`mt-1 ${!!currentReactionType ? 'pr-10': 'pr-0'}`}>
          <div className={`text-md font-semibold overflow-hidden whitespace-nowrap text-ellipsis`}>{video.title}</div>
          <div className='text-sm text-gray-400'>{formattedCreatedAt}</div>
        </div>
        {
          currentReactionType && (
            <div className="absolute -top-6 right-0 text-2xl w-10 h-10 bg-white rounded-full flex items-center justify-center">
              {ReactionEmojis[currentReactionType]}
            </div>
          )
        }
      </div>
    </Link>
  )
}

export default VideosListItem
