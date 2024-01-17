import { StateSchema } from 'app/providers/StoreProvider';
import { Country } from 'entities_/Country';
import { Currency } from 'entities_/Currency';
import { getProfileForm } from './getProfileForm';

describe('getProfileForm', () => {
    test('should return error', () => {
        const form = {
            username: 'admin',
            age: 22,
            country: Country.Ukraine,
            lastname: 'Last Name',
            first: 'First Name',
            city: 'Dnipro',
            currency: Currency.UAH,
        };
        const state: DeepPartial<StateSchema> = {
            profile: {
                form,
            },
        };
        expect(getProfileForm(state as StateSchema)).toEqual(form);
    });
    test('should work with empty state', () => {
        const state: DeepPartial<StateSchema> = {};
        expect(getProfileForm(state as StateSchema)).toEqual(undefined);
    });
});
