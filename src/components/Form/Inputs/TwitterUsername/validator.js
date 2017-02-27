// Letters, numbers and underscores, and 1-15 characters
export default twitter_username => (
  twitter_username && /^[a-zA-Z0-9_]{1,15}$/.test(twitter_username)
)
