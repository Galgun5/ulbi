import type { Meta, StoryObj } from '@storybook/react';
import { CountrySelect } from './CountrySelect';

const meta = {
    title: 'entities_/CountrySelect',
    component: CountrySelect,
} satisfies Meta<typeof CountrySelect>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {};

export const Readonly: Story = {
    args: {
        readOnly: true,
    },
};
