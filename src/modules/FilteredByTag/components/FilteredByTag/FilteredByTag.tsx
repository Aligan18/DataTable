import { clearFilter } from '@/modules/SearchUsersByText'
import { Button, useAppDispatch, useAppSelector } from '@/shared'


export const FilteredByTag = () => {
  const filterBy = useAppSelector(state => state.filtereUsers.filterBy)
  const dispatch = useAppDispatch()
  const handleClearFilter = () => {
    dispatch(clearFilter())
  }

  return (<>
    {filterBy.trim() &&
      <label >
        {filterBy}
        <Button onClick={handleClearFilter}>X</Button>
      </label>
    }
  </>
  )
}
