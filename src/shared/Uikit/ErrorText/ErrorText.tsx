

import classes from './ErrorText.module.scss'

export const ErrorText = ({ children }: ErrorTextProps) => {
    return (
        <p className={classes.error}>{children}</p>
    )
}

interface ErrorTextProps extends React.HTMLAttributes<HTMLParagraphElement> {

}