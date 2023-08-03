import { LoginDTO } from '../types/login.dto'

function login(response: LoginDTO["data"]) {
  localStorage.setItem('user', JSON.stringify(response))
}

function logout() {
  localStorage.removeItem('user')
}

function loadSavedUser(): LoginDTO["data"] | null {
  const user = localStorage.getItem('user')
  if (user) {
    return JSON.parse(user)
  }
  return null
}

const authLocalStorage = {
  login,
  logout,
  loadSavedUser,
}

export default authLocalStorage
