import React, { ReactNode } from 'react';
import { IntlProvider } from 'react-intl';
import * as translations from '../../translations';

type IntlProps = {
    children?: ReactNode;
};

export const intlWrapper = ({ children }: IntlProps) => (
    <IntlProvider locale="en" messages={translations.default['en'].messages}>
        {children}
    </IntlProvider>
);
