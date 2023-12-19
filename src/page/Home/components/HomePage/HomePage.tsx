

import { SearchUsersByText } from '@/modules/SearchUsersByText'
import { UsersTable } from '@/modules/UsersTable'





export const HomePage = () => {
  return (
    <div>HomePage
      <div>
        <SearchUsersByText />
        <UsersTable />
      </div>
    </div>
  )
}
