import { Search } from "@/components"
import { User } from "@/modules/UsersTable";
import { useRef } from "react"


export const SearchUsersByText = () => {


    const ref = useRef<HTMLInputElement | null>(null)

    function filterUsersByText(users: User[], subtitle: string) {

        if (subtitle.trim() !== '') {
            return users.filter(user => {
                // Производим фильтрацию по подстроке в имени, фамилии, email или телефоне
                const searchString = Object.values(user).join(' ');
                return searchString.toLowerCase().includes(subtitle.toLowerCase());
            });

        }
        return users

    }

    const handleSearch = (e: React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault()
        const filterBy = ref.current ? ref.current.value : ''
        filterUsersByText(users, filterBy)
    }



    return (
        <Search ref={ref} handleClickSearchButton={handleSearch} placeholder="Введите текст для фильтрации" />
    )
}
