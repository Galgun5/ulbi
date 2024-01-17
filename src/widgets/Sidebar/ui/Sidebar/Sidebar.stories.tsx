import type { Meta, StoryObj } from '@storybook/react';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from 'app/providers/ThemeProvider';
import { StoreDecorator } from 'shared/config/storybook/StoreDecorator/StoreDecorator';
import { Sidebar } from './Sidebar';

const meta = {
    title: 'shared/Sidebar',
    component: Sidebar,
    decorators: [StoreDecorator({
        user: { authData: {} },
    })],
} satisfies Meta<typeof Sidebar>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Light: Story = {

};
export const Dark: Story = {
    decorators: [
        ThemeDecorator(Theme.DARK),
    ],
};

export const NoAuth: Story = {
    decorators: [StoreDecorator({
        user: {},
    })],
};
