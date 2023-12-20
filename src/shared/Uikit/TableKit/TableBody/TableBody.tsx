
import { IdType } from '@/components'
import { useState } from 'react'

import { TableRow } from '../TableRow/TableRow'
import classes from "./TableBody.module.scss"

export function TableBody<T extends IdType>({ data, keys, onRowClick, onСellClick }: TableBodyProps<T>) {
    const [active, setActive] = useState(-1)


    function handleRowClick(e: React.MouseEvent<HTMLTableRowElement>, item: T) {
        e.stopPropagation()
        if (onRowClick) {
            onRowClick(e, item)
            setActive(('id' in item) ? item.id : item._id)
        }

    }

    return (
        <tbody>
            {data.map(item => {
                const itemId = ('id' in item) ? item.id : item._id
                return <TableRow active={active === itemId}
                    pointer={onRowClick ? true : false}
                    key={itemId}
                    onClick={onRowClick ? (e) => handleRowClick(e, item) : undefined}
                >
                    {keys.map(key =>
                        <td key={String(key)} onClick={onСellClick ? (e) => onСellClick(e) : undefined}>
                            {typeof item[key] !== 'undefined' ? String(item[key]) : '-'}
                        </td>)}
                </TableRow>
            })}
        </tbody>
    )
}

interface TableBodyProps<T> {
    data: T[]
    keys: Array<keyof T>
    onRowClick?: (event: React.MouseEvent<HTMLTableRowElement>, item: T) => void
    onСellClick?: (event: React.MouseEvent<HTMLTableCellElement>) => void
}