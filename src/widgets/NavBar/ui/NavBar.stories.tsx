import type { Meta, StoryObj } from '@storybook/react';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from 'app/providers/ThemeProvider';
import { StoreDecorator } from 'shared/config/storybook/StoreDecorator/StoreDecorator';
import { NavBar } from './NavBar';

const meta = {
    title: 'widgets/NavBar',
    component: NavBar,
    decorators: [StoreDecorator({})],
} satisfies Meta<typeof NavBar>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Light: Story = {};
export const Dark: Story = {
    decorators: [ThemeDecorator(Theme.DARK)],
};
export const AuthNavBar: Story = {
    decorators: [StoreDecorator({
        user: {
            authData: {},
        },
    })],
};
