
import { TableHTMLAttributes } from 'react'
import { TableRow } from '../TableRow/TableRow'
import classes from './TableHead.module.scss'
import cn from 'clsx'

export function TableHead<T>({ titles, onHeadRowClick, onHeadСellClick, ...props }: TableHeadProps<T>) {
    const keysOfTitles = Object.keys(titles) as (keyof T)[]
    return (
        <thead >
            <TableRow
                onClick={onHeadRowClick ? (e) => onHeadRowClick(e) : undefined}
                {...props}>
                {keysOfTitles.map(keyOfTitle =>
                    <th className={cn({ [classes.pointer]: onHeadСellClick ? true : false })}
                        key={String(keyOfTitle)}
                        onClick={onHeadСellClick ? (e) => onHeadСellClick(e, keyOfTitle) : undefined}
                    >
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
    onHeadRowClick?: (event: React.MouseEvent<HTMLTableRowElement>) => void
    onHeadСellClick?: (event: React.MouseEvent<HTMLTableCellElement>, title: keyof T) => void
}
