import { StateSchema } from 'app/providers/StoreProvider';
import { ValidateProfileError } from 'entities_/Profile';
import { getProfileValidateErrors } from './getProfileValidateErrors';

describe('getProfileValidateErrors', () => {
    test('should return validateErrors', () => {
        const errors = [
            ValidateProfileError.SERVER_ERROR,
            ValidateProfileError.INCORRECT_AGE,
        ];
        const state: DeepPartial<StateSchema> = {
            profile: {
                validateError: errors,
            },
        };
        expect(getProfileValidateErrors(state as StateSchema)).toEqual(errors);
    });
    test('should work with empty state', () => {
        const state: DeepPartial<StateSchema> = {};
        expect(getProfileValidateErrors(state as StateSchema)).toEqual(undefined);
    });
});
