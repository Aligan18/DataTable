import { Table } from '@/components'
import { useAppSelector } from '@/shared'
import { FC, useState } from 'react'
import { useGetUsersQuery } from '../../api/fetchUsers'
import { useFilterUsersBySearchValue } from '../../hooks/useFilterUsersBySearchValue'
import { useSortUsers } from '../../hooks/useSortUsers'
import { TableHeadTitles, User } from '../../types/User'


const titles: TableHeadTitles = {
    "_id": 'ID',
    "firstName": "Имя",
    "lastName": "Фамилия",
    "email": "Email",
    "phone": "Телефон"
}

export const UsersTable: FC = () => {
    const { currentPage, limit } = useAppSelector(state => state.currentPage)
    const { data, isLoading, error } = useGetUsersQuery({ page: currentPage, limit: limit })

    const { filteredUsers } = useFilterUsersBySearchValue(data?.users)
    const { setSortAscending,
        setSortBy,
        sortedUsers: filteredAndSortedUsers
    } = useSortUsers(filteredUsers)

    const handleSelectSortBy = (e: React.MouseEvent<HTMLTableCellElement>, tableHeadKey: keyof User) => {
        e.preventDefault()
        setSortBy(tableHeadKey)
        setSortAscending(prev => !prev)
    }

    return (<>
        {filteredAndSortedUsers ?
            < Table data={filteredAndSortedUsers} titles={titles} onHeadСellClick={handleSelectSortBy} />
            :
            <h1>Пользователи не найдены</h1>
        }
    </>

    )
}

