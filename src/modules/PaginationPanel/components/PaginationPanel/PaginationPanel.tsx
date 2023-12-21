import { Pagination } from "@/components"
import { useGetUsersQuery } from "@/modules/UsersTable"
import { useAppDispatch, useAppSelector } from "@/shared"
import classes from './PaginationPanel.module.scss'
import { setCurrentPage } from "../../store/currentPageSlice"
import { setSelectedUser } from "@/modules/SelectedTableRow"


export const PaginationPanel = () => {
    const filterBy = useAppSelector(state => state.filtereUsers.filterBy)
    const { limit, currentPage } = useAppSelector(state => state.currentPage)
    const { data } = useGetUsersQuery({ limit: limit, page: currentPage })

    const dispatch = useAppDispatch()

    const onPageChange = (page: number) => {
        dispatch(setCurrentPage(page))
    }
    const handleButtonClick = () => {
        dispatch(setSelectedUser(null))
    }


    return (<>

        <div className={classes.panel}>
            {data?.totalCount && !filterBy &&
                <Pagination totalItems={data?.totalCount}
                    itemsPerPage={limit}
                    onPageChange={onPageChange}
                    onButtonClick={handleButtonClick}
                    currentPage={currentPage} />
            }
        </div>

    </>

    )
}
