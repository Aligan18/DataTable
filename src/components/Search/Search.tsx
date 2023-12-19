import { ForwardedRef } from "react"
import { Button, TextInput } from "@/shared"
import { forwardRef, InputHTMLAttributes } from "react"




export const Search = forwardRef(({ handleClickSearchButton, ...props }: SearchProps, ref: ForwardedRef<HTMLInputElement>) => {
    return (
        <>
            <TextInput ref={ref}
                {...props}
            />
            <Button onClick={(e) => handleClickSearchButton(e)}>Найти</Button>
        </>
    )
})
interface SearchProps extends InputHTMLAttributes<HTMLInputElement> {
    handleClickSearchButton: (e: React.MouseEvent<HTMLButtonElement>) => void
}
