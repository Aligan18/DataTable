
import { TableRow } from '../TableRow/TableRow'

export const TableHead = ({ titleArray }: TableHeadProps) => {
    return (
        <thead>
            <TableRow>
                {titleArray.map(title => <th key={title}>{title}</th>)}
            </TableRow>
        </thead>
    )
}
interface TableHeadProps {
    titleArray: string[]
}
