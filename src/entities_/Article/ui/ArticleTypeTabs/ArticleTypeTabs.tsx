import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { memo, useCallback, useMemo } from 'react';
import { TabItem, Tabs } from 'shared/ui/Tabs/Tabs';
import { ArticleType } from '../../model/types/article';

interface ArticleTypeTabsProps {
    className?: string;
    value: ArticleType;
    onChangeType: (type: ArticleType) => void;
}

export const ArticleTypeTabs = memo((props: ArticleTypeTabsProps) => {
    const { className, value, onChangeType } = props;
    const { t } = useTranslation();

    const typeTabs = useMemo<TabItem<ArticleType>[]>(() => [
        {
            value: ArticleType.ALL,
            content: t('All'),
        },
        {
            value: ArticleType.IT,
            content: t('IT'),
        },
        {
            value: ArticleType.TECHNOLOGY,
            content: t('Technology'),
        },
        {
            value: ArticleType.EDUCATION,
            content: t('Education'),
        },
        {
            value: ArticleType.ENVIRONMENT,
            content: t('Environment'),
        },
        {
            value: ArticleType.HEALTH,
            content: t('Health'),
        },
        {
            value: ArticleType.TRANSPORTATION,
            content: t('Transportation'),
        },
        {
            value: ArticleType.ENGINEERING,
            content: t('Engineering'),
        },
        {
            value: ArticleType.ENTERTAINMENT,
            content: t('Entertainment'),
        },
        {
            value: ArticleType.INTERNET,
            content: t('Internet'),
        },
        {
            value: ArticleType.SCIENCE,
            content: t('Science'),
        },
    ], [t]);

    const onTabClick = useCallback((tab: TabItem<ArticleType>) => {
        onChangeType(tab.value);
    }, [onChangeType]);

    return (
        <Tabs
            tabs={typeTabs}
            value={value}
            onTabClick={onTabClick}
            className={classNames('', {}, [className])}
        />
    );
});
