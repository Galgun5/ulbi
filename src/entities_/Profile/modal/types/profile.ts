import { Currency } from 'entities_/Currency/modal/types/currency';
import { Country } from 'entities_/Country';

export interface Profile {
    'first'?: string;
    'lastname'?: string;
    'age'?: number;
    'currency'?: Currency;
    'country'?: Country;
    'city'?: string;
    'username'?: string;
    'avatar'?: string;
}

export interface ProfileSchema {
    data?: Profile;
    form?: Profile;
    isLoading?: boolean;
    error?: string;
    readonly: boolean;
}
