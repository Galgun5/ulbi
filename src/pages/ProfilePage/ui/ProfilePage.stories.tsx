import type { Meta, StoryObj } from '@storybook/react';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { StoreDecorator } from 'shared/config/storybook/StoreDecorator/StoreDecorator';
import { Theme } from 'app/providers/ThemeProvider';
import { Country } from 'entities_/Country';
import { Currency } from 'entities_/Currency';
import TestAvatar from 'shared/assets/tests/testPicture.jpg';
import ProfilePage from './ProfilePage';

const meta = {
    title: 'pages/ProfilePage',
    component: ProfilePage,
    decorators: [StoreDecorator({
        profile: {
            form: {
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
    })],
} satisfies Meta<typeof ProfilePage>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
};

export const Dark: Story = {
    decorators: [ThemeDecorator(Theme.DARK)],
};
