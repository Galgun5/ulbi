import type { Meta, StoryObj } from '@storybook/react';
import { Modal } from 'shared/ui/Modal/Modal';
import { ButtonTheme } from 'shared/ui/Button/Button';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from 'app/providers/ThemeProvider';

const meta = {
    title: 'shared/Modal',
    component: Modal,
} satisfies Meta<typeof Modal>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
    args: {
        isOpen: true,
        children: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. At culpa cum earum error ipsa laudantium magnam mollitia numquam perferendis quibusdam? Assumenda laboriosam maxime nemo neque numquam reprehenderit voluptatem. Nobis, unde.',
    },
};

export const Dark: Story = {
    args: {
        isOpen: true,
        children: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. At culpa cum earum error ipsa laudantium magnam mollitia numquam perferendis quibusdam? Assumenda laboriosam maxime nemo neque numquam reprehenderit voluptatem. Nobis, unde.',
    },
    decorators: [ThemeDecorator(Theme.DARK)],
};
