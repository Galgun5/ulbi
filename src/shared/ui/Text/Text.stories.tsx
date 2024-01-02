import type { Meta, StoryObj } from '@storybook/react';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from 'app/providers/ThemeProvider';
import { Text, TextAlign, TextTheme } from './Text';

const meta = {
    title: 'shared/Text',
    component: Text,
} satisfies Meta<typeof Text>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
    args: {
        title: 'Title',
        text: 'Text',
    },
};

export const Left: Story = {
    args: {
        title: 'Title',
        text: 'Text',
        align: TextAlign.LEFT,
    },
};
export const Right: Story = {
    args: {
        title: 'Title',
        text: 'Text',
        align: TextAlign.RIGHT,
    },
};
export const Center: Story = {
    args: {
        title: 'Title',
        text: 'Text',
        align: TextAlign.CENTER,
    },
};

export const Error: Story = {
    args: {
        title: 'Error Title',
        text: 'Error Text',
        theme: TextTheme.ERROR,
    },
};

export const onlyTitle: Story = {
    args: {
        title: 'Title',
    },
};

export const onlyText: Story = {
    args: {
        text: 'Text',
    },
};

export const PrimaryDark: Story = {
    args: {
        title: 'Title',
        text: 'Text',
    },
    decorators: [ThemeDecorator(Theme.DARK)],
};

export const onlyTitleDark: Story = {
    args: {
        title: 'Title',
    },
    decorators: [ThemeDecorator(Theme.DARK)],
};

export const onlyTextDark: Story = {
    args: {
        text: 'Text',
    },
    decorators: [ThemeDecorator(Theme.DARK)],
};
