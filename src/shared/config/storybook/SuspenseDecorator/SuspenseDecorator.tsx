import { DecoratorFunction } from '@storybook/types';
import { Suspense } from 'react';

export const SuspenseDecorator: DecoratorFunction<any> = (Story) => (
    <Suspense fallback="">
        <Story />
    </Suspense>
);
