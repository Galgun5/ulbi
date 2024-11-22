import { classNames } from 'shared/lib/classNames/classNames';
import { memo, useCallback, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Button, ButtonTheme } from 'shared/ui/Button/Button';
import { LoginModal } from 'features/AuthByUserName';
import { useDispatch, useSelector } from 'react-redux';
import { getAuthUserData, userActions } from 'entities_/User';
import { AppLink, AppLinkTheme } from 'shared/ui/AppLink/AppLink';
import { Text, TextTheme } from 'shared/ui/Text/Text';
import { RouterPath } from 'shared/config/routeConfig/routeConfig';
import { Dropdown } from 'shared/ui/Dropdown/Dropdown';
import { Avatar } from 'shared/ui/Avatar/Avatar';
import cls from './Navbar.module.scss';

interface NavBarProps {
    className?: string
}

export const NavBar = memo(({ className }: NavBarProps) => {
    const { t } = useTranslation();
    const dispatch = useDispatch();

    const [isAuthModal, setIsAuthModal] = useState(false);

    const authData = useSelector(getAuthUserData);

    const onCloseModal = useCallback(() => {
        setIsAuthModal(false);
    }, []);

    const onOpenModal = useCallback(() => {
        setIsAuthModal(true);
    }, []);

    const onLogout = useCallback(() => {
        dispatch(userActions.logout());
    }, [dispatch]);

    if (authData) {
        return (
            <header className={classNames(cls.Navbar, {}, [className])}>
                <Text
                    className={cls.appName}
                    title={t('Galgun')}
                    theme={TextTheme.INVERTED}
                />
                <AppLink
                    to={RouterPath.article_create}
                    theme={AppLinkTheme.SECONDARY}
                    className={cls.createBtn}
                >
                    {t('Create Article')}
                </AppLink>
                <Dropdown
                    className={cls.dropdown}
                    items={[
                        {
                            content: t('Profile'),
                            href: RouterPath.profile + authData.id,
                        },
                        {
                            content: t('logOut'),
                            onClick: onLogout,
                        },
                    ]}
                    trigger={<Avatar size={30} src={authData.avatar} />}
                    direction="bottom left"
                />
            </header>
        );
    }

    return (
        <header className={classNames(cls.Navbar, {}, [className])}>
            <Button
                theme={ButtonTheme.CLEAR_INVERTED}
                className={cls.links}
                onClick={onOpenModal}
            >
                {t('logIn')}
            </Button>
            <LoginModal isOpen={isAuthModal} onClose={onCloseModal} />
        </header>
    );
});
