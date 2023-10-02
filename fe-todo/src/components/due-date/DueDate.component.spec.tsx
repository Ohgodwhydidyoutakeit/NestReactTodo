import React from 'react';
import ReactDOM from 'react-dom';
import { DueDate } from './DueDate.component';

it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<DueDate />, div);
});