import type { Meta, StoryObj } from '@storybook/react';
import { CurrencySelect } from './CurrencySelect';

const meta = {
    title: 'entities_/CurrencySelect',
    component: CurrencySelect,
} satisfies Meta<typeof CurrencySelect>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {};
export const Readonly: Story = {
    args: {
        readOnly: true,
    },
};
