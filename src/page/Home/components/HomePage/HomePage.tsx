

import { FilteredByTag } from '@/modules/FilteredByTag'
import { SearchUsersByText } from '@/modules/SearchUsersByText'
import { UsersTable } from '@/modules/UsersTable'





export const HomePage = () => {
  return (
    <div>
      <h1>DataTable</h1>
      <div>
        <SearchUsersByText />
        <FilteredByTag />
        <UsersTable />
      </div>
    </div>
  )
}
