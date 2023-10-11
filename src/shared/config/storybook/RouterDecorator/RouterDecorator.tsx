import { DecoratorFunction } from '@storybook/types';
import { BrowserRouter } from 'react-router-dom';

export const RouterDecorator: DecoratorFunction<any> = (Story) => (
    <BrowserRouter>
        <Story />
    </BrowserRouter>
);
