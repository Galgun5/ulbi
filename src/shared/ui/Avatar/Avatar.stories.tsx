import type { Meta, StoryObj } from '@storybook/react';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from 'app/providers/ThemeProvider';
import { Avatar } from './Avatar';
import TestAvatar from '../../assets/tests/testPicture.jpg';

const meta = {
    title: 'shared/Avatar',
    component: Avatar,
} satisfies Meta<typeof Avatar>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
    args: {
        size: 150,
        src: TestAvatar,
    },
};
export const Dark: Story = {
    args: {
        size: 150,
        src: TestAvatar,
    },
    decorators: [ThemeDecorator(Theme.DARK)],
};

export const Small: Story = {
    args: {
        size: 50,
        src: TestAvatar,
    },
};
