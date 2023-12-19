import React from 'react'

export const TableRow = ({ children }: TableRowProps) => {
    return (
        <tr>{children}</tr>

    )
}

interface TableRowProps {
    children: React.ReactNode
}
