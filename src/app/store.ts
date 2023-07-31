import { configureStore } from '@reduxjs/toolkit';
import participantsReducer from "../features/participants/participantSlice";

const store = configureStore({
    reducer: {
        participants: participantsReducer
    }
})

export default store;

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch