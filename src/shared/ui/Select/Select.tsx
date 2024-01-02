import { classNames, Mods } from 'shared/lib/classNames/classNames';
import { ChangeEvent, memo, useMemo } from 'react';
import cls from './Select.module.scss';

export interface SelectOption {
    value: string;
    content: string
}

interface SelectProps {
    className?: string
    label?: string
    options?: SelectOption[];
    value?: string;
    onChange?: (value: string) => void;
    readOnly?: boolean;
}

export const Select = memo(({
    className,
    label,
    options,
    value,
    onChange,
    readOnly,
}: SelectProps) => {
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
        onChange?.(e.target.value);
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
});
