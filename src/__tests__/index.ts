import React from 'react';
import { render } from '@testing-library/react';
import Keyboard from '../components/Keyboard';

describe('Keyboard', () => {
    it('renders correctly', () => {
        const { container } = render(<Keyboard/>);
        expect(container).toMatchSnapshot();
    });
});