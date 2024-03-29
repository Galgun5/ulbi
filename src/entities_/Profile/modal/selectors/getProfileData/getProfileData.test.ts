import { StateSchema } from 'app/providers/StoreProvider';
import { Country } from 'entities_/Country';
import { Currency } from 'entities_/Currency';
import { getProfileData } from './getProfileData';

describe('getProfileData', () => {
    test('should return data', () => {
        const data = {
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
                data,
            },
        };
        expect(getProfileData(state as StateSchema)).toEqual(data);
    });
    test('should work with empty state', () => {
        const state: DeepPartial<StateSchema> = {};
        expect(getProfileData(state as StateSchema)).toEqual(undefined);
    });
});
