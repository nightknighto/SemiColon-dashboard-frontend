import { PayloadAction, createSlice } from '@reduxjs/toolkit'
import { UserRole } from '../users/types/User'
import { RootState } from '../../app/store'
import { LoginDTO } from './types/login.dto'
import axios from 'axios'
import authLocalStorage from './utils/authLocalStorage'
import { AppThunk } from '../../app/typings'

export interface AuthState {
  username: string
  role: UserRole
  previewMode: boolean
}

const initialState: AuthState = {
  username: '',
  role: 'member',
  previewMode: false,
}

export const loginUser =
  (loginData: { phone: string; password: string }): AppThunk<Promise<void>> =>
    async (dispatch) => {
      const res = await axios.post<LoginDTO>(
        import.meta.env.VITE_API_URL + '/auth/login',
        {
          ...loginData,
        }, {
          withCredentials: true,
        }
      )
      const body = res.data.data
      authLocalStorage.login(body)
      console.log(body)
      dispatch(authSlice.actions.setUser(body))
    }

export const logoutUser = (): AppThunk => async (dispatch) => {
  await axios.get(
    import.meta.env.VITE_API_URL + '/auth/logout',
    { withCredentials: true }
  )
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
      const { username, role, previewMode = false } = action.payload
      state.username = username
      state.role = role
      state.previewMode = previewMode
    },
    activatePreviewMode(state) {
      state.previewMode = true
      state.username = 'Demo Mode'
      state.role = 'admin'
    },
  },
})

export default authSlice.reducer

export const selectAuth = (state: RootState) => state.auth

export const { activatePreviewMode } = authSlice.actions
