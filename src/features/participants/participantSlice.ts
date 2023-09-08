import {
  PayloadAction,
  createEntityAdapter,
  createSlice,
} from '@reduxjs/toolkit'
import { Participant } from './types/Participant'
import axios, { AxiosResponse } from 'axios'
import { RootState } from '../../app/store'
import { StatusEnum } from './types/Participant'
import {
  InterviewCriteriaObject,
  InterviewObject,
} from './types/InterviewNotes'
import { createAppAsyncThunk, responseBody } from '../../app/typings'
import { selectAuthHeader } from '../auth/authSlice'
import dummyParticipants from '../previewMode/dummy-participants-data'
import delay from '../../libs/delay'

const participantAdapater = createEntityAdapter<Participant>({
  selectId: (participant) => participant._id,
})

const initialState = participantAdapater.getInitialState<{
  loading: boolean
  selectedId?: string
  error?: string
}>({
  loading: false,
})

export const fetchParticipants = createAppAsyncThunk(
  'participants/fetchParticipants',
  async (_, { getState, rejectWithValue }) => {
    if (getState().auth.previewMode) {
      await delay(2000)
      return dummyParticipants
    }

    try {
      const headers = selectAuthHeader(getState())
      const res = await axios.get(
        'https://semicolon-registration-backend.onrender.com/participants/getAll',
        { headers }
      )
      const participants = res.data
      return participants.data
    } catch (_err: any) {
      const err = _err.response as AxiosResponse<responseBody>
      return rejectWithValue({
        status: err.status,
        body: err.data,
      })
    }
  }
)

export const updateParticipantStatus = createAppAsyncThunk(
  'participants/updateParticipantStatus',
  async (
    { status, id }: { status: StatusEnum; id: string },
    { getState, rejectWithValue }
  ) => {
    if (getState().auth.previewMode) {
      return
    }

    try {
      const headers = selectAuthHeader(getState())
      await axios.patch(
        'https://semicolon-registration-backend.onrender.com/participants/status',
        {
          _id: id,
          status,
        },
        {
          headers,
        }
      )
    } catch (_err: any) {
      const err = _err.response as AxiosResponse<responseBody>
      return rejectWithValue({
        status: err.status,
        body: err.data,
        preErrorText: 'Error occured while updating status: ',
      })
    }
  }
)

export const saveParticipantInterviewNotes = createAppAsyncThunk(
  'participants/saveParticipantInterviewNotes',
  async (
    {
      interviewData,
      id,
    }: { interviewData: InterviewCriteriaObject; id: string },
    { getState, rejectWithValue }
  ) => {
    if (getState().auth.previewMode) {
      alert('Interview notes not supported in demo mode')
      throw new Error('Interview notes not supported in demo mode')
    }

    try {
      const headers = selectAuthHeader(getState())
      const req = await axios.patch(
        'https://semicolon-registration-backend.onrender.com/participants/interview/note',
        {
          _id: id,
          note: interviewData,
        },
        {
          headers,
        }
      )
      alert('Interview notes saved successfully!')
      return req.data.data.InterviewerNote as InterviewObject
    } catch (_err: any) {
      const err = _err.response as AxiosResponse<responseBody>
      return rejectWithValue({
        status: err.status,
        body: err.data,
        preErrorText: 'Error occured while saving notes: ',
      })
    }
  }
)

const participantSlice = createSlice({
  name: 'participants',
  initialState,
  reducers: {
    participantSelected(state, action: PayloadAction<string>) {
      state.selectedId = action.payload
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchParticipants.pending, (state) => {
        state.loading = true
        state.error = undefined
      })
      .addCase(
        fetchParticipants.fulfilled,
        (state, action: PayloadAction<Participant[]>) => {
          participantAdapater.setAll(state, action.payload)
          state.loading = false
        }
      )
      .addCase(fetchParticipants.rejected, (state, action) => {
        state.error = action.error.message ?? undefined
        state.loading = false
      })
      .addCase(updateParticipantStatus.fulfilled, (state, { meta }) => {
        const item = state.entities[meta.arg.id]
        if (item) item.acceptanceStatus = meta.arg.status
      })
      .addCase(
        saveParticipantInterviewNotes.fulfilled,
        (state, { meta, payload }) => {
          const item = state.entities[meta.arg.id]
          if (item) item.InterviewerNote = payload
        }
      )
  },
})

export default participantSlice.reducer

export const { participantSelected } = participantSlice.actions

export const selectChosenParticipantId = (state: RootState) =>
  state.participants.selectedId
export const selectChosenParticipant = (state: RootState) =>
  state.participants.entities[state.participants.selectedId ?? '']

export const {
  selectAll: selectAllParticipants,
  selectById: selectParticipantById,
} = participantAdapater.getSelectors<RootState>((state) => state.participants)
