import {
    Meta, StoryObj,
} from '@storybook/react';

import { ArticleView } from '../../model/types/article';
import { ArticleViewSelector } from './ArticleViewSelector';

const meta = {
    title: 'entities_/Article/ArticleViewSelector',
    component: ArticleViewSelector,
} satisfies Meta<typeof ArticleViewSelector>;

export default meta;
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
