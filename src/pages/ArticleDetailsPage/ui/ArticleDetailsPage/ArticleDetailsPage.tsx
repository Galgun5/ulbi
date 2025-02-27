import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { memo } from 'react';
import { ArticleDetails } from 'entities_/Article';
import { useParams } from 'react-router-dom';
import {
    DynamicModuleLoader, ReducerList,
} from 'shared/lib/components/DynamicModuleLoader/DynamicModuleLoader';
import { Page } from 'widgets/Page/Page';

import { VStack } from 'shared/ui/Stack';
import { ArticleRecommendationsList } from 'features/articleRecommendationsList';
import {
    ArticleDetailsComments,
} from '../ArticleDetailsComments/ArticleDetailsComments';
import {
    articleDetailsPageReducer,
} from '../../model/slices/index';
import {
    ArticleDetailsPageHeader,
} from '../ArticleDetailsPageHeader/ArticleDetailsPageHeader';
import cls from './ArticleDetailsPage.module.scss';

interface ArticleDetailsPageProps {
    className?: string
}

const reducers: ReducerList = {
    articleDetailsPage: articleDetailsPageReducer,
};

const ArticleDetailsPage = ({ className }: ArticleDetailsPageProps) => {
    const { t } = useTranslation('article');

    const { id } = useParams<{id: string}>();

    return (
        <DynamicModuleLoader reducers={reducers} removeAfterUnmount>
            <Page className={classNames(cls.ArticleDetailsPage, {}, [className])}>
                <VStack gap="16" max>
                    <ArticleDetailsPageHeader />
                    <ArticleDetails id={id} />
                    <ArticleRecommendationsList />
                    <ArticleDetailsComments id={id} />
                </VStack>

            </Page>
        </DynamicModuleLoader>
    );
};
export default memo(ArticleDetailsPage);
