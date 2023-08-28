import {
  Middleware,
  ThunkDispatch,
  isRejectedWithValue,
} from '@reduxjs/toolkit'
import { RootState } from '../store'
import { asyncRejectWithValuePayload } from '../typings'
import { logoutUser } from '../../features/auth/authSlice'

function isAsyncRejectedWithValue(
  action: any
): action is { payload: asyncRejectWithValuePayload } {
  return (
    isRejectedWithValue()(action) &&
    !!action.payload &&
    !!(action.payload as asyncRejectWithValuePayload).status &&
    !!(action.payload as asyncRejectWithValuePayload).body
  )
}

const asyncErrorHandling: Middleware<
  {},
  RootState,
  ThunkDispatch<RootState, any, any>
> = (store) => (next) => (action) => {
  if (isAsyncRejectedWithValue(action)) {
    const payload = action.payload
    if (payload.status === 401) {
      store.dispatch(logoutUser())
    } else {
      alert(payload.preErrorText ?? 'Error occured: ' + payload.body.data)
    }
  }
  next(action)
}

export default asyncErrorHandling
