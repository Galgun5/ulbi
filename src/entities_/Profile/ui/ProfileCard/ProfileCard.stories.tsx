import type { Meta, StoryObj } from '@storybook/react';
import { Country } from 'entities_/Country';
import { Currency } from 'entities_/Currency';
import TestAvatar from 'shared/assets/tests/testPicture.jpg';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from 'app/providers/ThemeProvider';
import { ProfileCard } from './ProfileCard';

const meta = {
    title: 'entities_/ProfileCard',
    component: ProfileCard,
    args: {
        data: {
            username: 'admin',
            age: 22,
            country: Country.Ukraine,
            lastname: 'Last Name',
            first: 'First Name',
            city: 'Dnipro',
            currency: Currency.UAH,
            avatar: TestAvatar,
        },
    },
} satisfies Meta<typeof ProfileCard>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
};
export const Dark: Story = {
    decorators: [ThemeDecorator(Theme.DARK)],
};
export const WithError: Story = {
    args: {
        error: 'error',
    },
};

export const Loading: Story = {
    args: {
        loading: true,
    },
};

export const ReadOnly: Story = {
    args: {
        readOnly: true,
    },
};
