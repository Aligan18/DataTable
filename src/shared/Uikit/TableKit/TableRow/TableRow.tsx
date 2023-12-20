import React, { TableHTMLAttributes } from 'react'
import classes from './TableRow.module.scss'
import cn from 'clsx'
export const TableRow = ({ children, pointer, active, ...props }: TableRowProps) => {
    return (
        <tr className={cn('',
            {
                [classes.pointer]: pointer,
                [classes.active]: active

            })}{...props}>{children}</tr>

    )
}

interface TableRowProps extends TableHTMLAttributes<HTMLTableRowElement> {
    children: React.ReactNode
    pointer?: boolean
    active?: boolean
}
