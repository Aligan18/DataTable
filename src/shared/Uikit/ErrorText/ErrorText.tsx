

import classes from './ErrorText.module.scss'

export const ErrorText = ({ children }: ErrorTextProps) => {
    return (
        <h2 className={classes.error}>{children}</h2>
    )
}

interface ErrorTextProps extends React.HTMLAttributes<HTMLParagraphElement> {

}