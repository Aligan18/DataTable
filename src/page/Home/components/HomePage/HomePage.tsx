

import { FilteredByTag } from '@/modules/FilteredByTag'
import { PaginationPanel } from '@/modules/PaginationPanel'
import { SearchUsersByText } from '@/modules/SearchUsersByText'
import { SelectedTableRow } from '@/modules/SelectedTableRow'
import { UsersTable } from '@/modules/UsersTable'
import { ErrorText, Loader } from '@/shared'





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
        <ErrorText>Произошда ошибка </ErrorText>
      </div>
    </div>
  )
}
