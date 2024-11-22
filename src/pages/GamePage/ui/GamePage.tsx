import { classNames, Mods } from 'shared/lib/classNames/classNames';

import { Page } from 'widgets/Page/Page';
import {
    useEffect, useLayoutEffect, useRef, useState,
} from 'react';
import { useTranslation } from 'react-i18next';
import { Button } from 'shared/ui/Button/Button';
import { HStack } from 'shared/ui/Stack';
import cls from './GamePage.module.scss';

interface GamePageProps {
    className?: string
}

interface ArrayItem {
    value: number;
    id: string;
    position: string;
}
const randomNums = () => {
    const num1 = Math.floor(Math.random() * 16);

    let num2;
    do {
        num2 = Math.floor(Math.random() * 16);
    } while (num2 === num1);

    return { num1, num2 };
};

const fromArray = Array.from({ length: 4 });

const getArray = () => {
    const { num1, num2 } = randomNums();
    // const { num1, num2 } = { num1: 0, num2: 2 };

    let index = 0;
    const initArray: ArrayItem[][] = fromArray.map((_, i) => fromArray.map((_, j) => {
        const isRandomIndex = index === num1 || index === num2;
        const value = isRandomIndex ? 2 : 0;
        index += 1;
        return ({
            value,
            id: `${index}`,
            // position: value ? `${i}_${j}` : '',
            position: `${i}_${j}`,
        });
    }));
    return initArray;
};
const getBootomArray = () => {
    // const { num1, num2 } = randomNums();
    const { num1, num2 } = { num1: 12, num2: 14 };

    let index = 0;
    const initArray: ArrayItem[][] = fromArray.map((_, i) => fromArray.map((_, j) => {
        const isRandomIndex = index === num1 || index === num2;
        const value = isRandomIndex ? 2 : 0;
        index += 1;

        let id = `${index}`;

        if (id === '1') {
            id = '222';
        }
        if (id === '13') {
            id = '1';
        }

        return ({
            value,
            id,
            // position: value ? `${i}_${j}` : '',
            position: `${i}_${j}`,
        });
    }));
    return initArray;
};

const initArray = getArray();

const GamePage = ({ className }: GamePageProps) => {
    const { t } = useTranslation();

    const [array, setArray] = useState(initArray);
    const positions = useRef<Record<string, DOMRect>>({});

    const onReset = () => {
        setArray(getArray());
    };
    const onBootom = () => {
        setArray(getBootomArray());
    };

    const items = array.flat();

    // Apply animation on items after they change positions
    useLayoutEffect(() => {
        const _positions: Record<string, DOMRect> = {};

        items.forEach((item) => {
            const domNode = document.getElementById(`item-${item.id}`);

            if (domNode) {
                const newRect = domNode.getBoundingClientRect();
                const oldRect = positions.current[item.id as keyof typeof positions.current];

                _positions[item.id] = newRect;

                if (oldRect) {
                    const deltaX = oldRect.left - newRect.left;
                    const deltaY = oldRect.top - newRect.top;

                    console.log(newRect, oldRect, deltaX, deltaY);
                    if (deltaX % 5) return;
                    if (deltaY % 5) return;

                    // Apply transform to start from previous position
                    domNode.style.transition = 'none';
                    domNode.style.transform = `translate(${deltaX}px, ${deltaY}px)`;

                    // Force reflow to ensure transform is applied
                    domNode.getBoundingClientRect();

                    // Animate to the new position
                    domNode.style.transition = 'transform 0.3s ease';
                    domNode.style.transform = '';
                }
            }
        });
        console.log('write');
        positions.current = _positions;
    }, [items]);

    return (
        <Page className={classNames(cls.GamePage, {}, [className])}>
            <div className={cls.field}>
                {initArray.map((row) => row.map(({ id }) => (
                    <div key={id} className={cls.bar} />
                )))}
                {items.map(({ value, id, position }) => {
                    const color = `c${value}`;
                    const positionClass = `position-${position}`;

                    const mods: Mods = {
                        [cls[color]]: color,
                        [cls[positionClass]]: positionClass,
                    };
                    // if (!value) return null;
                    return (
                        <div
                            key={id}
                            id={`item-${id}`}
                            className={classNames(cls.tile, mods, [''])}
                        >
                            {!!value && value}
                        </div>
                    );
                })}

            </div>
            <HStack className={cls.reset} gap="8">
                <Button onClick={onReset}>{t('Reset')}</Button>
                <Button onClick={onBootom}>{t('onBootom')}</Button>
            </HStack>

        </Page>
    );
};

export default GamePage;
