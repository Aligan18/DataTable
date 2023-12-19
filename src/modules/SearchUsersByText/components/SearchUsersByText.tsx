import { Search } from "@/components"

import { useAppDispatch } from "@/shared";
import { useRef } from "react"
import { setFilterBy } from "../store/filterUsersSlice";


export const SearchUsersByText = () => {

    const ref = useRef<HTMLInputElement | null>(null)
    const dispatch = useAppDispatch()

    const handleSearch = (e: React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault()
        const filterBy = ref.current ? ref.current.value : ''
        dispatch(setFilterBy((filterBy)))
    }

    return (
        <Search ref={ref} handleClickSearchButton={handleSearch} placeholder="Введите текст для фильтрации" />
    )
}
