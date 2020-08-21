import React, { FC } from 'react';
import { useIntl } from 'react-intl';

export const Home: FC = () => {
    const intl = useIntl();

    return (
        <>
            <h1>{intl.formatMessage({ id: 'title' })}</h1>
        </>
    );
};
