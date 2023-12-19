import { Table } from '@/components'
import { useAppSelector } from '@/shared'
import { useGetUsersQuery } from '../../api/fetchUsers'
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
    const filterBy = useAppSelector(state => state.filtereUsers.filterBy)

    function filterUsersByText(subtitle: string, users?: User[],) {
        if (subtitle.trim() !== '' && users !== undefined) {
            return users.filter(user => {
                // Производим фильтрацию по подстроке в имени, фамилии, email или телефоне
                const searchString = Object.values(user).join(' ');
                return searchString.toLowerCase().includes(subtitle.toLowerCase());
            });
        }
        return users
    }


    const filteredUsers = filterUsersByText(filterBy, users,)




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

