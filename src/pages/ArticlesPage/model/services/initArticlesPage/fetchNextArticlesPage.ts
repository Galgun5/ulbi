import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThunkConfig } from 'app/providers/StoreProvider';
import { ArticleSortField, ArticleType } from 'entities_/Article';
import { SortOrder } from 'shared/types';
import { getArticlesPageInit } from '../../selectors/articlesPageSelectors';
import { articlesPageActions } from '../../slices/articlesPageSlice';
import { fetchArticlesList } from '../fetchArticlesList/fetchArticlesList';

export const initArticlesPage = createAsyncThunk<
    void,
    URLSearchParams,
    ThunkConfig<string>
    >(
        'articlesPage/initArticlesPage',
        async (searchParams, thunkApi) => {
            const { getState, dispatch } = thunkApi;
            const inited = getArticlesPageInit(getState());

            if (!inited) {
                const order = searchParams.get('order') as SortOrder;
                const sort = searchParams.get('sort') as ArticleSortField;
                const search = searchParams.get('search');
                const type = searchParams.get('type') as ArticleType;

                if (order) {
                    dispatch(articlesPageActions.setOrder(order));
                }
                if (sort) {
                    dispatch(articlesPageActions.setSort(sort));
                }
                if (search) {
                    dispatch(articlesPageActions.setSearch(search));
                }
                if (type) {
                    dispatch(articlesPageActions.setType(type));
                }

                dispatch(articlesPageActions.initState());
                dispatch(fetchArticlesList({}));
            }
        },
    );
