import { Pagination } from "@/components"
import { useGetUsersQuery } from "@/modules/UsersTable"
import { useAppDispatch, useAppSelector } from "@/shared"

import { setCurrentPage } from "../../store/currentPageSlice"


export const PaginationPanel = () => {
    const { data, isLoading, error } = useGetUsersQuery({})
    const limit = useAppSelector(state => state.currentPage.limit)
    const dispatch = useAppDispatch()

    const onPageChange = (page: number) => {
        dispatch(setCurrentPage(page))
    }


    return (
        <div>
            {data?.totalCount &&
                <Pagination totalItems={data?.totalCount} itemsPerPage={limit} onPageChange={onPageChange} />
            }
        </div>
    )
}
