import { ReactNode } from 'react';
import { render } from '@testing-library/react';
import { I18nextProvider } from 'react-i18next';
import { MemoryRouter } from 'react-router-dom';
import i18ForTests from '../../i18n/i18ForTests';

export interface renderWithRouterOptions {
    route?: string;
}

export function componentRender(component: ReactNode, options: renderWithRouterOptions = {}) {
    const { route = '/' } = options;
    return render(
        <MemoryRouter initialEntries={[route]}>
            <I18nextProvider i18n={i18ForTests}>
                {component}
            </I18nextProvider>
        </MemoryRouter>,
    );
}
