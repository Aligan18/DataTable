import { Table } from '@/components'
import { setSelectedUser } from '@/modules/SelectedTableRow'
import { ErrorText, Loader, useAppDispatch, useAppSelector } from '@/shared'
import { FC, useEffect, useRef, useState } from 'react'
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
    const isFirstTime = useRef(true)
    const { currentPage, limit } = useAppSelector(state => state.currentPage)
    const selectedUser = useAppSelector(state => state.selectedUser.selectedUser)
    const { data, isLoading, error } = useGetUsersQuery({ page: currentPage, limit: limit })
    const dispatch = useAppDispatch()
    const { filteredUsers } = useFilterUsersBySearchValue(data?.users)

    useEffect(() => {
        if (!isLoading) {
            isFirstTime.current = false
        }
    }, [])

    const { setSortAscending,
        sortAscending,
        sortBy,
        setSortBy,
        sortedUsers: filteredAndSortedUsers
    } = useSortUsers(filteredUsers)

    const handleSelectSortBy = (e: React.MouseEvent<HTMLTableCellElement>, tableHeadKey: keyof User) => {
        e.preventDefault()
        setSortBy(tableHeadKey)
        setSortAscending(prev => !prev)
    }
    console.log(isLoading)
    const onRowClick = (e: React.MouseEvent<HTMLTableRowElement>, currentRow: User) => {
        e.preventDefault()
        dispatch(setSelectedUser(currentRow))
    }
    console.log(error)

    return (<>
        {isLoading ?
            <>
                {isFirstTime.current && <h2>Первое подключение к серверу может занять некоторое время.</h2>}
                <Loader />
            </>
            :
            <>{
                !error ?
                    <>
                        {filteredAndSortedUsers.length ?
                            <Table
                                sortAscending={sortAscending}
                                sortBy={sortBy}
                                activeId={selectedUser?._id}
                                data={filteredAndSortedUsers}
                                titles={titles}
                                onHeadСellClick={handleSelectSortBy}
                                onRowClick={onRowClick} />
                            :
                            <h2>Пользователи не найдены</h2>

                        }
                    </>
                    :
                    <>
                        {(error && 'error' in error) && <ErrorText>{error.error}</ErrorText>}
                    </>
            }</>
        }

    </>

    )
}

