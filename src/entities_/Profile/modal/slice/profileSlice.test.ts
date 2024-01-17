import { Country } from 'entities_/Country';
import { Currency } from 'entities_/Currency';
import {
    updateProfileData,
} from '../services/updateProfileData/updateProfileData';
import { ProfileSchema, ValidateProfileError } from '../types/profile';
import { profileActions, profileReducer } from './profileSlice';

const data = {
    username: 'admin',
    age: 22,
    country: Country.Ukraine,
    lastname: 'Last Name',
    first: 'First Name',
    city: 'Dnipro',
    currency: Currency.UAH,
};

describe('profileSlice', () => {
    test('set readonly', () => {
        const state: DeepPartial<ProfileSchema> = {
            readonly: false,
        };
        expect(
            profileReducer(
                state as ProfileSchema,
                profileActions.setReadonly(true),
            ),
        ).toEqual({
            readonly: true,
        });
    });
    test('test cancel edit', () => {
        const state: DeepPartial<ProfileSchema> = {
            data,
            form: {
                username: '',
            },
        };
        expect(
            profileReducer(
                state as ProfileSchema,
                profileActions.cancelEdit(),
            ),
        ).toEqual({
            readonly: true,
            validateErrors: undefined,
            data,
            form: data,
        });
    });
    test('test update profile', () => {
        const state: DeepPartial<ProfileSchema> = {
            form: {
                username: '',
            },
        };
        expect(
            profileReducer(
                state as ProfileSchema,
                profileActions.updateProfile({
                    username: 'new username',
                }),
            ),
        ).toEqual({
            form: {
                username: 'new username',
            },
        });
    });

    test('test update profile service pending', () => {
        const state: DeepPartial<ProfileSchema> = {
            isLoading: false,
            validateError: [ValidateProfileError.SERVER_ERROR],
        };
        expect(
            profileReducer(
                state as ProfileSchema,
                updateProfileData.pending,
            ),
        ).toEqual({
            isLoading: true,
            validateError: undefined,
        });
    });
    test('test update profile service fulfilled', () => {
        const state: DeepPartial<ProfileSchema> = {
            isLoading: true,
        };
        expect(
            profileReducer(
                state as ProfileSchema,
                updateProfileData.fulfilled(data, ''),
            ),
        ).toEqual({
            isLoading: false,
            validateError: undefined,
            readonly: true,
            form: data,
            data,
        });
    });
});
