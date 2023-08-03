import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { User } from "./types/User";
import { RootState } from "../../app/store";
import axios from "axios";
import { createAppAsyncThunk } from "../../app/hooks";
import { selectAuthHeader } from "../auth/authSlice";

export type AdminPageMode = "view" | "edit" | "add" 

interface UserState {
    items: User[],
    selectedId?: string,
    loading: boolean,
    error?: string,
    pageMode: AdminPageMode
}

const initialState: UserState = {
    items: [],
    loading: false,
    pageMode: "view"
}

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
            state.items = action.payload
            state.loading = false
        })
        .addCase(fetchUsers.rejected, (state, action) => {
            state.loading = false
            state.error = action.error.message
        })
        .addCase(createUser.fulfilled, (state, action: PayloadAction<User>) => {
            state.items = [...state.items, action.payload]
            state.selectedId = action.payload._id
            state.pageMode = "view"
        })
        .addCase(updateUser.fulfilled, (state, action) => {
            const updatedUser = action.meta.arg
            const index = state.items.findIndex(user => user._id === updatedUser._id)
            state.items[index] = updatedUser
            state.selectedId = updatedUser._id
            state.pageMode = "view"
        })
    },
})

export const { userSelected, pageModeChanged } = usersSlice.actions

export default usersSlice.reducer

export const selectAllUsers = (state: RootState) => state.users.items
export const selectUserById = (state: RootState, id: string) => state.users.items.find(user => user._id === id)
export const selectSelectedUser = (state: RootState) => state.users.items.find(user => user._id === state.users.selectedId)