import { classNames } from 'shared/lib/classNames/classNames';
import { memo } from 'react';
import cls from './Text.module.scss';

export enum TextTheme {
    PRIMARY = 'primary',
    ERROR = 'error',
    INVERTED = 'inverted',
}

export enum TextAlign {
    RIGHT = 'right',
    LEFT = 'left',
    CENTER = 'center',
}
export enum TextSize {
    M = 'size_m',
    L = 'size_l',
    XL = 'size_xl',
}

interface TextProps {
    className?: string
    title?: string;
    text?: string;
    theme?: TextTheme;
    align?: TextAlign;
    size?: TextSize;
}

export const Text = memo(({
    className, text, title, theme = TextTheme.PRIMARY, align = TextAlign.LEFT, size = TextSize.M,
}: TextProps) => (
    <div
        className={classNames(cls.Text, {}, [className, cls[theme], cls[align], cls[size]])}
    >
        {title && <p className={cls.title}>{title}</p>}
        {text && <p className={cls.text}>{text}</p>}
    </div>
));
