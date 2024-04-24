import { useTranslation } from 'react-i18next';
import { Counter } from 'entities_/Counter';
import { Input } from 'shared/ui/Input/Input';
import { Page } from 'shared/ui/Page/Page';

const MainPage = () => {
    const { t } = useTranslation('main');

    return (
        <Page>
            {t('MainPage')}
            <Counter />
            <Input placeholder="place" />
        </Page>
    );
};

export default MainPage;
