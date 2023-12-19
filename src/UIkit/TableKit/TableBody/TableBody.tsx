import { IdType } from '../../../components/Table/Table'

import { TableRow } from '../TableRow/TableRow'

export function TableBody<T extends IdType>({ data, keys, onRowClick, onСellClick }: TableBodyProps<T>) {



    return (
        <tbody>
            {data.map(item => (
                <TableRow key={('id' in item) ? item.id : item._id}
                    onClick={onRowClick ? (e) => onRowClick(e) : undefined}
                >
                    {keys.map(key =>
                        <td key={String(key)} onClick={onСellClick ? (e) => onСellClick(e) : undefined}>
                            {typeof item[key] !== 'undefined' ? String(item[key]) : '-'}
                        </td>)}
                </TableRow>
            ))}
        </tbody>
    )
}

interface TableBodyProps<T> {
    data: T[]
    keys: Array<keyof T>
    onRowClick?: (event: React.MouseEvent<HTMLTableRowElement>) => void
    onСellClick?: (event: React.MouseEvent<HTMLTableCellElement>) => void
}