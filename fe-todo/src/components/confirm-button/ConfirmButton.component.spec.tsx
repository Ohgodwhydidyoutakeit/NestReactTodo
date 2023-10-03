
import { ConfirmButton } from './ConfirmButton.component';
import { render } from '@testing-library/react';


it('renders without crashing', () => {
    render(<ConfirmButton text='test' />);
});