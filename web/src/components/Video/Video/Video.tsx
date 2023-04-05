import { useState } from 'react'
import { routes, navigate } from '@redwoodjs/router'
import { useMutation } from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/toast'

import Button from 'src/components/Button'
import Reactions from 'src/components/Reactions'
import Time from 'src/components/Time'
import VideoEmbed from 'src/components/VideoEmbed'
import { useIsCurrentUser, useCurrentUser } from 'src/helpers/hooks'
import { ReactionEmojis } from 'src/components/ReactionEmoji'

const DELETE_VIDEO_MUTATION = gql`
  mutation DeleteVideoMutation($id: Int!) {
    deleteVideo(id: $id) {
      id
    }
  }
`

const REACT_TO_VIDEO_MUTATION = gql`
  mutation ReactToVideoMutation($id: Int!, $type: ReactionType!) {
    reactToVideo(id: $id, type: $type) {
      id
      reactions {
        id
        type
        user {
          id
          email
        }
      }
    }
  }
`

const Video = ({ video }) => {
  const [ reactionsOpen, setReactionsOpen ] = useState(false)
  const isCurrentUser = useIsCurrentUser(video.user)

  const [deleteVideo] = useMutation(DELETE_VIDEO_MUTATION, {
    onCompleted: () => {
      toast.success('Video deleted')
      navigate(routes.videos())
    },
    onError: (error) => {
      toast.error(error.message)
    },
  })

  const [reactToVideo] = useMutation(REACT_TO_VIDEO_MUTATION)

  // get the current reaction emoji for this user
  // TODO: this block gets reused frequently and should be moved to a shared location - not doing it right now due to time
  const currentUser = useCurrentUser()
  const { reactions } = video
  const currentReactionType = reactions.find(
    (reaction) => reaction.user.id === currentUser.id
  )?.type

  const toggleReaction = () => {
    setReactionsOpen(prev => !prev)
  }

  const onDeleteClick = (id) => {
    if (confirm(`Are you sure you want to delete video ${id}?`)) {
      deleteVideo({ variables: { id } })
    }
  }

  const onReactionClick = (type) => {
    reactToVideo({ variables: { id: video.id, type } })
    toggleReaction()
  }

  return (
    <div className='mt-6 md:mt-12 max-w-screen-2xl mx-auto px-4'>
      <VideoEmbed video={video} />
      <div className='mt-4'>
        <div className='flex'>
          <div className='flex-1 mr-4'>
            <p className="text-xl font-semibold">{video.title}</p>
            <p className="text-xs text-gray-400">
              Posted by: {video.user.email}
            </p>
            <p className="text-xs text-gray-400">
              Uploaded: <Time datetime={video.createdAt} />
            </p>
          </div>
          {/* action buttons */}
          {/* TODO: these action buttons are all supposed to be icon buttons but i'm running low on time to go look for svgs */}
          <div>
            <div className='flex items-center'>
              <div className='relative'>
                <button onClick={toggleReaction} className='text-yellow-400'>
                  {
                    currentReactionType
                      ? ReactionEmojis[currentReactionType]
                      : 'React'
                  }
                </button>
                <div className={`absolute right-6 bg-white shadow-md p-2 rounded-md overflow-hidden origin-top-right transition-all ${ reactionsOpen ? 'scale-100' : 'scale-0'}`}>
                  <Reactions video={video} onClick={onReactionClick} className='w-60 text-center'/>
                </div>
              </div>
              {/* vertical divider */}
              <div className='hidden sm:inline-block w-[1px] ml-6 mr-6 h-6 bg-purple-500'></div>
              {/* desktop only- edit and delete */}
              <button className='hidden sm:inline-block mr-6 text-indigo-500' onClick={() => navigate(routes.editVideo({ id: video.id }))}>Edit</button>
              <button className='hidden sm:inline-block text-pink-500' onClick={() => onDeleteClick(video.id)}>Delete</button>
            </div>
          </div>
        </div>
        {/* description section */}
        {
          video.description && (
            <div className='mt-4 sm:p-4 rounded-md sm:border sm:bg-gray-100'>{video.description}</div>
          )
        }

        {/* Leaving the buttons here since they were part of the challenge */}
        {isCurrentUser && (
          <div className="mt-8 sm:hidden flex">
            <Button className="bg-indigo-500 hover:bg-indigo-400 flex-1 text-center" to={routes.editVideo({ id: video.id })}>Edit</Button>
            <Button
              className="ml-2 bg-pink-500 hover:bg-pink-400 flex-1 text-center"
              onClick={() => onDeleteClick(video.id)}
            >
              Delete
            </Button>
          </div>
        )}
      </div>
    </div>
  )
}

export default Video
