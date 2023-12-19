import { configureStore } from '@reduxjs/toolkit'
import { filteredUsersReducer } from '@/modules/SearchUsersByText'

export const store = configureStore({
    reducer: { filteredUsers: filteredUsersReducer },
})


export type RootState = ReturnType<typeof store.getState>

export type AppDispatch = typeof store.dispatch