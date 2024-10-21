import { createSelector } from '@reduxjs/toolkit';
import { getArticleDetailsData } from 'entities_/Article/model/selectors/articleDetails';
import { getAuthUserData } from 'entities_/User';

export const getCanEditArticle = createSelector(
    getArticleDetailsData,
    getAuthUserData,
    (article, user) => {
        if (!article || !user) {
            return false;
        }

        return article.user.id === user.id;
    },
);
