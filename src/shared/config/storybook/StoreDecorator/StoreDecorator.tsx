import { DecoratorFunction } from '@storybook/types';
import { StateSchema, StoreProvider } from 'app/providers/StoreProvider';
import { DeepPartial } from '@reduxjs/toolkit';

type StoreDecoratorType = (state: DeepPartial<StateSchema>) => DecoratorFunction<any>
export const StoreDecorator:StoreDecoratorType = (state) => (Story) => (
    <StoreProvider initialState={state}>
        <Story />
    </StoreProvider>
);
