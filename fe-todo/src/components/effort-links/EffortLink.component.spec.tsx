
import { Priority } from '../domain/Priority.enum';
import { EffortLink } from './EffortLink.component';
import { render } from '@testing-library/react';

it('renders without crashing', () => {
    render(<EffortLink priority={Priority.DEFAULT} />);
});