import { DecoratorFunction } from '@storybook/types';
import { Theme, ThemeProvider } from 'app/providers/ThemeProvider';

export const ThemeDecorator: (theme: Theme) => DecoratorFunction<any> = (theme) => (Story) => (
    <ThemeProvider initialTheme={theme}>
        <div className={`app ${theme}`}>
            <Story />
        </div>
    </ThemeProvider>
);
