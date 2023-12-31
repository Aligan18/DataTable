import { TableBody, TableHead } from '@/shared'



export function Table<T extends IdType>({ sortAscending, sortBy, activeId, data, titles, onHeadRowClick, onHeadСellClick, onRowClick, onСellClick }: TableProps<T>) {

    const headKeys = Object.keys(titles) as (keyof T)[]

    return (
        <table>
            <TableHead titles={titles}
                sortAscending={sortAscending}
                sortBy={sortBy}
                onHeadRowClick={onHeadRowClick}
                onHeadСellClick={onHeadСellClick}
            />
            <TableBody<T> keys={headKeys} data={data}
                activeId={activeId}
                onRowClick={onRowClick}
                onСellClick={onСellClick} />
        </table>
    )
}

interface TableProps<T> {
    data: T[]
    sortAscending: boolean
    sortBy: keyof T | "none"
    activeId?: number | string
    titles: Record<keyof T, string>
    onHeadRowClick?: (event: React.MouseEvent<HTMLTableRowElement>) => void
    onHeadСellClick?: (event: React.MouseEvent<HTMLTableCellElement>, title: keyof T) => void
    onRowClick?: (event: React.MouseEvent<HTMLTableRowElement>, item: T) => void
    onСellClick?: (event: React.MouseEvent<HTMLTableCellElement>) => void
}

export type IdType = {
    id: number;
} | {
    _id: number;
};