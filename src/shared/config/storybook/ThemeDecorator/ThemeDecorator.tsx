import { DecoratorFunction } from '@storybook/types';
import { Theme } from 'app/providers/ThemeProvider';

export const ThemeDecorator: (theme: Theme) => DecoratorFunction<any> = (theme) => (Story) => (
    <div className={`app ${theme}`}>
        <Story />
    </div>
);
