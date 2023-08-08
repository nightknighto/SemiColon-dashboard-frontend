import { PayloadAction, createEntityAdapter, createSlice } from "@reduxjs/toolkit";
import { User } from "./types/User";
import { RootState } from "../../app/store";
import axios from "axios";
import { createAppAsyncThunk } from "../../app/hooks";
import { selectAuthHeader } from "../auth/authSlice";

export type AdminPageMode = "view" | "edit" | "add" 

const usersAdapater = createEntityAdapter<User>({
    selectId: (user) => user._id,
})

const initialState = usersAdapater.getInitialState<{
    loading: boolean,
    selectedId?: string,
    error?: string,
    pageMode: AdminPageMode,
    usersFetched: boolean
}>({
    loading: false,
    pageMode: "view",
    usersFetched: false
})

export const fetchUsers = createAppAsyncThunk("users/fetchUsers", async (_, { getState }) => {
    const headers = selectAuthHeader(getState())
    const res = await axios.get("https://semicolon-registration-backend.onrender.com/user/getAll", {headers})
    return res.data.data
})

export const createUser = createAppAsyncThunk("users/createUser", async (newUser: Omit<User, '_id'>, { getState }) => {
    const headers = selectAuthHeader(getState())
    const res = await axios.post(
        'https://semicolon-registration-backend.onrender.com/user/',
        {
            ...newUser
        },
        {
            headers,
        }
    )
    const result = res.data.data;
    return result;
})

export const updateUser = createAppAsyncThunk("users/updateUser", async (updatedUser: User, { getState }) => {
    const headers = selectAuthHeader(getState())
    const res = await axios.patch(
        'https://semicolon-registration-backend.onrender.com/user/update/'+updatedUser._id,
        {
            ...updatedUser
        },
        {
            headers,
        }
    )
    return res.data.data;
})

const usersSlice = createSlice({
    name: "users",
    initialState,
    reducers: {
        userSelected(state, action: PayloadAction<string>) {
            state.selectedId = action.payload
            state.pageMode = "view"
        },
        pageModeChanged(state, action: PayloadAction<AdminPageMode>) {
            state.pageMode = action.payload
        }
    },
    extraReducers(builder) {
        builder
        .addCase(fetchUsers.pending, (state) => {
            state.loading = true
            state.error = undefined
        })
        .addCase(fetchUsers.fulfilled, (state, action) => {
            usersAdapater.setAll(state, action.payload)
            state.loading = false
            state.usersFetched = true
        })
        .addCase(fetchUsers.rejected, (state, action) => {
            state.loading = false
            state.error = action.error.message
        })
        .addCase(createUser.fulfilled, (state, action: PayloadAction<User>) => {
            usersAdapater.addOne(state, action.payload)
            state.selectedId = action.payload._id
            state.pageMode = "view"
        })
        .addCase(updateUser.fulfilled, (state, action) => {
            const updatedUser = action.meta.arg
            usersAdapater.updateOne(state, {
                id: updatedUser._id,
                changes: updatedUser
            })
            state.selectedId = updatedUser._id
            state.pageMode = "view"
        })
    },
})

export const { userSelected, pageModeChanged } = usersSlice.actions

export default usersSlice.reducer

export const selectSelectedUser = (state: RootState) => state.users.entities[state.users.selectedId ?? ""]
export const selectReadyToFetchUsersBool = (state: RootState) => !state.users.usersFetched && !state.users.loading

export const { selectAll: selectAllUsers, selectById: selectUserById } = usersAdapater.getSelectors<RootState>(state => state.users)