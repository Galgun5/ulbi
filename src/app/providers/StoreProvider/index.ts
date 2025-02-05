import type {
    StateSchema, ReduxStoreWithManager, ThunkConfig,
} from './config/StateSchema';
import { StoreProvider } from './ui/StoreProvider';
import { AppDispatch, createReduxStore } from './config/store';

export {
    StoreProvider,
    createReduxStore,
    StateSchema,
    ReduxStoreWithManager,
    ThunkConfig,
};

export type {
    AppDispatch,
};
