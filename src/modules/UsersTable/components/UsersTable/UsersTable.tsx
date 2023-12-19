import { Table } from '@/components'
import { setSelectedUser } from '@/modules/SelectedTableRow'
import { useAppDispatch, useAppSelector } from '@/shared'
import { FC } from 'react'
import { useGetUsersQuery } from '../../api/fetchUsers'
import { useFilterUsersBySearchValue } from '../../hooks/useFilterUsersBySearchValue'
import { useSortUsers } from '../../hooks/useSortUsers'
import { TableHeadTitles, User } from '../../types/User'


export const titles: TableHeadTitles = {
    "_id": 'ID',
    "firstName": "Имя",
    "lastName": "Фамилия",
    "email": "Email",
    "phone": "Телефон"
}

export const UsersTable: FC = () => {
    const { currentPage, limit } = useAppSelector(state => state.currentPage)
    const { data, isLoading, error } = useGetUsersQuery({ page: currentPage, limit: limit })
    const dispatch = useAppDispatch()
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

    const onRowClick = (e: React.MouseEvent<HTMLTableRowElement>, currentRow: User) => {
        e.preventDefault()
        dispatch(setSelectedUser(currentRow))
    }

    return (<>
        {filteredAndSortedUsers ?
            < Table data={filteredAndSortedUsers}
                titles={titles}
                onHeadСellClick={handleSelectSortBy}
                onRowClick={onRowClick}
            />
            :
            <h1>Пользователи не найдены</h1>
        }
    </>

    )
}

