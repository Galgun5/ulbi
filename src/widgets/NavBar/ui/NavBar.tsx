import { classNames } from 'shared/lib/classNames/classNames';
import cls from './Navbar.module.scss';

interface NavBarProps {
    className?: string
}

export const NavBar = ({ className }: NavBarProps) => (
    <div className={classNames(cls.Navbar, {}, [className])}>
        <div className={cls.links}>
            /
        </div>
    </div>
);
