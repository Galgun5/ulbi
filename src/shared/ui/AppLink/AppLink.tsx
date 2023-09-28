import {classNames} from 'shared/lib/classNames/classNames';
import cls from './AppLink.module.scss'
import {Link, LinkProps} from 'react-router-dom';
import {FC, PropsWithChildren, } from 'react';

export enum AppLinkTheme {
    PRIMARY = 'primary',
    SECONDARY = 'secondary',
    RED = 'red'
}

interface AppLinkProps extends LinkProps{
    className?: string
    theme?: AppLinkTheme
}

export const AppLink: FC<PropsWithChildren<AppLinkProps>> = (props) => {
    const {
        className,
        children,
        to,
        theme = AppLinkTheme.PRIMARY,
        ...otherProps
    } = props;
    return (
        <Link to={to} className={classNames(cls.navbar, {}, [className, cls[theme]])} {...otherProps}>
            {children}
        </Link>
    )
}