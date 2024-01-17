import { Country } from 'entities_/Country';
import { Currency } from 'entities_/Currency';
import { ValidateProfileError } from 'entities_/Profile';
import { validateProfile } from './validateProfile';

jest.mock('axios');

const data = {
    username: 'admin',
    age: 22,
    country: Country.Ukraine,
    lastname: 'Last Name',
    first: 'First Name',
    city: 'Dnipro',
    currency: Currency.UAH,
};

describe('validateProfile', () => {
    test('success', () => {
        const result = validateProfile(data);
        expect(result).toEqual([]);
    });
    test('without first and last name', () => {
        const result = validateProfile({
            ...data,
            first: '',
            lastname: '',
        });

        expect(result).toEqual([
            ValidateProfileError.INCORRECT_USER_DATA,
        ]);
    });
    test('incorrect age', () => {
        const result = validateProfile({
            ...data,
            age: undefined,
        });

        expect(result).toEqual([
            ValidateProfileError.INCORRECT_AGE,
        ]);
    });
    test('incorrect country', () => {
        const result = validateProfile({
            ...data,
            country: undefined,
        });

        expect(result).toEqual([
            ValidateProfileError.INCORRECT_COUNTRY,
        ]);
    });
    test('incorrect all', () => {
        const result = validateProfile({});

        expect(result).toEqual([
            ValidateProfileError.INCORRECT_USER_DATA,
            ValidateProfileError.INCORRECT_AGE,
            ValidateProfileError.INCORRECT_COUNTRY,
        ]);
    });
});
