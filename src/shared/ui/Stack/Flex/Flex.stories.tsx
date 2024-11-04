import React from 'react';
import { Meta, StoryObj } from '@storybook/react';

import { Flex } from './Flex';

const meta = {
    title: 'shared/Flex',
    component: Flex,
    args: {
        direction: 'row',
    },
} satisfies Meta<typeof Flex>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Row: Story = {
    args: {
        children: (
            <>
                <div>item</div>
                <div>item</div>
                <div>item</div>
                <div>item</div>
            </>
        ),
    },
};

export const RowGap4: Story = {
    args: {
        gap: '4',
        children: (
            <>
                <div>item</div>
                <div>item</div>
                <div>item</div>
                <div>item</div>
            </>
        ),
    },
};
export const RowGap8: Story = {
    args: {
        gap: '8',
        children: (
            <>
                <div>item</div>
                <div>item</div>
                <div>item</div>
                <div>item</div>
            </>
        ),
    },
};

export const RowGap16: Story = {
    args: {
        gap: '16',
        children: (
            <>
                <div>item</div>
                <div>item</div>
                <div>item</div>
                <div>item</div>
            </>
        ),
    },
};

export const Column: Story = {
    args: {
        direction: 'column',
        children: (
            <>
                <div>item</div>
                <div>item</div>
                <div>item</div>
                <div>item</div>
            </>
        ),
    },
};

export const ColumnGap16: Story = {
    args: {
        direction: 'column',
        gap: '16',
        children: (
            <>
                <div>item</div>
                <div>item</div>
                <div>item</div>
                <div>item</div>
            </>
        ),
    },
};

export const ColumnAlignEnd: Story = {
    args: {
        direction: 'column',
        align: 'end',
        children: (
            <>
                <div>item</div>
                <div>item</div>
                <div>item</div>
                <div>item</div>
            </>
        ),
    },
};
