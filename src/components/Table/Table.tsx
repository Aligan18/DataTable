import { TableBody, TableHead } from '@/shared'



export function Table<T extends IdType>({ data, titles, onHeadRowClick, onHeadСellClick, onRowClick, onСellClick }: TableProps<T>) {

    const headKeys = Object.keys(titles) as (keyof T)[]

    return (
        <table>
            <TableHead titles={titles}
                onHeadRowClick={onHeadRowClick}
                onHeadСellClick={onHeadСellClick}
            />
            <TableBody<T> keys={headKeys} data={data} onRowClick={onRowClick} onСellClick={onСellClick} />
        </table>
    )
}

interface TableProps<T> {
    data: T[]
    titles: Record<keyof T, string>
    onHeadRowClick?: (event: React.MouseEvent<HTMLTableRowElement>) => void
    onHeadСellClick?: (event: React.MouseEvent<HTMLTableCellElement>, title: keyof T) => void
    onRowClick?: (event: React.MouseEvent<HTMLTableRowElement>) => void
    onСellClick?: (event: React.MouseEvent<HTMLTableCellElement>) => void
}

export type IdType = {
    id: number;
} | {
    _id: number;
};