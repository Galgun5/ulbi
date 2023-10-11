import { Meta, StoryObj } from '@storybook/react';
import { ThemeSwitcher } from 'widgets/ThemeSwitcher';
import { Theme } from 'app/providers/ThemeProvider';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';

const meta = {
    title: 'widgets/ThemeSwitcher',
    component: ThemeSwitcher,
} satisfies Meta<typeof ThemeSwitcher>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
};

export const Dark: Story = {
    decorators: [ThemeDecorator(Theme.DARK)],
};
