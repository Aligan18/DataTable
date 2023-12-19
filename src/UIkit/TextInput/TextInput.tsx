import { InputHTMLAttributes } from 'react'

export const TextInput = ({ ...props }: TextInputProps) => {
    return (
        <input type="text" {...props} />
    )
}

interface TextInputProps extends InputHTMLAttributes<HTMLInputElement> {

}
