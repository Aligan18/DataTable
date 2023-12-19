import { configureStore } from '@reduxjs/toolkit'
import { filterUsersReducer } from '@/modules/SearchUsersByText'
import { currentPageReducer } from '@/modules/PaginationPanel'
import { userApi } from '@/modules/UsersTable'
import { selectedUserReducer } from '@/modules/SelectedTableRow'

export const store = configureStore({
    reducer:

    {
        selectedUser: selectedUserReducer,
        currentPage: currentPageReducer,
        filtereUsers: filterUsersReducer,
        [userApi.reducerPath]: userApi.reducer
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(userApi.middleware),
})


export type RootState = ReturnType<typeof store.getState>

export type AppDispatch = typeof store.dispatch