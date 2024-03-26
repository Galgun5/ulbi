import { classNames } from 'shared/lib/classNames/classNames';
import { SVGProps, VFC } from 'react';
import cls from './Icon.module.scss';

interface IconProps {
    className?: string
    Svg: VFC<SVGProps<SVGSVGElement>>
}

export const Icon = ({ className, Svg }: IconProps) => (
    <Svg className={classNames(cls.Icon, {}, [className])} />
);
