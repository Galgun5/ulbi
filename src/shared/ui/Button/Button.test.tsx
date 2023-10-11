import { render, screen } from '@testing-library/react';
import { Button, ThemeButton } from 'shared/ui/Button/Button';

describe('Button', () => {
    test('Test render', () => {
        render(<Button>Test</Button>);
        expect(screen.getByText('Test')).toBeInTheDocument();
    });
    test('Button with theme Clear', () => {
        render(<Button theme={ThemeButton.CLEAR}>Text</Button>);
        expect(screen.getByText('Text')).toHaveClass('clear');
    });
});
