import type { Meta, StoryObj } from '@storybook/react';
import { StoreDecorator } from 'shared/config/storybook/StoreDecorator/StoreDecorator';
import { LoginForm } from './LoginForm';

const meta = {
    title: 'features/LoginForm',
    component: LoginForm,
    decorators: [StoreDecorator({
        loginForm: {
            username: '123',
            password: '123',
        },
    })],
} satisfies Meta<typeof LoginForm>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
    args: {},
};

export const WithError: Story = {
    args: {},
    decorators: [StoreDecorator({
        loginForm: {
            username: '123',
            password: '123',
            error: 'error',
        },
    })],
};
export const Loading: Story = {
    args: {},
    decorators: [StoreDecorator({
        loginForm: {
            isLogin: true,
        },
    })],
};
