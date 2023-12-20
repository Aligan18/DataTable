import { combineReducers, configureStore } from '@reduxjs/toolkit'
import { filterUsersReducer } from '@/modules/SearchUsersByText'
import { currentPageReducer } from '@/modules/PaginationPanel'
import { userApi } from '@/modules/UsersTable'
import { selectedUserReducer } from '@/modules/SelectedTableRow'
import storage from 'redux-persist/lib/storage';
import {

    persistReducer,
    FLUSH,
    REHYDRATE,
    PAUSE,
    PERSIST,
    PURGE,
    REGISTER,
} from 'redux-persist'


const rootReducer = combineReducers({
    selectedUser: selectedUserReducer,
    currentPage: currentPageReducer,
    filtereUsers: filterUsersReducer,
    [userApi.reducerPath]: userApi.reducer,

})

const persistConfig = {
    key: 'root',
    storage,
    whitelist: ['currentPage'],
}

const persistedReducer = persistReducer(persistConfig, rootReducer)

export const store = configureStore({
    reducer: persistedReducer,
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
            serializableCheck: {
                ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER]
            }
        }).concat(userApi.middleware),
})


export type RootState = ReturnType<typeof store.getState>

export type AppDispatch = typeof store.dispatch