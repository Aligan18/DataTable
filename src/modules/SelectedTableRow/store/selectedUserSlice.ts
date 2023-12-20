

import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import { User } from '@/modules/UsersTable'




const initialState: Record<'selectedUser', User | null> = {
    selectedUser: null
}

export const selectedUserSlice = createSlice({
    name: 'selectedUser',
    initialState,
    reducers: {
        setSelectedUser: (state, action: PayloadAction<User | null>) => {
            state.selectedUser = action.payload
        },
    },
})

// Action creators are generated for each case reducer function
export const { setSelectedUser } = selectedUserSlice.actions

export const selectedUserReducer = selectedUserSlice.reducer