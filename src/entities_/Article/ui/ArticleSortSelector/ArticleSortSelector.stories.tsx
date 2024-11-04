import { Meta, StoryObj } from '@storybook/react';
import { ArticleSortField } from '../../model/types/article';
import { ArticleSortSelector } from './ArticleSortSelector';

const meta = {
    title: 'entities_/Article/ArticleSortSelector',
    component: ArticleSortSelector,
} satisfies Meta<typeof ArticleSortSelector>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Created: Story = {
    args: {
        sort: ArticleSortField.CREATED,
        order: 'asc',
        onChangeSort: () => {},
        onChangeOrder: () => {},
    },
};
export const Title: Story = {
    args: {
        sort: ArticleSortField.TITLE,
        order: 'asc',
        onChangeSort: () => {},
        onChangeOrder: () => {},
    },
};

export const Views: Story = {
    args: {
        sort: ArticleSortField.VIEWS,
        order: 'asc',
        onChangeSort: () => {},
        onChangeOrder: () => {},
    },
};

export const CreatedDESC: Story = {
    args: {
        sort: ArticleSortField.VIEWS,
        order: 'desc',
        onChangeSort: () => {},
        onChangeOrder: () => {},
    },
};
