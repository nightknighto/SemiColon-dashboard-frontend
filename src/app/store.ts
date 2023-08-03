import { configureStore } from '@reduxjs/toolkit';
import participantsReducer from "../features/participants/participantSlice";
import userReducer from "../features/users/usersSlice";

const store = configureStore({
    reducer: {
        participants: participantsReducer,
        users: userReducer
    }
})

export default store;

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch