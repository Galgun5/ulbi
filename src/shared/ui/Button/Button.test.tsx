import { render, screen } from '@testing-library/react';
import { Button, ButtonTheme } from 'shared/ui/Button/Button';

describe('Button', () => {
    test('Test render', () => {
        render(<Button>Test</Button>);
        expect(screen.getByText('Test')).toBeInTheDocument();
    });
    test('Button with theme Clear', () => {
        render(<Button theme={ButtonTheme.CLEAR}>Text</Button>);
        expect(screen.getByText('Text')).toHaveClass('clear');
    });
});
