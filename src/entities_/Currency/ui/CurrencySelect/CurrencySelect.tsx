import { classNames } from 'shared/lib/classNames/classNames';
import { Select, SelectOption } from 'shared/ui/Select/Select';
import { useTranslation } from 'react-i18next';
import { memo, useCallback } from 'react';
import { Currency } from '../../modal/types/currency';

interface CurrencySelectProps {
    className?: string;
    value?: Currency;
    onChange?: (value: Currency) => void;
    readOnly?: boolean;
}
const options: SelectOption[] = [
    { value: Currency.UAH, content: Currency.UAH },
    { value: Currency.USD, content: Currency.USD },
    { value: Currency.EUR, content: Currency.EUR },
];
export const CurrencySelect = memo(({
    className,
    value,
    onChange,
    readOnly,
}: CurrencySelectProps) => {
    const { t } = useTranslation();

    const onChangeHandler = useCallback((value: string) => {
        onChange?.(value as Currency);
    }, [onChange]);

    return (
        <Select
            value={value}
            onChange={onChangeHandler}
            className={classNames('', {}, [className])}
            label={t('your currency')}
            options={options}
            readOnly={readOnly}
        />
    );
});
