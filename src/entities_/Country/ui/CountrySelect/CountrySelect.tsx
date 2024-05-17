import { classNames } from 'shared/lib/classNames/classNames';
import { Select, SelectOption } from 'shared/ui/Select/Select';
import { useTranslation } from 'react-i18next';
import { memo, useCallback } from 'react';
import { Country } from '../../modal/types/country';

interface CountrySelectProps {
    className?: string;
    value?: Country;
    onChange?: (value: Country) => void;
    readOnly?: boolean;
}
const options: SelectOption<string>[] = [
    { value: Country.Ukraine, content: Country.Ukraine },
    { value: Country.USA, content: Country.USA },
    { value: Country.Poland, content: Country.Poland },
];
export const CountrySelect = memo(({
    className,
    value,
    onChange,
    readOnly,
}: CountrySelectProps) => {
    const { t } = useTranslation();

    const onChangeHandler = useCallback((value: string) => {
        onChange?.(value as Country);
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
