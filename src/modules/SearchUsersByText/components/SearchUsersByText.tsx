import { Search } from "@/components"
import { setSelectedUser } from "@/modules/SelectedTableRow";

import { useAppDispatch, useAppSelector } from "@/shared";
import { useEffect, useRef } from "react"
import { setFilterBy } from "../store/filterUsersSlice";


export const SearchUsersByText = () => {
    const filterBy = useAppSelector(state => state.filtereUsers.filterBy)

    const ref = useRef<HTMLInputElement | null>(null)
    const dispatch = useAppDispatch()

    useEffect(() => {
        if (ref.current) {
            ref.current.value = filterBy
        }


    }, [filterBy])
    const handleSearch = (e: React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault()
        const filterBy = ref.current ? ref.current.value : ''
        dispatch(setSelectedUser(null))
        dispatch(setFilterBy((filterBy)))
    }

    return (
        <Search ref={ref} handleClickSearchButton={handleSearch} placeholder="Введите текст для фильтрации" />
    )
}
