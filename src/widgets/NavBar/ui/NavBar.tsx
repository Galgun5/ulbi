import { classNames } from 'shared/lib/classNames/classNames';
import { useCallback, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Button, ButtonTheme } from 'shared/ui/Button/Button';
import { Modal } from 'shared/ui/Modal/Modal';
import cls from './Navbar.module.scss';

interface NavBarProps {
    className?: string
}

export const NavBar = ({ className }: NavBarProps) => {
    const [isAuthModal, setIsAuthModal] = useState(false);

    const onToggleModal = useCallback(() => {
        setIsAuthModal((prev) => !prev);
    }, []);

    const { t } = useTranslation();
    return (
        <div className={classNames(cls.Navbar, {}, [className])}>
            <Button
                theme={ButtonTheme.CLEAR_INVERTED}
                className={cls.links}
                onClick={onToggleModal}
            >
                {t('logIn')}
            </Button>
            <Modal isOpen={isAuthModal} onClose={onToggleModal}>
                <div>
                    {/* eslint-disable-next-line i18next/no-literal-string */}
                    {/* eslint-disable-next-line i18next/no-literal-string, max-len */}
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. At culpa cum earum error ipsa laudantium magnam mollitia numquam perferendis quibusdam? Assumenda laboriosam maxime nemo neque numquam reprehenderit voluptatem. Nobis, unde.
                </div>
            </Modal>
        </div>
    );
};
