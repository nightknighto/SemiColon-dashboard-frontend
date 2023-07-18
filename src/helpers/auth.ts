import { NavigateFunction } from 'react-router-dom'
import { res } from '../types/res'

export function authHeader() {
  const user = localStorage.getItem('user')
  if (user) {
    const out = JSON.parse(user)
    if (out.token) {
      return { authorization: 'Bearer ' + out.token }
    }
  }
  return null
}

export function authLogin(response: res, navigate: NavigateFunction) {
  if (response.status === 200) {
    localStorage.setItem('user', JSON.stringify(response.data.data))
    navigate('/stats')
  }
  return response
}

export function onLogout() {
  localStorage.removeItem('user')
}

export function getUserName() {
  const user = localStorage.getItem('user')
  if (user) {
    const out = JSON.parse(user)
    return out.username
  }

  return null
}

export function getRole() {
  const user = localStorage.getItem('user')
  if (user) {
    const out = JSON.parse(user)
    return out.role
  }

  return null
}
