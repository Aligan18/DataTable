export interface User {
    _id: number,
    firstName: string
    lastName: string
    email: string
    phone: string
}


export type TableHeadTitles = Record<keyof User, string>

