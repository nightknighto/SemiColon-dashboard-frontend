import { NavigateFunction } from 'react-router-dom'
import { res } from '../interfaces/res'

export function authHeader() {
  const user = localStorage.getItem('user')
  if (user) {
    const out = JSON.parse(user)
    if (out.token) {
      return { 'x-access-token': out.token }
    }
  }
  return null
}

export function authLogin(response: res, navigate: NavigateFunction) {
  if (response.status === 200) {
    localStorage.setItem('user', JSON.stringify(response.data.data))
    navigate('stats')
  }
  return response
}
