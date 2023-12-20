import { clearFilter } from '@/modules/SearchUsersByText'
import { Button, useAppDispatch, useAppSelector } from '@/shared'
import classes from './FilteredByTag.module.scss'

export const FilteredByTag = () => {
  const filterBy = useAppSelector(state => state.filtereUsers.filterBy)
  const dispatch = useAppDispatch()
  const handleClearFilter = () => {
    dispatch(clearFilter())
  }

  return (<>
    {filterBy.trim() &&
      <label className={classes.label}>
        <h4 className={classes.title}>{filterBy}</h4>
        <Button onClick={handleClearFilter}>X</Button>
      </label>
    }
  </>
  )
}
