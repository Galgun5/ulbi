import { classNames } from 'shared/lib/classNames/classNames';
import { memo, ReactNode, useCallback } from 'react';
import { Card, CardTheme } from 'shared/ui/Card/Card';
import { typedMemo } from 'shared/types';
import cls from './Tabs.module.scss';

export interface TabItem<T> {
    value: T;
    content: ReactNode;
}

interface TabsProps<T> {
    className?: string;
    tabs: TabItem<T>[];
    value: T;
    onTabClick: (tab: TabItem<T>) => void;
}

const _Tabs = <T, >(props: TabsProps<T>) => {
    const {
        className, tabs, onTabClick, value,
    } = props;

    const clickHandle = useCallback((tab: TabItem<T>) => () => {
        onTabClick(tab);
    }, [onTabClick]);

    return (
        <div className={classNames(cls.Tabs, {}, [className])}>
            {tabs.map((tab) => (
                <Card
                    key={String(tab.value)}
                    theme={tab.value === value ? CardTheme.NORMAL : CardTheme.OUTLINE}
                    className={cls.tab}
                    onClick={clickHandle(tab)}
                >
                    {tab.content}
                </Card>
            ))}
        </div>
    );
};

export const Tabs = typedMemo(_Tabs);
