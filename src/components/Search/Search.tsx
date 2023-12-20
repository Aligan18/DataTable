import { ForwardedRef } from "react"
import { Button, TextInput } from "@/shared"
import { forwardRef, InputHTMLAttributes } from "react"
import classes from "./Search.module.scss"



export const Search = forwardRef(({ handleClickSearchButton, ...props }: SearchProps, ref: ForwardedRef<HTMLInputElement>) => {
    return (
        <form className={classes.search}>
            <TextInput ref={ref}
                {...props}
            />
            <Button onClick={(e) => handleClickSearchButton(e)}>Найти</Button>
        </form>
    )
})
interface SearchProps extends InputHTMLAttributes<HTMLInputElement> {
    handleClickSearchButton: (e: React.MouseEvent<HTMLButtonElement>) => void
}
