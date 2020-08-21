import '@testing-library/jest-dom/extend-expect';
import { render } from '@testing-library/react';
import React from 'react';
import { Home } from './Home';

test('Home: should render page title', () => {
    const { getByText } = render(<Home />);

    expect(getByText('Home page')).toBeInTheDocument();
});
