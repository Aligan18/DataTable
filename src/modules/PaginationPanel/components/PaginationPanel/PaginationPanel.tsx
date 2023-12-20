import { Pagination } from "@/components"
import { useGetUsersQuery } from "@/modules/UsersTable"
import { useAppDispatch, useAppSelector } from "@/shared"
import classes from './PaginationPanel.module.scss'
import { setCurrentPage } from "../../store/currentPageSlice"


export const PaginationPanel = () => {
    const { limit, currentPage } = useAppSelector(state => state.currentPage)
    const { data } = useGetUsersQuery({ limit: limit, page: currentPage })
    console.log(data)
    const dispatch = useAppDispatch()

    const onPageChange = (page: number) => {
        dispatch(setCurrentPage(page))
    }


    return (<>

        <div className={classes.panel}>
            {data?.totalCount &&
                <Pagination totalItems={data?.totalCount} itemsPerPage={limit} onPageChange={onPageChange} currentPage={currentPage} />
            }
        </div>

    </>

    )
}
