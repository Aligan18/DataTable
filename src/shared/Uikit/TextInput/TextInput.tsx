import { forwardRef, InputHTMLAttributes, ForwardedRef } from 'react'

export const TextInput = forwardRef(({ ...props }: TextInputProps, ref: ForwardedRef<HTMLInputElement>) => {
    return (
        <input ref={ref} type="text" {...props} />
    )
})
interface TextInputProps extends InputHTMLAttributes<HTMLInputElement> {

}
