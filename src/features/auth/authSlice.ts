import { PayloadAction, createSlice } from '@reduxjs/toolkit'
import { UserRole } from '../users/types/User'
import { RootState } from '../../app/store'
import { LoginDTO } from './types/login.dto'
import axios from 'axios'
import authLocalStorage from './utils/authLocalStorage'
import { AppThunk } from '../../app/typings'

export interface AuthState {
  token: string
  username: string
  role: UserRole
  previewMode: boolean
}

const initialState: AuthState = {
  token: '',
  username: '',
  role: 'member',
  previewMode: false,
}

export const loginUser =
  (loginData: { phone: string; password: string }): AppThunk<Promise<void>> =>
  async (dispatch) => {
    const res = await axios.post<LoginDTO>(
      'https://semicolon-registration-backend.onrender.com/auth/login',
      {
        ...loginData,
      }
    )
    const body = res.data.data
    authLocalStorage.login(body)
    console.log(body)
    dispatch(authSlice.actions.setUser(body))
  }

export const logoutUser = (): AppThunk => (dispatch) => {
  authLocalStorage.logout()
  dispatch(authSlice.actions.setUser(initialState))
}

export const loadSavedLogin = (): AppThunk<boolean> => (dispatch) => {
  const savedLogin = authLocalStorage.loadSavedUser()
  if (savedLogin) dispatch(authSlice.actions.setUser(savedLogin))
  return !!savedLogin
}

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setUser(state, action: PayloadAction<Optional<AuthState, 'previewMode'>>) {
      const { token, username, role, previewMode = false } = action.payload
      state.token = token
      state.username = username
      state.role = role
      state.previewMode = previewMode
    },
    activatePreviewMode(state) {
      state.previewMode = true
      state.token = 'Preview Mode'
      state.username = 'Preview Mode'
      state.role = 'admin'
    },
  },
})

export default authSlice.reducer

export const selectAuth = (state: RootState) => state.auth
export const selectAuthHeader = (state: RootState) => ({
  Authorization: `Bearer ${state.auth.token}`,
})

export const { activatePreviewMode } = authSlice.actions
