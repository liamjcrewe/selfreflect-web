export default (password, confirm) => (
  (password.length > 7) && (confirm === password)
)
