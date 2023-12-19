import { useState } from "react"
import { User } from "../types/User"



export function useSortUsers(data: User[]) {
    const [sortBy, setSortBy] = useState<keyof User | 'none'>("none")
    const [sortAscending, setSortAscending] = useState<boolean>(true)
    function sortUsers(users: User[], sortBy: keyof User | 'none', ascend: boolean) {
        if (sortBy !== 'none') {
            if (typeof users[0][sortBy] === 'string') {
                return users.sort((a, b) => {
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
            else if (typeof users[0][sortBy] === 'number') {
                return users.sort((a, b) => {
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


    return {
        sortBy,
        setSortBy,
        setSortAscending,
        sortAscending,
        sortedUsers: sortUsers(data, sortBy, sortAscending)
    }

}