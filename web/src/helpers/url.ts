// Based off https://stackoverflow.com/a/9102270
export function getYouTubeId(url) {
  const regex =
    /^.*(youtu\.be\/|v\/|u\/\w\/|embed\/|watch\?v=|\&v=)([^#\&\?]*).*/
  const match = url.match(regex)
  if (match) {
    const id = match[2]
    if (id.length === 11) {
      return id
    }
  }
  return null
}
