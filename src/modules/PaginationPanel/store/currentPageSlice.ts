

import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'


interface initialState {
    currentPage: number
    limit: number
}

const initialState: initialState = {
    currentPage: 1,
    limit: 50
}

export const currentPageSlice = createSlice({
    name: 'currentPage',
    initialState,
    reducers: {
        setCurrentPage: (state, action: PayloadAction<number>) => {
            state.currentPage = action.payload
        },

    },
})

// Action creators are generated for each case reducer function
export const { setCurrentPage } = currentPageSlice.actions

export const currentPageReducer = currentPageSlice.reducer