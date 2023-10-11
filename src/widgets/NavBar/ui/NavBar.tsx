import { classNames } from 'shared/lib/classNames/classNames';
import { AppLink, AppLinkTheme } from 'shared/ui/AppLink/AppLink';
import { useTransition } from 'react';
import { useTranslation } from 'react-i18next';
import cls from './Navbar.module.scss';

interface NavBarProps {
    className?: string
}

export const NavBar = ({ className }: NavBarProps) => {
    const { t } = useTranslation();
    return (
        <div className={classNames(cls.Navbar, {}, [className])}>
            <div className={cls.links}>
                <AppLink
                    theme={AppLinkTheme.SECONDARY}
                    to="/"
                    className={cls.mainLink}
                >
                    {t('Main')}
                </AppLink>
                <AppLink
                    theme={AppLinkTheme.SECONDARY}
                    to="/about"
                >
                    {t('About')}
                </AppLink>
            </div>
        </div>
    );
};
