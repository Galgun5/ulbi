import { Meta, StoryObj } from '@storybook/react';

import { CommentList } from './CommentList';

const meta = {
    title: 'entities_/CommentList',
    component: CommentList,
} satisfies Meta<typeof CommentList>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Primary: Story = {
    args: {},
};
