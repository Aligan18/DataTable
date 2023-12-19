import { titles, User } from '@/modules/UsersTable'
import { useAppSelector } from '@/shared'
import React from 'react'

export const SelectedTableRow = () => {
    const user = useAppSelector(state => state.selectedUser.selectedUser)
    const keys = Object.keys(titles) as (keyof User)[]

    return (
        <>
            {user && <div>
                {keys.map((key) =>

                    <p>{`${titles[key]} : ${user[key]}`}</p>
                )}



            </div>}
        </>

    )
}
