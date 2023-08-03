import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { Participant } from "./types/Participant";
import axios, { AxiosError } from "axios";
import { RootState } from "../../app/store";
import { StatusEnum } from "./types/Participant";
import { InterviewCriteriaObject, InterviewObject } from "./types/InterviewNotes";
import { createAppAsyncThunk } from "../../app/hooks";
import { logoutUser, selectAuthHeader } from "../auth/authSlice";


interface ParticipantState {
    items: Participant[],
    selectedId?: string,
    loading: boolean,
    error?: string
}

const initialState: ParticipantState = {
    items: [],
    loading: false,
}

export const fetchParticipants = createAppAsyncThunk("participants/fetchParticipants", async (_, { getState, dispatch }) => {
    try {
        const headers = selectAuthHeader(getState())
        const res = await axios.get(
            'https://semicolon-registration-backend.onrender.com/participants/getAll',
            { headers }
        )
        const participants = res.data
        return participants.data
      } catch (_err) {
        const err = _err as AxiosError<{ data: string }>
        console.log(err.response)
        if (err.response?.status === 401) {
            dispatch(logoutUser())
        } else {
            alert(err.response?.data?.data ?? err.message)
        }
        if(err.response?.data?.data) err.message = err.response?.data?.data
        throw err
      }
})

export const updateParticipantStatus = createAppAsyncThunk("participants/updateParticipantStatus", async ({ status, id }: { status: StatusEnum, id: string }, { getState }) => {
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
    } catch (err) {
        alert(`Error occured while updating status: ${err}`)
        throw err
    }
})

export const saveParticipantInterviewNotes = createAppAsyncThunk("participants/saveParticipantInterviewNotes", async ({ interviewData, id }: { interviewData: InterviewCriteriaObject, id: string }, { getState }) => {
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
      } catch (err: any) {
        alert(`Error occured: ${err.response.data.data}`)
        throw err
      }
})

const participantSlice = createSlice({
    name: "participants",
    initialState,
    reducers: {
        participantSelected(state, action: PayloadAction<string>) {
            state.selectedId = action.payload
        }
    },
    extraReducers: (builder) => {
        builder
        .addCase(fetchParticipants.pending, (state) => {
            state.loading = true
            state.error = undefined
        })
        .addCase(fetchParticipants.fulfilled, (state, action: PayloadAction<Participant[]>) => {
            state.items = action.payload
            state.loading = false
        })
        .addCase(fetchParticipants.rejected, (state, action) => {
            state.error = action.error.message ?? undefined
            state.loading = false
        })
        .addCase(updateParticipantStatus.fulfilled, (state, { meta }) => {
            const item = state.items.find(p => p._id === meta.arg.id)
            if(item) item.acceptanceStatus = meta.arg.status
        })
        .addCase(saveParticipantInterviewNotes.fulfilled, (state, { meta, payload }) => {
            const item = state.items.find(p => p._id === meta.arg.id)
            if(item) item.InterviewerNote = payload
        })
    }
})

export default participantSlice.reducer

export const { participantSelected } = participantSlice.actions

export const selectAllParticipants = (state: RootState) => state.participants.items

export const selectParticipantById = (state: RootState, id: string) => state.participants.items.find(p => p._id === id)

export const selectChosenParticipantId = (state: RootState) => state.participants.selectedId
export const selectChosenParticipant = (state: RootState) => state.participants.items.find(p => p._id === state.participants.selectedId)