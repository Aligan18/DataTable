
import { TableHTMLAttributes } from 'react'
import { TableRow } from '../TableRow/TableRow'

export function TableHead<T>({ titles, onHeadRowClick, onHeadСellClick, ...props }: TableHeadProps<T>) {
    const keysOfTitles = Object.keys(titles) as (keyof T)[]
    return (
        <thead >
            <TableRow onClick={onHeadRowClick ? (e) => onHeadRowClick(e) : undefined} {...props}>
                {keysOfTitles.map(keyOfTitle =>
                    <th key={String(keyOfTitle)} onClick={onHeadСellClick ? (e) => onHeadСellClick(e, keyOfTitle) : undefined}
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
