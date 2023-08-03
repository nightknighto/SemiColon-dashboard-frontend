import { PayloadAction, createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { User } from "./types/User";
import { authHeader } from "../../common/helpers/auth";
import { RootState } from "../../app/store";
import axios from "axios";

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

export const fetchUsers = createAsyncThunk("users/fetchUsers", async () => {
    const hdrs = authHeader()!
    const res = await fetch("https://semicolon-registration-backend.onrender.com/user/getAll", {headers: hdrs})
    const body = await res.json()
    return body.data
})

export const createUser = createAsyncThunk("users/createUser", async (newUser: Omit<User, '_id'>) => {
    const headers = authHeader()!
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

export const updateUser = createAsyncThunk("users/updateUser", async (updatedUser: User) => {
    const headers = authHeader()!
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