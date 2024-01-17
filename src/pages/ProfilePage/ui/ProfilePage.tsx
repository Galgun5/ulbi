import { useCallback, useEffect } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import {
    DynamicModuleLoader,
    ReducerList,
} from 'shared/lib/components/DynamicModuleLoader/DynamicModuleLoader';
import {
    fetchProfileData,
    getProfileError,
    getProfileForm,
    getProfileLoading,
    getProfileReadonly,
    getProfileValidateErrors,
    ProfileCard,
    profileActions,
    profileReducer,
    ValidateProfileError,
} from 'entities_/Profile';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch';
import { useSelector } from 'react-redux';
import { Currency } from 'entities_/Currency';
import { Country } from 'entities_/Country';
import { Text, TextTheme } from 'shared/ui/Text/Text';
import { useTranslation } from 'react-i18next';
import { ProfilePageHeader } from './ProfilePageHeader/ProfilePageHeader';
import cls from './ProfilePage.module.scss';

const reducers: ReducerList = {
    profile: profileReducer,
};

interface NotFoundPageProps {
    className?: string
}

const ProfilePage = ({ className }: NotFoundPageProps) => {
    const { t } = useTranslation('profile');

    const form = useSelector(getProfileForm);
    const error = useSelector(getProfileError);
    const loading = useSelector(getProfileLoading);
    const readOnly = useSelector(getProfileReadonly);
    const validateErrors = useSelector(getProfileValidateErrors);

    const dispatch = useAppDispatch();

    const validateErrorTranslates = {
        [ValidateProfileError.SERVER_ERROR]: t('Server Error'),
        [ValidateProfileError.NO_DATA]: t('No data'),
        [ValidateProfileError.INCORRECT_AGE]: t('Incorrect age'),
        [ValidateProfileError.INCORRECT_USER_DATA]: t('Incorrect user data'),
        [ValidateProfileError.INCORRECT_COUNTRY]: t('Incorrect country'),
    };

    useEffect(() => {
        if (__PROJECT__ !== 'storybook') {
            dispatch(fetchProfileData());
        }
    }, [dispatch]);

    const onChangeFirstname = useCallback((value?: string) => {
        dispatch(profileActions.updateProfile({
            first: value || '',
        }));
    }, [dispatch]);

    const onChangeLastname = useCallback((value?: string) => {
        dispatch(profileActions.updateProfile({
            lastname: value || '',
        }));
    }, [dispatch]);

    const onChangeAge = useCallback((value?: string) => {
        dispatch(profileActions.updateProfile({
            age: Number(value || ''),
        }));
    }, [dispatch]);

    const onChangeCity = useCallback((value?: string) => {
        dispatch(profileActions.updateProfile({
            city: value || '',
        }));
    }, [dispatch]);

    const onChangeUsername = useCallback((value?: string) => {
        dispatch(profileActions.updateProfile({
            username: value || '',
        }));
    }, [dispatch]);

    const onChangeAvatar = useCallback((value?: string) => {
        dispatch(profileActions.updateProfile({
            avatar: value || '',
        }));
    }, [dispatch]);

    const onChangeCurrency = useCallback((currency?: Currency) => {
        dispatch(profileActions.updateProfile({
            currency,
        }));
    }, [dispatch]);

    const onChangeCountry = useCallback((country?: Country) => {
        dispatch(profileActions.updateProfile({
            country,
        }));
    }, [dispatch]);

    return (
        <DynamicModuleLoader reducers={reducers} removeAfterUnmount>
            <div className={classNames(cls.ProfilePage, {}, [className])}>
                <ProfilePageHeader />
                {validateErrors?.length && validateErrors.map((err) => (
                    <Text
                        key={err}
                        theme={TextTheme.ERROR}
                        text={validateErrorTranslates[err]}
                    />
                ))}
                <ProfileCard
                    data={form}
                    loading={loading}
                    error={error}
                    readOnly={readOnly}
                    onChangeFirstname={onChangeFirstname}
                    onChangeLastname={onChangeLastname}
                    onChangeAge={onChangeAge}
                    onChangeCity={onChangeCity}
                    onChangeUsername={onChangeUsername}
                    onChangeAvatar={onChangeAvatar}
                    onChangeCurrency={onChangeCurrency}
                    onChangeCountry={onChangeCountry}
                />
            </div>
        </DynamicModuleLoader>
    );
};

export default ProfilePage;
