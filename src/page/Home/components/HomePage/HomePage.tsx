

import { FilteredByTag } from '@/modules/FilteredByTag'
import { PaginationPanel } from '@/modules/PaginationPanel'
import { SearchUsersByText } from '@/modules/SearchUsersByText'
import { SelectedTableRow } from '@/modules/SelectedTableRow'
import { UsersTable } from '@/modules/UsersTable'





export const HomePage = () => {
  return (
    <div>
      <h1>DataTable</h1>
      <div>
        <SearchUsersByText />
        <FilteredByTag />
        <UsersTable />
        <SelectedTableRow />
        <PaginationPanel />
      </div>
    </div>
  )
}
