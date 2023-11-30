import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { Button, ButtonTheme } from 'shared/ui/Button/Button';
import { Input } from 'shared/ui/Input/Input';
import { useDispatch, useSelector } from 'react-redux';
import { memo, useCallback } from 'react';
import { Text, TextTheme } from 'shared/ui/Text/Text';
import { getLoginState } from '../../model/selectors/getLoginState/getLoginState';
import { loginByUsername } from '../../model/service/loginByUsername/loginByUsername';
import { loginActions } from '../../model/slice/loginSlice';
import cls from './LoginForm.module.scss';

interface LoginFormProps {
    className?: string
}

export const LoginForm = memo(({ className }: LoginFormProps) => {
    const { t } = useTranslation();
    const dispatch = useDispatch();
    const {
        username, password, error, isLogin,
    } = useSelector(getLoginState);

    const onChangeUsername = useCallback((value: string) => {
        dispatch(loginActions.setUsername(value));
    }, [dispatch]);

    const onChangePassword = useCallback((value: string) => {
        dispatch(loginActions.setPassword(value));
    }, [dispatch]);

    const onLoginClick = useCallback(() => {
        dispatch(loginByUsername({ username, password }));
    }, [dispatch, username, password]);

    return (
        <div className={classNames(cls.LoginForm, {}, [className])}>
            <Text title={t('Auth Form')} />
            {error && <Text text={t('uncorrected login or password')} theme={TextTheme.ERROR} />}
            <Input
                autoFocus
                onChange={onChangeUsername}
                placeholder={t('Type username')}
                className={(cls.input)}
                value={username}
            />
            <Input
                placeholder={t('Type password')}
                onChange={onChangePassword}
                className={(cls.input)}
                value={password}
            />
            <Button
                theme={ButtonTheme.OUTLINE}
                onClick={onLoginClick}
                className={(cls.loginBtn)}
                disabled={isLogin}
            >
                {t('Log in')}
            </Button>
        </div>
    );
});
