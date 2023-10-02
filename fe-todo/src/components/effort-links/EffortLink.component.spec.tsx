import React from 'react';
import ReactDOM from 'react-dom';
import { EffortLink } from './EffortLink.component';

it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<EffortLink />, div);
});