import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import { Text } from 'shared/ui/Text/Text';
import { Button, ButtonTheme } from 'shared/ui/Button/Button';
import { Input } from 'shared/ui/Input/Input';
import { getProfileData } from '../../modal/selectors/getProfileData/getProfileData';
import { getProfileError } from '../../modal/selectors/getProfileError/getProfileError';
import { getProfileLoading } from '../../modal/selectors/getProfileLoading/getProfileLoading';
import cls from './ProfileCard.module.scss';

interface ProfileCardProps {
    className?: string
}

export const ProfileCard = ({ className }: ProfileCardProps) => {
    const { t } = useTranslation('profile');
    const data = useSelector(getProfileData);
    const error = useSelector(getProfileError);
    const loading = useSelector(getProfileLoading);
    return (
        <div className={classNames(cls.ProfileCard, {}, [className])}>
            <div className={cls.header}>
                <Text title={t('Profile')} />
                <Button
                    theme={ButtonTheme.OUTLINE}
                    className={cls.editBtn}
                >
                    {t('Edit')}
                </Button>
            </div>
            <div className={cls.data}>
                <Input
                    value={data?.first}
                    placeholder={t('your name')}
                    className={cls.input}
                />
                <Input
                    value={data?.lastname}
                    placeholder={t('your lastname')}
                    className={cls.input}
                />
            </div>
        </div>
    );
};
