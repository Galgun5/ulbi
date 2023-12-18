import { DecoratorFunction } from '@storybook/types';
import { StateSchema, StoreProvider } from 'app/providers/StoreProvider';
import { loginReducer } from 'features/AuthByUserName/model/slice/loginSlice';
import { profileReducer } from 'entities_/Profile';
import { ReducerList } from 'shared/lib/components/DynamicModuleLoader/DynamicModuleLoader';

const defaultAsyncReducers: ReducerList = {
    loginForm: loginReducer,
    profile: profileReducer,
};
type StoreDecoratorType = (
    state: DeepPartial<StateSchema>,
    asyncReducers?: ReducerList
                           ) => DecoratorFunction<any>

export const StoreDecorator:StoreDecoratorType = (
    state,
    asyncReducers,
) => (Story) => (
    <StoreProvider
        initialState={state}
        asyncReducers={{ ...defaultAsyncReducers, ...asyncReducers }}
    >
        <Story />
    </StoreProvider>
);
