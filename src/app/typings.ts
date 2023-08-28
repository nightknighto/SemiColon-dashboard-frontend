import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux'
import { AppDispatch, RootState } from './store'
import { ThunkAction, createAsyncThunk } from '@reduxjs/toolkit'

export const useAppDispatch: () => AppDispatch = useDispatch
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector
export const createAppAsyncThunk = createAsyncThunk.withTypes<{
  state: RootState
  dispatch: AppDispatch
  rejectValue: asyncRejectWithValuePayload
}>()

export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  any
>

export type responseBody = {
  data: string
  status: string
}

export type asyncRejectWithValuePayload = {
  status: number
  body: responseBody
  /** Text that will be displayed in the alert message before the actual error. Ex: "Error occured while updating user: "*/
  preErrorText?: string
}
