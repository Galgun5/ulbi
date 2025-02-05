import type { Meta, StoryObj } from '@storybook/react';
import { StoreDecorator } from 'shared/config/storybook/StoreDecorator/StoreDecorator';
import { Article, ArticleType } from 'entities_/Article';
import { http, HttpResponse, delay } from 'msw';
import { ArticleRecommendationsList } from './ArticleRecommendationsList';

const article: Article = {
    id: '1',
    title: 'Javascript news',
    subtitle: "What's new in JS for 2024?",
    img: '',
    views: 1022,
    createdAt: '26.02.2022',
    type: [ArticleType.IT],
    user: {
        id: '1',
        username: 'user',
        avatar: '',
    },
    blocks: [],
};

const meta = {
    title: 'features/ArticleRecommendationsList',
    component: ArticleRecommendationsList,
    decorators: [StoreDecorator({})],
    // parameters: {
    //     mockData: [
    //         {
    //             url: `${__API__}/articles`,
    //             method: 'GET',
    //             status: 200,
    //             response: {
    //                 data: [
    //                     { ...article, id: '1' },
    //                     { ...article, id: '2' },
    //                     { ...article, id: '3' },
    //                 ],
    //             },
    //         },
    //     ],
    // },
} satisfies Meta<typeof ArticleRecommendationsList>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
    args: {},
};
