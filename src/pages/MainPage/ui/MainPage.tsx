import { useTranslation } from 'react-i18next';
import { Counter } from 'entities_/Counter';
import { Input } from 'shared/ui/Input/Input';

const MainPage = () => {
    const { t } = useTranslation('main');

    return (
        <div>
            {t('MainPage')}
            <Counter />
            <Input placeholder="place" />
        </div>
    );
};

export default MainPage;
