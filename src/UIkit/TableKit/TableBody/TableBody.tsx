import { IdType } from '../Table/Table'

import { TableRow } from '../TableRow/TableRow'

export function TableBody<T extends IdType>({ data, keys }: TableBodyProps<T>) {



    return (
        <tbody>
            {data.map(item => (
                <TableRow key={('id' in item) ? item.id : item._id}>
                    {keys.map(key => <td>{typeof item[key] !== 'undefined' ? String(item[key]) : '-'}</td>)}
                </TableRow>
            ))}
        </tbody>
    )
}

interface TableBodyProps<T> {
    data: T[]
    keys: Array<keyof T>
}