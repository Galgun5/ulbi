import { ReactNode } from 'react';
import { render } from '@testing-library/react';
import { I18nextProvider } from 'react-i18next';
import { MemoryRouter } from 'react-router-dom';
import { StateSchema, StoreProvider } from 'app/providers/StoreProvider';
import { ReducersMapObject } from '@reduxjs/toolkit';
import i18ForTests from '../../i18n/i18ForTests';

export interface renderWithRouterOptions {
    route?: string;
    initialState?: DeepPartial<StateSchema>;
    asyncReducers?: DeepPartial<ReducersMapObject<StateSchema>>,
}

export function componentRender(component: ReactNode, options: renderWithRouterOptions = {}) {
    const {
        route = '/',
        initialState,
        asyncReducers,
    } = options;
    return render(
        <MemoryRouter initialEntries={[route]}>
            <StoreProvider asyncReducers={asyncReducers} initialState={initialState}>
                <I18nextProvider i18n={i18ForTests}>
                    {component}
                </I18nextProvider>
            </StoreProvider>
        </MemoryRouter>,
    );
}
