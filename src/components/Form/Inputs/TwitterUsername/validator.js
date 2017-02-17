// Letters, numbers and underscores, and 1-15 characters
export default username => /^[a-zA-Z0-9_]{1,15}$/.test(username)
