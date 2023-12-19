
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { User } from '../types/User'


export const userApi = createApi({
    reducerPath: 'userApi',
    baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:3000' }),
    endpoints: (builder) => ({
        getUsers: builder.query<User[], void>({
            query: () => `/users`,
        }),
    }),
})

export const { useGetUsersQuery } = userApi
