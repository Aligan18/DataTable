import React, { ButtonHTMLAttributes } from 'react'


export const Button = ({ children, ...props }: ButtonProps) => {
    return (
        <button  {...props}>{children}</button>
    )
}


interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {

}
