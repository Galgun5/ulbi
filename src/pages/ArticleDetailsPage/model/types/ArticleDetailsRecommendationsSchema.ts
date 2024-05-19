import { EntityState } from '@reduxjs/toolkit';
import { Article } from 'entities_/Artcle';

export interface ArticleDetailsRecommendationsSchema extends EntityState<Article>{
    isLoading?: boolean;
    error?: string;
}
