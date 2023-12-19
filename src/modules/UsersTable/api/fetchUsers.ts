
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { User } from '../types/User'

interface getUsersProps {
    page?: number
    limit?: number
}
interface getUsersReaponse {
    users: User[]
    totalCount: number
}

export const userApi = createApi({
    reducerPath: 'userApi',
    baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:3000' }),
    endpoints: (builder) => ({
        getUsers: builder.query<getUsersReaponse, getUsersProps>({
            query: ({ page = 1, limit = 50 }) => (
                {
                    url: `/users?_limit=${limit}&_page=${page}`,
                    headers: {
                        "Content-Type": "application/json",
                        'Access-Control-Allow-Origin': '*'
                    },

                }),
            transformResponse(apiResponse: User[], meta) {
                return ({ users: apiResponse, totalCount: Number(meta?.response?.headers.get('X-Total-Count')) })
            }

        }),
    }),
})

export const { useGetUsersQuery } = userApi
