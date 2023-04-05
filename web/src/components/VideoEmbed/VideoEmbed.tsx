import { getYouTubeId } from 'src/helpers/url'

const VideoEmbed = ({ width = 560, height = 315, video }) => {
  const { url } = video
  const id = getYouTubeId(url)

  return (
    <div>
      {id ? (
        <iframe
          className='w-full aspect-video'
          src={`https://www.youtube.com/embed/${id}`}
          title={video.title}
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      ) : (
        <div>Video url ${video.url} is not supported</div>
      )}
    </div>
  )
}

export default VideoEmbed
