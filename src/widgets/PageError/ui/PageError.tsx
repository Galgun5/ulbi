import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { Button } from 'shared/ui/Button/Button';
import cls from './PageError.module.scss';

interface PageLoaderProps {
    className?: string
}

export const PageError = ({ className }: PageLoaderProps) => {
    const { t } = useTranslation();

    const reloadPage = () => {
        // eslint-disable-next-line no-restricted-globals
        location.reload();
    };

    return (
        <div className={classNames(cls.PageError, {}, [className])}>
            <p>{t('an unexpected error')}</p>
            <Button onClick={reloadPage}>
                {t('Reload Page')}
            </Button>
        </div>
    );
};
