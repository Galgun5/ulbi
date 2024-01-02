import type { Meta, StoryObj } from '@storybook/react';
import { Avatar } from './Avatar';
import TestAvatar from './testAvatar.jpg';

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

export const Small: Story = {
    args: {
        size: 50,
        src: TestAvatar,
    },
};
