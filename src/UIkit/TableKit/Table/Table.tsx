import { TableBody } from '../TableBody/TableBody'
import { TableHead } from '../TableHead/TableHead'

export function Table<T extends IdType>({ data, titles }: TableProps<T>) {

    const headKeys = Object.keys(titles) as (keyof T)[]
    const titleArray = Object.values(titles) as string[]
    return (
        <table>
            <TableHead titleArray={titleArray} />
            <TableBody<T> keys={headKeys} data={data} />
        </table>
    )
}

interface TableProps<T> {
    data: T[]
    titles: Record<keyof T, string>
}

export type IdType = {
    id: number;
} | {
    _id: number;
};