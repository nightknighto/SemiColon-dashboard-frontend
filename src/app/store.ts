import { AsyncThunk, AsyncThunkPayloadCreator, Dispatch, configureStore } from '@reduxjs/toolkit';
import participantsReducer from "../features/participants/participantSlice";
import userReducer from "../features/users/usersSlice";
import authReducer from "../features/auth/authSlice";

declare module "@reduxjs/toolkit" {
    type AsyncThunkConfig = {
      state?: unknown;
      dispatch?: Dispatch;
      extra?: unknown;
      rejectValue?: unknown;
      serializedErrorType?: unknown;
    };
  
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
    ): AsyncThunk<Returned, ThunkArg, ThunkApiConfig>;
  }

  
const store = configureStore({
    reducer: {
        participants: participantsReducer,
        users: userReducer,
        auth: authReducer,
    }
})

export default store;

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch