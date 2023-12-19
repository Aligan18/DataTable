import React, { TableHTMLAttributes } from 'react'

export const TableRow = ({ children, ...props }: TableRowProps) => {
    return (
        <tr {...props}>{children}</tr>

    )
}

interface TableRowProps extends TableHTMLAttributes<HTMLTableRowElement> {
    children: React.ReactNode
}
