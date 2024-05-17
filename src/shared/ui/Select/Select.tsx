import { classNames, Mods } from 'shared/lib/classNames/classNames';
import { ChangeEvent, memo, useMemo } from 'react';
import { typedMemo } from 'shared/types';
import cls from './Select.module.scss';

export interface SelectOption<T extends string> {
    value: T;
    content: string
}

interface SelectProps<T extends string> {
    className?: string
    label?: string
    options?: SelectOption<T>[];
    value?: string;
    onChange?: (value: T) => void;
    readOnly?: boolean;
}

const _Select = <T extends string, >({
    className,
    label,
    options,
    value,
    onChange,
    readOnly,
}: SelectProps<T>) => {
    const mods: Mods = {};

    const optionsList = useMemo(() => options?.map(({ value, content }) => (
        <option
            className={cls.option}
            value={value}
            key={value}
        >
            {content}
        </option>
    )), [options]);

    const onChangeHandler = (e: ChangeEvent<HTMLSelectElement>) => {
        onChange?.(e.target.value as T);
    };

    return (
        <div className={classNames(cls.Wrapper, mods, [className])}>
            {label && <span className={cls.label}>{`${label}>`}</span>}
            <select
                disabled={readOnly}
                value={value}
                className={cls.select}
                onChange={onChangeHandler}
            >
                {optionsList}
            </select>
        </div>
    );
};

export const Select = typedMemo(_Select);
