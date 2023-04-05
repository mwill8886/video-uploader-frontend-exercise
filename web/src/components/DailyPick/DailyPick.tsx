import { Link, routes } from '@redwoodjs/router'
import VideoThumbnail from 'src/components/VideoThumbnail'

//
// Component
//
const DailyPick = (props) => {
  const { videos } = props

  // get a featured video at random from the list
  const randomIndex = Math.floor(Math.random() * videos.length)
  const featuredVideo = videos[randomIndex]

  return (
    <div className="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 shadow-md">
      <div className='max-w-screen-xl mx-auto px-8 py-20'>
        <div className='flex'>
          <div className='flex-1 flex flex-col pr-4 justify-center items-center relative'>
            <h1 className=' text-[8vw] xl:text-[105px] leading-[0.75] w-max mb-8 font-extrabold uppercase text-white'>Daily Pick</h1>
            <p className='text-lg font-bold text-center text-yellow-300'>Experience a video that we have selected completely at random! Why? Simple, because we can and so you don't have to 👍</p>
          </div>
          <Link to={routes.video({ id: featuredVideo.id })} className="flex-1 shadow-2xl rotate-6 transition-all hover:rotate-3">
            <VideoThumbnail video={featuredVideo} />
          </Link>
        </div>
      </div>
    </div>
  )
}

export default DailyPick
