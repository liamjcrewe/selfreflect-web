export default ({ value, exp }) => {
  const now = Math.floor(Date.now() / 1000)

  // Token set and not going to expire for at least a minute
  return (value && (exp > now + 60)) === true
}
