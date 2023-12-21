
import { TableHTMLAttributes } from 'react'
import { TableRow } from '../TableRow/TableRow'
import classes from './TableHead.module.scss'
import cn from 'clsx'

export function TableHead<T>({ titles, onHeadRowClick, onHeadСellClick, sortAscending, sortBy, ...props }: TableHeadProps<T>) {
    const keysOfTitles = Object.keys(titles) as (keyof T)[]

    return (
        <thead >
            <TableRow
                onClick={onHeadRowClick ? (e) => onHeadRowClick(e) : undefined}
                {...props}>
                {keysOfTitles.map(keyOfTitle =>
                    <th className={cn({
                        [classes.pointer]: onHeadСellClick ? true : false,
                        [classes.active]: sortBy === keyOfTitle
                    })}
                        key={String(keyOfTitle)}
                        onClick={onHeadСellClick ? (e) => onHeadСellClick(e, keyOfTitle) : undefined}
                    >

                        {sortBy === keyOfTitle && <>{sortAscending ? '▼' : '▲'}</>}
                        {titles[keyOfTitle]}
                    </th>
                )
                }
            </TableRow>
        </thead>
    )
}
interface TableHeadProps<T> extends TableHTMLAttributes<HTMLTableRowElement> {
    titles: Record<keyof T, string>
    sortBy?: keyof T | "none"
    sortAscending?: boolean
    onHeadRowClick?: (event: React.MouseEvent<HTMLTableRowElement>) => void
    onHeadСellClick?: (event: React.MouseEvent<HTMLTableCellElement>, title: keyof T) => void
}
