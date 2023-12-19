

import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import { User } from '@/modules/UsersTable'



const initialState: Record<'filteredUsers', User[] | null> = {
    filteredUsers: null
}

export const filteredUsersSlice = createSlice({
    name: 'filteredUsers',
    initialState,
    reducers: {
        setFilteredUsers: (state, action: PayloadAction<User[]>) => {
            state.filteredUsers = action.payload
        }
    },
})

// Action creators are generated for each case reducer function
export const { setFilteredUsers } = filteredUsersSlice.actions

export const filteredUsersReducer = filteredUsersSlice.reducer