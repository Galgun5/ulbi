import { rtkApi } from 'shared/api/rtkApi';
import { Article } from 'entities_/Article';

const recommendationsApi = rtkApi.injectEndpoints({
    endpoints: (build) => ({
        getArticleRecommendationsList: build.query<Article[], number>({
            query: (limit) => ({
                url: '/articles',
                params: {
                    _limit: limit,
                },
            }),
        }),
    }),
});

// eslint-disable-next-line max-len
export const useArticleRecommendationsList = recommendationsApi.useGetArticleRecommendationsListQuery;
