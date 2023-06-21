export default function authHeader() {
  const user = localStorage.getItem('user')
  if (user) {
    const out = JSON.parse(user)
    if (out.token) {
      return { 'x-access-token': out.token }
    }
    // remove when actual jwt is implemented
    return out
  }

  return null
}
