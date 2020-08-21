import { createBrowserHistory } from 'history';
import React from 'react';
import { IntlProvider } from 'react-intl';
import { Redirect, Route, Router, Switch } from 'react-router-dom';
import { Home } from './pages/home/Home';
import { ROUTES } from './router/routes';
import * as translations from './translations';

const App = () => {
    const locale = 'en';
    const { HOME } = ROUTES;

    return (
        <IntlProvider locale={locale} messages={translations.default[locale].messages}>
            <Router history={createBrowserHistory()}>
                <Switch>
                    <Route path={HOME} exact component={Home} />
                    <Redirect to={HOME} />
                </Switch>
            </Router>
        </IntlProvider>
    );
};

export default App;
