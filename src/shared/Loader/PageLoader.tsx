import { classNames } from 'shared/lib/classNames/classNames';
import cls from './PageLoader.module.scss';

interface PageLoaderProps {
    className?: string
}

export const Loader = ({ className }: PageLoaderProps) => (
    <div
        className={classNames(cls['lds-circle'], {}, [className])}
    >
        <div />
    </div>
);
