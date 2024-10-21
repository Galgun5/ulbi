import { EntityState } from '@reduxjs/toolkit';
import { Article } from 'entities_/Article';

export interface ArticleDetailsRecommendationsSchema extends EntityState<Article>{
    isLoading?: boolean;
    error?: string;
}
