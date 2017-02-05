export default (confirm, password) => (
  (password.length > 7) && (confirm === password)
)
