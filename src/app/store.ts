import {
  AsyncThunk,
  AsyncThunkPayloadCreator,
  Dispatch,
  combineReducers,
  configureStore,
} from '@reduxjs/toolkit'
import participantsReducer from '../features/participants/participantSlice'
import userReducer from '../features/users/usersSlice'
import authReducer from '../features/auth/authSlice'
import asyncErrorHandling from './middlewares/async-error-handling'

declare module '@reduxjs/toolkit' {
  type AsyncThunkConfig = {
    state?: unknown
    dispatch?: Dispatch
    extra?: unknown
    rejectValue?: unknown
    serializedErrorType?: unknown
  }

  function createAsyncThunk<
    Returned,
    ThunkArg = void,
    ThunkApiConfig extends AsyncThunkConfig = { state: RootState }
  >(
    typePrefix: string,
    payloadCreator: AsyncThunkPayloadCreator<
      Returned,
      ThunkArg,
      ThunkApiConfig
    >,
    options?: any
  ): AsyncThunk<Returned, ThunkArg, ThunkApiConfig>
}

// reason for not putting it directly inside configureStore:
// avoid type circular dependency when using a custom middleware
const rootReducer = combineReducers({
  participants: participantsReducer,
  users: userReducer,
  auth: authReducer,
})

const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(asyncErrorHandling),
})

export default store

export type RootState = ReturnType<typeof rootReducer>
export type AppDispatch = typeof store.dispatch
