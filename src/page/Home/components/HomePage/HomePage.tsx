

import { FilteredByTag } from '@/modules/FilteredByTag'
import { PaginationPanel } from '@/modules/PaginationPanel'
import { SearchUsersByText } from '@/modules/SearchUsersByText'
import { SelectedTableRow } from '@/modules/SelectedTableRow'
import { UsersTable } from '@/modules/UsersTable'
import classes from './HomePage.module.scss'





export const HomePage = () => {
  return (

    <main>
      <h1>DataTable</h1>
      <article className={classes.wrapper}>

        <SearchUsersByText />
        <div className={classes.tag_wrapper}>
          <FilteredByTag />
        </div>

        <UsersTable />
        <SelectedTableRow />
        <PaginationPanel />
      </article>
    </main>

  )
}
