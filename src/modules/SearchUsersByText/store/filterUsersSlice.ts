

import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'




const initialState: Record<'filterBy', string> = {
    filterBy: ''
}

export const filterUsersSlice = createSlice({
    name: 'filterUsers',
    initialState,
    reducers: {
        setFilterBy: (state, action: PayloadAction<string>) => {
            state.filterBy = action.payload
        },
        clearFilter: (state) => {
            state.filterBy = ''
        }
    },
})

// Action creators are generated for each case reducer function
export const { setFilterBy, clearFilter } = filterUsersSlice.actions

export const filterUsersReducer = filterUsersSlice.reducer