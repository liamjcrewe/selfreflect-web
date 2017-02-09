export const submitUpdateEmail = (
  dispatch,
  userId,
  token,
  newEmail,
  password
) => {
  console.log('Submit email')

  console.log(userId)
  console.log(token)
  console.log(newEmail)
  console.log(password)
}

export const submitUpdatePassword = (
  dispatch,
  userId,
  token,
  email,
  password,
  newPassword
) => {
  console.log('Submit password')

  console.log(userId)
  console.log(token)
  console.log(email)
  console.log(password)
  console.log(newPassword)
}
