import { LoginSchema } from 'features/AuthByUserName';
import { loginReducer, loginActions } from './loginSlice';

describe('loginSlice', () => {
    test('set username', () => {
        const state: DeepPartial<LoginSchema> = { username: 'username' };

        expect(loginReducer(state as LoginSchema, loginActions.setUsername('new username')))
            .toEqual({ username: 'new username' });
    });

    test('set password', () => {
        const state: DeepPartial<LoginSchema> = { password: 'password' };

        expect(loginReducer(state as LoginSchema, loginActions.setPassword('new password')))
            .toEqual({ password: 'new password' });
    });
});
