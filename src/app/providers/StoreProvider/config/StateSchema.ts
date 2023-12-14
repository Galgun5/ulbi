import {
    AnyAction,
    CombinedState,
    EnhancedStore,
    Reducer,
    ReducersMapObject,
} from '@reduxjs/toolkit';
import { CounterScheme } from 'entities_/Counter';
import { UserSchema } from 'entities_/User';
import { Profile } from 'entities_/Profile';
import { LoginSchema } from 'features/AuthByUserName';

export interface StateSchema {
    counter: CounterScheme;
    user: UserSchema;
    loginForm?: LoginSchema;
    profile?: Profile;
}

export type StateSchemaKey = keyof StateSchema;

export interface ReducerManager {
    getReducerMap: () => ReducersMapObject<StateSchema>,
    reduce: (state: StateSchema, action: AnyAction) => CombinedState<StateSchema>,
    add: (key: StateSchemaKey, reducer: Reducer) => void,
    remove: (key: StateSchemaKey) => void,
}

export interface ReduxStoreWithManager extends EnhancedStore<StateSchema> {
    reducerManager: ReducerManager
}
