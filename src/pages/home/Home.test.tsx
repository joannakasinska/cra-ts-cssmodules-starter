import '@testing-library/jest-dom/extend-expect';
import { render } from '@testing-library/react';
import React from 'react';
import { intlWrapper } from '../../config/test/intlWrapper';
import { Home } from './Home';

test('Home: should render page title', () => {
    const { getByText } = render(<Home />, { wrapper: intlWrapper });

    expect(getByText('Home page')).toBeInTheDocument();
});
