import type { Meta, StoryObj } from '@storybook/react';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from 'app/providers/ThemeProvider';
import { Select } from './Select';

const meta = {
    title: 'shared/Select',
    component: Select,
} satisfies Meta<typeof Select>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
    args: {
        label: 'Select',
        options: [{
            value: '123',
            content: '123',
        }, {
            value: '1234',
            content: '1234',
        }],
    },

};

export const Readonly: Story = {
    args: {
        label: 'Select',
        options: [{
            value: '123',
            content: '123',
        }, {
            value: '1234',
            content: '1234',
        }],
        readOnly: true,
    },

};
