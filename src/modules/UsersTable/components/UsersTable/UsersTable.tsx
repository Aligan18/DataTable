import { Table } from '@/components'
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

export const UsersTable = () => {
    const { data: users, isLoading, error } = useGetUsersQuery()

    const { filteredUsers } = useFilterUsersBySearchValue(users)
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
        {users ?
            <Table data={filteredAndSortedUsers} titles={titles} onHeadСellClick={handleSelectSortBy} />
            :
            <h1>Пользователи не найдены</h1>
        }
    </>

    )
}

