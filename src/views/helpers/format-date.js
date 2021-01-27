export default function formatDate (ts) {
  let raw = new Date(ts)
  let time = raw.toLocaleTimeString(
    [],
    {
      year: 'numeric',
      month: 'numeric',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    }
  )

  return time
}
