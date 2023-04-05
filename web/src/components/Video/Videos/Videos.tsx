import VideosListItem from 'src/components/VideosListItem'

//
// Component
//
const VideosList = ({ videos }) => {
  return (
    <div className="flex flex-wrap justify-center" >
      {videos.map((video) => (
        <VideosListItem video={video} key={video.id}/>
      ))}
    </div>
  )
}

export default VideosList
