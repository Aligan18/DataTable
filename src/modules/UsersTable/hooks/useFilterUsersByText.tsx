import { useAppSelector } from "@/shared";
import { User } from "../types/User";




export const useFilterUsersByText = (users?: User[]) => {
    const filterBy = useAppSelector(state => state.filtereUsers.filterBy)

    function filterUsersByText(subtitle: string, users?: User[],) {
        if (subtitle.trim() !== '' && users !== undefined) {
            return users.filter(user => {
                // Производим фильтрацию по подстроке в имени, фамилии, email , телефоне и id
                const searchString = Object.values(user).join(' ');
                return searchString.toLowerCase().includes(subtitle.toLowerCase());
            });
        }
        return users
    }


    const filteredUsers = filterUsersByText(filterBy, users,)

    return { filteredUsers }
}