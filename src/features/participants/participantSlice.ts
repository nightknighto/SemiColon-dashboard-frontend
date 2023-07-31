import { createSlice } from "@reduxjs/toolkit";
import { Participant } from "./types/Participant";


interface ParticipantState {
    participants: Participant[]
}

const initialState: ParticipantState = {
    participants: []
}

const participantSlice = createSlice({
    name: "participants",
    initialState,
    reducers: {
        
    }
})

export default participantSlice.reducer