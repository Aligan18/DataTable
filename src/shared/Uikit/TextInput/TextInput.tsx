import { forwardRef, InputHTMLAttributes, ForwardedRef } from 'react'
import classes from './TextInput.module.scss'
export const TextInput = forwardRef(({ ...props }: TextInputProps, ref: ForwardedRef<HTMLInputElement>) => {
    return (
        <input className={classes.input} ref={ref} type="text" {...props} />
    )
})
interface TextInputProps extends InputHTMLAttributes<HTMLInputElement> {

}
