import { getYouTubeId } from 'src/helpers/url'

const VideoThumbnail = ({ video }) => {
  const { url } = video
  const id = getYouTubeId(url)

  return (
    <div style={{ width: '100%', height: 'auto' }}>
      {id ? (
        <img
          alt={video.title}
          src={`https://img.youtube.com/vi/${id}/maxresdefault.jpg`}
          className="rounded-lg"
        />
      ) : (
        <div>Video url ${video.url} is not supported</div>
      )}
    </div>
  )
}

export default VideoThumbnail
