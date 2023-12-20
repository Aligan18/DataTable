import { useState } from "react"
import { User } from "../types/User"


interface useSortUsersReturns {
    sortBy: keyof User | 'none'
    setSortBy: React.Dispatch<React.SetStateAction<keyof User | 'none'>>
    setSortAscending: React.Dispatch<React.SetStateAction<boolean>>
    sortAscending: boolean
    sortedUsers: User[] | []
}

export function useSortUsers(data?: User[]): useSortUsersReturns {
    const [sortBy, setSortBy] = useState<keyof User | 'none'>("none")
    const [sortAscending, setSortAscending] = useState<boolean>(false)
    const sortUsers = (users: User[], sortBy: keyof User | 'none', ascend: boolean) => {
        const cloneUsers = [...users]
        if (sortBy !== 'none' && cloneUsers) {
            if (typeof cloneUsers[0][sortBy] === 'string') {

                return cloneUsers.sort((a, b) => {
                    const first = a[sortBy] as string
                    const second = b[sortBy] as string
                    if (ascend) {
                        return first.toLowerCase() < second.toLowerCase() ? -1 : 1
                    }
                    else {
                        return first.toLowerCase() > second.toLowerCase() ? -1 : 1
                    }
                })
            }
            else if (typeof cloneUsers[0][sortBy] === 'number') {
                return cloneUsers.sort((a, b) => {
                    const first = a[sortBy] as number
                    const second = b[sortBy] as number
                    if (ascend) {
                        return first - second
                    }
                    else {
                        return second - first
                    }
                })
            }

        }
        return users

    }
    let sortedUsers: User[] | [] = []

    if (data && data.length !== 0) {
        sortedUsers = sortUsers(data, sortBy, sortAscending)
    }

    return {
        sortBy,
        setSortBy,
        setSortAscending,
        sortAscending,
        sortedUsers
    }

}