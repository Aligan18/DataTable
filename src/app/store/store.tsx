import { configureStore } from '@reduxjs/toolkit'
import { filterUsersReducer } from '@/modules/SearchUsersByText'
import { userApi } from '@/modules/UsersTable'

export const store = configureStore({
    reducer:

    {
        filtereUsers: filterUsersReducer,
        [userApi.reducerPath]: userApi.reducer
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(userApi.middleware),
})


export type RootState = ReturnType<typeof store.getState>

export type AppDispatch = typeof store.dispatch