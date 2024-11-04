import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { HTMLAttributeAnchorTarget, memo } from 'react';
import { Text, TextSize } from 'shared/ui/Text/Text';
import { ArticleListItemSkeleton } from '../ArticleListItem/ArticleListItemSkeleton';
import { ArticleListItem } from '../ArticleListItem/ArticleListItem';
import cls from './ArticleList.module.scss';
import { Article, ArticleView } from '../../model/types/article';

interface ArticleListProps {
    className?: string;
    articles: Article[]
    isLoading?: boolean;
    view?: ArticleView;
    target?: HTMLAttributeAnchorTarget
}

const getSkeletons = (view: ArticleView) => new Array(view === ArticleView.SMALL ? 9 : 3)
    .fill(0)
    .map((item, index) => (
        // eslint-disable-next-line react/no-array-index-key
        <ArticleListItemSkeleton className={cls.card} key={index} view={view} />
    ));

export const ArticleList = memo((props: ArticleListProps) => {
    const {
        className,
        articles,
        view = ArticleView.SMALL,
        isLoading,
        target,
    } = props;
    const { t } = useTranslation();

    const renderArticle = (article: Article) => (
        <ArticleListItem
            article={article}
            view={view}
            className={cls.card}
            key={article.id}
            target={target}
        />
    );

    // const isBig = view === ArticleView.BIG;

    // const itemsPerRow = isBig ? 1 : 3;
    // const rowCount = isBig ? articles.length : Math.ceil(articles.length / itemsPerRow);
    //
    // const rowRenderer = useCallback(({
    //     index, key, style,
    // }: ListRowProps) => {
    //     const items = [];
    //     const fromIndex = index * itemsPerRow;
    //     const toIndex = Math.min(fromIndex + itemsPerRow, articles.length);
    //
    //     for (let i = fromIndex; i < toIndex; i = +1) {
    //         items.push(
    //             <ArticleListItem
    //                 article={articles[index]}
    //                 view={view}
    //                 className={cls.card}
    //                 target={target}
    //                 key={`str-${i}`}
    //             />,
    //         );
    //     }
    //
    //     return (
    //         <div
    //             key={key}
    //             style={style}
    //             className={cls.row}
    //         >
    //             {items}
    //         </div>
    //     );
    // }, [articles, itemsPerRow, target, view]);

    if (!isLoading && !articles.length) {
        return (
            <div className={classNames(cls.ArticleList, {}, [className, cls[view]])}>
                <Text size={TextSize.L} title={t('Title not found')} />
            </div>
        );
    }

    return (
        // <WindowScroller
        //     scrollElement={document.getElementById(PAGE_ID) as Element}
        // >
        //     {({
        //         width, height, registerChild, isScrolling, scrollTop, onChildScroll,
        //     }) => {
        //         if (!width || !height) return null;
        //         return (
        //             <div
        //                 className={classNames(cls.ArticleList, {}, [className, cls[view]])}
        //                 // @ts-ignore
        //                 ref={registerChild}
        //             >
        //                 <List
        //                     width={width ? width - 80 : 700}
        //                     height={height ?? 700}
        //                     rowCount={articles.length}
        //                     rowHeight={isBig ? 700 : 330}
        //                     rowRenderer={rowRenderer}
        //                     autoHeight
        //                     onScroll={onChildScroll}
        //                     isScrolling={isScrolling}
        //                     scrollTop={scrollTop}
        //                 />
        //             </div>
        //
        //         );
        //     }}
        // </WindowScroller>
        <div className={classNames(cls.ArticleList, {}, [className, cls[view]])}>
            {articles.length > 0
                ? articles.map(renderArticle)
                : null}
            {isLoading && getSkeletons(view)}
        </div>
    );
});
