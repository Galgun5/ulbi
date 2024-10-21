import {
    Meta, StoryObj,
} from '@storybook/react';

import { ArticleView } from 'entities_/Article';
import { ArticleViewSelector } from './ArticleViewSelector';

const meta = {
    title: 'entities_/Article/ArticleViewSelector',
    component: ArticleViewSelector,
} satisfies Meta<typeof ArticleViewSelector>;

type Story = StoryObj<typeof meta>;

export const SMALL: Story = {
    args: {
        onViewClick: () => {},
        view: ArticleView.SMALL,
    },
};

export const BIG: Story = {
    args: {
        onViewClick: () => {},
        view: ArticleView.BIG,
    },

};
