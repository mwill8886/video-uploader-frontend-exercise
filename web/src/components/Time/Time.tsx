import { DateTime } from 'luxon'

const Time = ({ datetime }) => {
  const formattedCurrentTime = DateTime.fromISO(datetime).toLocaleString(DateTime.DATETIME_FULL)
  return (
    datetime && (
      <time dateTime={datetime} title={datetime}>
        {formattedCurrentTime}
      </time>
    )
  )
}

export default Time
