import { classNames, Mods } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { Text, TextAlign, TextTheme } from 'shared/ui/Text/Text';
import { Input } from 'shared/ui/Input/Input';
import { Loader } from 'shared/Loader/Loader';
import { Avatar } from 'shared/ui/Avatar/Avatar';
import { Currency, CurrencySelect } from 'entities_/Currency';
import { Country, CountrySelect } from 'entities_/Country';
import { HStack, VStack } from 'shared/ui/Stack';
import { Profile } from '../../modal/types/profile';
import cls from './ProfileCard.module.scss';

interface ProfileCardProps {
    className?: string;
    data?: Profile;
    error?: string;
    loading?: boolean;
    onChangeFirstname?: (value?: string) => void
    onChangeLastname?: (value?: string) => void
    onChangeAge?: (value?: string) => void
    onChangeCity?: (value?: string) => void
    onChangeUsername?: (value?: string) => void
    onChangeAvatar?: (value?: string) => void
    onChangeCurrency?: (currency?: Currency) => void
    onChangeCountry?: (country?: Country) => void
    readOnly?:boolean
}

export const ProfileCard = ({
    className,
    data,
    loading,
    error,
    onChangeFirstname,
    onChangeLastname,
    onChangeAge,
    onChangeCity,
    readOnly,
    onChangeUsername,
    onChangeAvatar,
    onChangeCurrency,
    onChangeCountry,
}: ProfileCardProps) => {
    const { t } = useTranslation('profile');

    if (loading) {
        return (
            <HStack
                justify="center"
                className={classNames(cls.ProfileCard, {}, [className, cls.loading])}
            >
                <Loader />
            </HStack>
        );
    }

    if (error) {
        return (
            <HStack
                justify="center"
                className={classNames(cls.ProfileCard, {}, [className, cls.error])}
            >
                <Text
                    theme={TextTheme.ERROR}
                    align={TextAlign.CENTER}
                    title="Something went wrong"
                    text="Try reload page"
                />
            </HStack>
        );
    }

    const mods: Mods = {
        [cls.editing]: !readOnly,
    };

    return (
        <VStack gap="16" max className={classNames(cls.ProfileCard, mods, [className])}>
            {data?.avatar && (
                <HStack justify="center">
                    <Avatar
                        src={data?.avatar}
                        alt="Avatar"
                    />
                </HStack>
            )}
            <Input
                value={data?.first}
                placeholder={t('your name')}
                className={cls.input}
                onChange={onChangeFirstname}
                readOnly={readOnly}
                data-testid="ProfileCard.firstname"
            />
            <Input
                value={data?.lastname}
                placeholder={t('your lastname')}
                className={cls.input}
                onChange={onChangeLastname}
                readOnly={readOnly}
                data-testid="ProfileCard.lastname"
            />
            <Input
                value={data?.age}
                placeholder={t('your age')}
                className={cls.input}
                onChange={onChangeAge}
                readOnly={readOnly}
            />
            <Input
                value={data?.city}
                placeholder={t('your city')}
                className={cls.input}
                onChange={onChangeCity}
                readOnly={readOnly}
            />
            <Input
                value={data?.username}
                placeholder={t('your username')}
                className={cls.input}
                onChange={onChangeUsername}
                readOnly={readOnly}
            />
            <Input
                value={data?.avatar}
                placeholder={t('your avatar link')}
                className={cls.input}
                onChange={onChangeAvatar}
                readOnly={readOnly}
            />
            <CurrencySelect
                className={cls.input}
                value={data?.currency}
                onChange={onChangeCurrency}
                readOnly={readOnly}
            />
            <CountrySelect
                className={cls.input}
                value={data?.country}
                onChange={onChangeCountry}
                readOnly={readOnly}
            />
        </VStack>
    );
};
